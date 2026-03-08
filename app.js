/* ============================================================
   Cognitive Revolution Explorer — app.js
   V5: Grid layout (4 cols × 3 rows), fixed detail overlay,
   smooth lerp zoom, trackpad-friendly scrolling
   ============================================================ */

/* global INDUSTRIES */

/* ---- Constants ---- */
const ZONE_W = 1200;
const ZONE_H = 800;
const GRID_GAP = 12;        /* gap between zones in world-space pixels */
const MOBILE_BREAKPOINT = 768;
let gridCols   = window.innerWidth <= MOBILE_BREAKPOINT ? 2 : 4;
let ZOOM_MIN   = 0.1;  /* Updated dynamically to fit-world scale */
const ZOOM_MAX = 2.5;
const ZOOM_STEP = 0.18;
const PAN_KEY_STEP = 80;
const ANIM_DURATION = 700;
const DRAG_THRESHOLD = 6;   /* px moved before a mousedown counts as drag */

/* ---- Type meta ---- */
const TYPE_META = {
  trend:   { icon: '\u2191', label: 'Trend' },
  tension: { icon: '\u26A1', label: 'Tension' },
  impact:  { icon: '\uD83D\uDCA1', label: 'Impact' }
};

/* ---- Hotspot grid positions (x%, y%) per count ---- */
const HOTSPOT_POSITIONS = [
  [[50, 50]],
  [[30, 38], [70, 58]],
  [[25, 35], [67, 40], [45, 66]],
  [[22, 32], [68, 32], [28, 65], [72, 65]],
  [[20, 30], [55, 28], [80, 38], [30, 65], [68, 68]]
];

/* ---- Grid helpers (recalculated on resize) ---- */
const industryKeys = Object.keys(INDUSTRIES);
const CELL_W       = ZONE_W + GRID_GAP;
const CELL_H       = ZONE_H + GRID_GAP;
let gridRows    = Math.ceil(industryKeys.length / gridCols);
let totalWorldW = gridCols * CELL_W - GRID_GAP;
let totalWorldH = gridRows * CELL_H - GRID_GAP;

function recalcGrid() {
  const newCols = window.innerWidth <= MOBILE_BREAKPOINT ? 2 : 4;
  if (newCols === gridCols) { return false; }
  gridCols    = newCols;
  gridRows    = Math.ceil(industryKeys.length / gridCols);
  totalWorldW = gridCols * CELL_W - GRID_GAP;
  totalWorldH = gridRows * CELL_H - GRID_GAP;
  return true;
}

function zoneGridPos(idx) {
  const col = idx % gridCols;
  const row = Math.floor(idx / gridCols);
  return { col, row, x: col * CELL_W, y: row * CELL_H };
}

/* ---- State ---- */
const state = {
  offsetX: 0,
  offsetY: 0,
  scale: 1,
  isDragging: false,
  wasDragged: false,
  dragStartX: 0,
  dragStartY: 0,
  dragStartOffsetX: 0,
  dragStartOffsetY: 0,
  activeZoneSlug: null,
  openInsightId: null,
  openInsightZoneSlug: null,
  rafId: null,
  touchState: null,
  savedTransform: null,
  isDetailActive: false,
  isZoneExpanded: false
};

/* ---- DOM references ---- */
const worldViewport = document.getElementById('worldViewport');
const worldCanvas   = document.getElementById('worldCanvas');
const navPills      = document.getElementById('navPills');
const navBrand      = document.getElementById('navBrand');
const crumbWorld    = document.getElementById('crumbWorld');
const breadcrumb    = document.getElementById('breadcrumb');
const minimap       = document.getElementById('minimap');
const minimapVP     = document.getElementById('minimapViewport');
const zoomIn        = document.getElementById('zoomIn');
const zoomOut       = document.getElementById('zoomOut');
const zoomReset     = document.getElementById('zoomReset');
const searchToggle  = document.getElementById('searchToggle');
const searchWrapper = document.getElementById('searchWrapper');
const searchInput   = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const onboarding    = document.getElementById('onboarding');
const onboardingBtn = document.getElementById('onboardingDismiss');
const detailFixed   = document.getElementById('detailFixed');
const detailFixedImage = document.getElementById('detailFixedImage');
const detailFixedText  = document.getElementById('detailFixedText');

/* ---- Create the Back Button dynamically ---- */
const backButton = document.createElement('button');
backButton.className = 'back-button';
backButton.id = 'backButton';
backButton.setAttribute('aria-label', 'Zoom back out to overview');
backButton.innerHTML = `
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="11 4 5 10 11 16"/>
    <line x1="5" y1="10" x2="17" y2="10"/>
  </svg>
  Zoom Out`;
document.body.appendChild(backButton);

/* ---- Build world ---- */
function buildWorld() {
  worldCanvas.innerHTML = '';
  worldCanvas.style.width  = totalWorldW + 'px';
  worldCanvas.style.height = totalWorldH + 'px';
  industryKeys.forEach((slug, idx) => buildZone(slug, INDUSTRIES[slug], idx));
}

/* Reposition zones after grid-column change (e.g. desktop ↔ mobile) */
function repositionZones() {
  worldCanvas.style.width  = totalWorldW + 'px';
  worldCanvas.style.height = totalWorldH + 'px';
  industryKeys.forEach((slug, idx) => {
    const zone = document.getElementById(`zone-${slug}`);
    if (!zone) { return; }
    const { x, y } = zoneGridPos(idx);
    zone.style.left = x + 'px';
    zone.style.top  = y + 'px';
  });
}

function buildZone(slug, ind, idx) {
  const { x, y } = zoneGridPos(idx);
  const zone = document.createElement('div');
  zone.className = 'zone';
  zone.id = `zone-${slug}`;
  zone.dataset.slug = slug;
  zone.style.setProperty('--zone-glow-color', ind.color);
  zone.style.position = 'absolute';
  zone.style.left = x + 'px';
  zone.style.top  = y + 'px';

  /* Floating title above the zone (visible when zone is active) */
  const floatTitle = document.createElement('div');
  floatTitle.className = 'zone-float-title';
  floatTitle.innerHTML = `
    <div>
      <div class="zone-float-name">${ind.name}</div>
      <div class="zone-float-subtitle">${ind.subtitle}</div>
    </div>
    <div class="zone-float-stat">
      <div class="zone-float-stat-value" style="color:${ind.color}">${ind.headlineStat.value}</div>
      <div class="zone-float-stat-label">${ind.headlineStat.label}</div>
    </div>`;
  zone.appendChild(floatTitle);

  /* Clipping wrapper */
  const clip = document.createElement('div');
  clip.className = 'zone-clip';

  /* Background image */
  const bg = document.createElement('div');
  bg.className = 'zone-bg';
  bg.style.backgroundImage = `url(assets/scene-${slug}.png)`;
  clip.appendChild(bg);

  /* Label */
  const label = document.createElement('div');
  label.className = 'zone-label';
  label.innerHTML = `
    <div class="zone-label-text">
      <div class="zone-name">${ind.name}</div>
      <div class="zone-subtitle">${ind.subtitle}</div>
    </div>
    <div class="zone-headline-stat">
      <div class="zone-stat-value" style="color:${ind.color}">${ind.headlineStat.value}</div>
      <div class="zone-stat-label">${ind.headlineStat.label}</div>
    </div>`;
  clip.appendChild(label);

  /* Icon */
  const iconEl = document.createElement('div');
  iconEl.className = 'zone-icon';
  iconEl.innerHTML = ind.icon;
  clip.appendChild(iconEl);

  /* Expand button (top-left) — zooms zone to fill viewport */
  const expandBtn = document.createElement('button');
  expandBtn.className = 'zone-expand-btn';
  expandBtn.setAttribute('aria-label', `Expand ${ind.name} to full view`);
  expandBtn.innerHTML = `
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="4 8 4 4 8 4"/>
      <polyline points="16 12 16 16 12 16"/>
      <line x1="4" y1="4" x2="9" y2="9"/>
      <line x1="16" y1="16" x2="11" y2="11"/>
    </svg>`;
  expandBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    expandZone(slug);
  });
  clip.appendChild(expandBtn);

  /* Hotspots */
  const positions = HOTSPOT_POSITIONS[Math.min(ind.insights.length - 1, 4)];
  ind.insights.forEach((insight, i) => {
    const pos = positions[i] || [50, 50];
    const hs = buildHotspot(insight, ind, pos[0], pos[1]);
    clip.appendChild(hs);
  });

  zone.appendChild(clip);
  worldCanvas.appendChild(zone);
}

function buildHotspot(insight, ind, xPct, yPct) {
  const tm = TYPE_META[insight.type] || TYPE_META.trend;
  const hs = document.createElement('div');
  hs.className = 'hotspot';
  hs.id = `hs-${insight.id}`;
  hs.dataset.insightId = insight.id;
  hs.dataset.color = ind.color;
  hs.style.cssText = `left:${xPct}%;top:${yPct}%;--hs-color:${ind.color};`;
  hs.setAttribute('role', 'button');
  hs.setAttribute('tabindex', '0');
  hs.setAttribute('aria-label', `${insight.title}: ${insight.stat}`);

  hs.innerHTML = `
    <div class="hotspot-card">
      <div class="hotspot-type-badge">
        <span class="hotspot-type-icon">${tm.icon}</span>
        <span>${tm.label}</span>
      </div>
      <div class="hotspot-title">${insight.title}</div>
      <div class="hotspot-stat">${insight.stat}</div>
      <div class="hotspot-stat-label">${insight.statLabel}</div>
      <div class="hotspot-cta">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <circle cx="9" cy="9" r="5"/><line x1="14" y1="14" x2="19" y2="19"/>
        </svg>
        Click to explore
      </div>
    </div>
    <div class="hotspot-stem"></div>
    <div class="hotspot-dot"></div>`;

  hs.addEventListener('click', (e) => {
    e.stopPropagation();
    if (_suppressNextClick) { return; }
    openInsight(insight.id);
  });
  hs.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openInsight(insight.id); }
  });

  return hs;
}

/* ---- Populate the fixed detail overlay ---- */
function showFixedDetail(insight, ind) {
  detailFixed.style.setProperty('--detail-color', ind.color);
  detailFixedImage.style.backgroundImage = `url(assets/detail-${insight.id}.png)`;
  detailFixedText.innerHTML = `
    <div class="detail-industry-badge">${ind.name}</div>
    <div class="detail-stat">${insight.stat}</div>
    <div class="detail-stat-label">${insight.statLabel}</div>
    <div class="detail-title">${insight.title}</div>
    <div class="detail-summary">${insight.summary}</div>
    <div class="detail-body">${insight.details}</div>`;
  detailFixedText.scrollTop = 0;
  detailFixed.classList.add('active');
}

function hideFixedDetail() {
  detailFixed.classList.remove('active');
}

/* ---- Nav pills ---- */
function buildNavPills() {
  navPills.innerHTML = '';
  industryKeys.forEach(slug => {
    const ind = INDUSTRIES[slug];
    const pill = document.createElement('button');
    pill.className = 'nav-pill';
    pill.dataset.slug = slug;
    pill.setAttribute('style', `--pill-color:${ind.color}`);
    pill.setAttribute('role', 'tab');
    pill.innerHTML = `<span class="nav-pill-dot"></span>${ind.name}`;
    pill.addEventListener('click', () => {
      if (state.isDetailActive) { zoomBackOut(); }
      panToZone(slug, true);
    });
    navPills.appendChild(pill);
  });
}

/* ---- Transform ---- */
function setTransformImmediate() {
  worldCanvas.style.transform = `translate(${state.offsetX}px, ${state.offsetY}px) scale(${state.scale})`;
  updateMinimapViewport();
  updateActivePill();
}

function applyTransform(animate) {
  if (animate) {
    worldCanvas.classList.add('animating');
    clearTimeout(worldCanvas._animTimeout);
    worldCanvas._animTimeout = setTimeout(() => worldCanvas.classList.remove('animating'), ANIM_DURATION);
  }
  setTransformImmediate();
}

function scheduleTransform() {
  if (state.rafId) { return; }
  state.rafId = requestAnimationFrame(() => {
    state.rafId = null;
    applyTransform(false);
  });
}

/* ---- Smooth lerp-based animation for zoom-reveal ---- */
let _lerpAnim = null;

function lerpTo(targetOffX, targetOffY, targetScale, duration, onDone) {
  if (_lerpAnim) { cancelAnimationFrame(_lerpAnim.raf); _lerpAnim = null; }
  worldCanvas.classList.remove('animating');

  const startOffX  = state.offsetX;
  const startOffY  = state.offsetY;
  const startScale = state.scale;
  const startTime  = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function tick(now) {
    const elapsed = now - startTime;
    const raw     = Math.min(elapsed / duration, 1);
    const t       = easeInOutCubic(raw);

    state.offsetX = startOffX  + (targetOffX  - startOffX)  * t;
    state.offsetY = startOffY  + (targetOffY  - startOffY)  * t;
    state.scale   = startScale + (targetScale - startScale) * t;
    setTransformImmediate();

    if (raw < 1) {
      _lerpAnim = { raf: requestAnimationFrame(tick) };
    } else {
      _lerpAnim = null;
      if (onDone) { onDone(); }
    }
  }

  _lerpAnim = { raf: requestAnimationFrame(tick) };
}

/* ---- Fit world in viewport ---- */
function computeFitTransform() {
  const vw = worldViewport.clientWidth;
  const vh = worldViewport.clientHeight;
  /* Fit the full grid with some padding */
  const scaleX = (vw * 0.94) / totalWorldW;
  const scaleY = (vh * 0.92) / totalWorldH;
  const scale  = Math.min(scaleX, scaleY, 1.0);
  const offX   = (vw - totalWorldW * scale) / 2;
  const offY   = (vh - totalWorldH * scale) / 2;
  return { scale, offX, offY };
}

function updateZoomMin() {
  const { scale } = computeFitTransform();
  ZOOM_MIN = scale;
}

function fitWorld(animate) {
  const { scale, offX, offY } = computeFitTransform();
  ZOOM_MIN = scale;
  state.scale   = scale;
  state.offsetX = offX;
  state.offsetY = offY;
  applyTransform(animate || false);
  state.activeZoneSlug = null;
  updateBreadcrumb(null, null);
}

/* ---- Pan to zone ---- */
function panToZone(slug, animate) {
  const idx = industryKeys.indexOf(slug);
  if (idx < 0) { return; }
  const { x, y } = zoneGridPos(idx);
  const vw = worldViewport.clientWidth;
  const vh = worldViewport.clientHeight;
  const isMobile = vw <= MOBILE_BREAKPOINT;
  const maxPanScale = isMobile ? 1.5 : 0.85;
  const targetScale = Math.min(maxPanScale, (vw * 0.95) / ZONE_W, (vh * 0.85) / ZONE_H);
  const offX = vw / 2 - (x + ZONE_W / 2) * targetScale;
  /* On mobile, push zone towards the top instead of dead-centering */
  const offY = isMobile
    ? (vh * 0.15) - y * targetScale
    : vh / 2 - (y + ZONE_H / 2) * targetScale;
  state.scale   = targetScale;
  state.offsetX = offX;
  state.offsetY = offY;
  state.activeZoneSlug = slug;
  applyTransform(animate);
  updateBreadcrumb(slug, null);
}

/* ---- Expand zone to fill viewport (no detail overlay) ---- */
function expandZone(slug) {
  if (state.isDetailActive) { return; }
  const idx = industryKeys.indexOf(slug);
  if (idx < 0) { return; }
  const { x, y } = zoneGridPos(idx);
  const vw = worldViewport.clientWidth;
  const vh = worldViewport.clientHeight;

  /* Scale so zone fills the viewport */
  const scaleX = vw / ZONE_W;
  const scaleY = vh / ZONE_H;
  const targetScale = Math.max(scaleX, scaleY);

  const zoneCenterX = x + ZONE_W / 2;
  const zoneCenterY = y + ZONE_H / 2;
  const offX = vw / 2 - zoneCenterX * targetScale;
  const offY = vh / 2 - zoneCenterY * targetScale;

  /* Save the pre-expand transform BEFORE lerp overwrites state */
  state.savedTransform = {
    offsetX: state.offsetX,
    offsetY: state.offsetY,
    scale: state.scale
  };

  state.activeZoneSlug = slug;

  /* Hide other zones, highlight the active one */
  worldCanvas.classList.add('zone-expanded');
  const activeZoneEl = document.getElementById(`zone-${slug}`);
  if (activeZoneEl) { activeZoneEl.classList.add('zone-expanded-active'); }

  lerpTo(offX, offY, targetScale, ANIM_DURATION, () => {
    state.isZoneExpanded = true;
    backButton.classList.add('visible');
    worldViewport.style.cursor = 'default';
  });

  updateBreadcrumb(slug, null);
}

/* ---- Zoom around point ---- */
function zoomAroundPoint(newScale, cx, cy) {
  if (state.isDetailActive || state.isZoneExpanded) { return; }
  newScale = clamp(newScale, ZOOM_MIN, ZOOM_MAX);
  const factor = newScale / state.scale;
  state.offsetX = cx - (cx - state.offsetX) * factor;
  state.offsetY = cy - (cy - state.offsetY) * factor;
  state.scale   = newScale;
  clampOffsets();
  scheduleTransform();
}

/* ---- Clamp offset ---- */
/* The user can pan until the first column's left edge reaches
   the viewport center, and until the last column's right edge
   reaches the viewport center.  This guarantees every edge of
   every image is comfortably reachable.  Same logic vertically. */
function clampOffsets() {
  const vw = worldViewport.clientWidth;
  const vh = worldViewport.clientHeight;
  const s  = state.scale;

  /* maxOffX: dragged fully RIGHT → left edge of world (x=0) reaches viewport center */
  const maxOffX = vw / 2;
  /* minOffX: dragged fully LEFT → right edge of world reaches viewport center */
  const minOffX = vw / 2 - totalWorldW * s;

  state.offsetX = clamp(state.offsetX, Math.min(minOffX, maxOffX), Math.max(minOffX, maxOffX));

  /* Same for rows */
  const maxOffY = vh / 2;
  const minOffY = vh / 2 - totalWorldH * s;

  state.offsetY = clamp(state.offsetY, Math.min(minOffY, maxOffY), Math.max(minOffY, maxOffY));
}

/* ---- Open insight (smooth zoom-reveal) ---- */
function openInsight(insightId) {
  if (state.isDetailActive) { return; }

  let foundSlug = null;
  let foundInsight = null;
  for (const [slug, ind] of Object.entries(INDUSTRIES)) {
    const ins = ind.insights.find(i => i.id === insightId);
    if (ins) { foundSlug = slug; foundInsight = ins; break; }
  }
  if (!foundInsight) { return; }

  state.openInsightId = insightId;
  state.openInsightZoneSlug = foundSlug;
  state.isDetailActive = true;

  state.savedTransform = {
    offsetX: state.offsetX,
    offsetY: state.offsetY,
    scale: state.scale
  };

  const idx = industryKeys.indexOf(foundSlug);
  const { x, y } = zoneGridPos(idx);
  const vw = worldViewport.clientWidth;
  const vh = worldViewport.clientHeight;

  const scaleX = vw / ZONE_W;
  const scaleY = vh / ZONE_H;
  const targetScale = Math.max(scaleX, scaleY);

  const zoneCenterX = x + ZONE_W / 2;
  const zoneCenterY = y + ZONE_H / 2;

  const offX = vw / 2 - zoneCenterX * targetScale;
  const offY = vh / 2 - zoneCenterY * targetScale;

  document.querySelectorAll('.zone.zone-active').forEach(z => z.classList.remove('zone-active'));

  lerpTo(offX, offY, targetScale, ANIM_DURATION, () => {
    const zone = document.getElementById(`zone-${foundSlug}`);
    if (zone) { zone.classList.add('detail-active'); }
    showFixedDetail(foundInsight, INDUSTRIES[foundSlug]);
    backButton.classList.add('visible');
    worldViewport.style.cursor = 'default';
  });

  updateBreadcrumb(foundSlug, insightId);
}

/* ---- Zoom back out ---- */
function zoomBackOut() {
  if (!state.isDetailActive && !state.isZoneExpanded) { return; }

  /* If detail overlay is showing, hide it */
  if (state.isDetailActive) {
    hideFixedDetail();
    if (state.openInsightZoneSlug) {
      const zone = document.getElementById(`zone-${state.openInsightZoneSlug}`);
      if (zone) { zone.classList.remove('detail-active'); }
    }
  }

  backButton.classList.remove('visible');

  /* Remove expanded-state classes */
  worldCanvas.classList.remove('zone-expanded');
  document.querySelectorAll('.zone.zone-expanded-active').forEach(z => {
    z.classList.remove('zone-expanded-active');
  });

  const target = state.savedTransform || computeFitTransform();
  const targetOffX  = target.offsetX !== undefined ? target.offsetX : target.offX;
  const targetOffY  = target.offsetY !== undefined ? target.offsetY : target.offY;
  const targetScale = target.scale;
  state.savedTransform = null;

  lerpTo(targetOffX, targetOffY, targetScale, ANIM_DURATION, () => {
    worldViewport.style.cursor = 'grab';
  });

  worldViewport.style.cursor = 'grab';

  state.isDetailActive = false;
  state.isZoneExpanded = false;
  state.openInsightId = null;

  if (state.activeZoneSlug) {
    updateBreadcrumb(state.activeZoneSlug, null);
  } else {
    updateBreadcrumb(null, null);
  }

  state.openInsightZoneSlug = null;
}

/* ---- Minimap ---- */
function buildMinimap() {
  minimap.querySelectorAll('.minimap-zones').forEach(el => el.remove());
  const zonesDiv = document.createElement('div');
  zonesDiv.className = 'minimap-zones';
  /* Position minimap dots in a grid matching the world layout */
  zonesDiv.style.display = 'grid';
  zonesDiv.style.gridTemplateColumns = `repeat(${gridCols}, 1fr)`;
  zonesDiv.style.gridTemplateRows    = `repeat(${gridRows}, 1fr)`;
  industryKeys.forEach(slug => {
    const ind = INDUSTRIES[slug];
    const zDiv = document.createElement('div');
    zDiv.className = 'minimap-zone';
    zDiv.dataset.slug = slug;
    zDiv.style.setProperty('--zone-color', ind.color);
    const dot = document.createElement('div');
    dot.className = 'minimap-zone-dot';
    dot.style.background = ind.color;
    zDiv.appendChild(dot);
    zDiv.addEventListener('click', () => {
      if (state.isDetailActive) { zoomBackOut(); }
      panToZone(slug, true);
    });
    zonesDiv.appendChild(zDiv);
  });
  minimap.insertBefore(zonesDiv, minimapVP);
}

function updateMinimapViewport() {
  const mmW = minimap.clientWidth;
  const mmH = minimap.clientHeight;
  const vw  = worldViewport.clientWidth;
  const vh  = worldViewport.clientHeight;
  const scaledTotalW = totalWorldW * state.scale;
  const scaledTotalH = totalWorldH * state.scale;
  if (scaledTotalW === 0 || scaledTotalH === 0) { return; }
  const mmScaleX = mmW / scaledTotalW;
  const mmScaleY = mmH / scaledTotalH;
  const mmScale  = Math.min(mmScaleX, mmScaleY);
  const vpW = Math.min(mmW, vw * mmScale);
  const vpH = Math.min(mmH, vh * mmScale);
  const vpX = Math.max(0, Math.min(mmW - vpW, -state.offsetX * mmScale));
  const vpY = Math.max(0, Math.min(mmH - vpH, -state.offsetY * mmScale));
  minimapVP.style.width  = `${vpW}px`;
  minimapVP.style.height = `${vpH}px`;
  minimapVP.style.left   = `${vpX}px`;
  minimapVP.style.top    = `${vpY}px`;
}

/* ---- Active pill & zone highlight detection ---- */
function updateActivePill() {
  const vw = worldViewport.clientWidth;
  const vh = worldViewport.clientHeight;
  /* Find the viewport center in world-space coordinates */
  const worldCX = (vw / 2 - state.offsetX) / state.scale;
  const worldCY = (vh / 2 - state.offsetY) / state.scale;

  /* Find the zone whose center is closest to the viewport center */
  let closestIdx = 0;
  let closestDist = Infinity;
  industryKeys.forEach((_, idx) => {
    const { x, y } = zoneGridPos(idx);
    const zoneCX = x + ZONE_W / 2;
    const zoneCY = y + ZONE_H / 2;
    const dist = Math.hypot(worldCX - zoneCX, worldCY - zoneCY);
    if (dist < closestDist) {
      closestDist = dist;
      closestIdx = idx;
    }
  });

  navPills.querySelectorAll('.nav-pill').forEach((pill, i) => {
    pill.classList.toggle('active', i === closestIdx);
  });

  const newSlug = industryKeys[closestIdx];
  if (newSlug !== state.activeZoneSlug) {
    if (state.activeZoneSlug) {
      const oldZone = document.getElementById(`zone-${state.activeZoneSlug}`);
      if (oldZone) { oldZone.classList.remove('zone-active'); }
    }
    if (!state.isDetailActive) {
      const newZone = document.getElementById(`zone-${newSlug}`);
      if (newZone) { newZone.classList.add('zone-active'); }
    }
  } else if (!state.isDetailActive) {
    const curZone = document.getElementById(`zone-${newSlug}`);
    if (curZone && !curZone.classList.contains('zone-active')) {
      curZone.classList.add('zone-active');
    }
  }
  state.activeZoneSlug = newSlug;
}

/* ---- Breadcrumb ---- */
function updateBreadcrumb(slug, insightId) {
  breadcrumb.querySelectorAll('.crumb:not(#crumbWorld), .crumb-sep').forEach(el => el.remove());

  if (slug) {
    const sep1 = document.createElement('span');
    sep1.className = 'crumb-sep';
    sep1.textContent = '\u203A';
    const zoneCrumb = document.createElement('span');
    zoneCrumb.className = 'crumb' + (insightId ? '' : ' active');
    zoneCrumb.textContent = INDUSTRIES[slug].name;
    zoneCrumb.addEventListener('click', () => {
      if (state.isDetailActive) { zoomBackOut(); }
      panToZone(slug, true);
    });
    breadcrumb.appendChild(sep1);
    breadcrumb.appendChild(zoneCrumb);
  }

  if (insightId && slug) {
    const insight = INDUSTRIES[slug].insights.find(ins => ins.id === insightId);
    if (insight) {
      const sep2 = document.createElement('span');
      sep2.className = 'crumb-sep';
      sep2.textContent = '\u203A';
      const insCrumb = document.createElement('span');
      insCrumb.className = 'crumb active';
      insCrumb.textContent = insight.title;
      breadcrumb.appendChild(sep2);
      breadcrumb.appendChild(insCrumb);
    }
  }
}

/* ---- Search ---- */
function buildSearchIndex() {
  const index = [];
  for (const [slug, ind] of Object.entries(INDUSTRIES)) {
    ind.insights.forEach(ins => {
      index.push({ slug, ind, ins });
    });
  }
  return index;
}
const SEARCH_INDEX = buildSearchIndex();

function doSearch(q) {
  q = q.trim().toLowerCase();
  if (!q) { searchResults.classList.remove('visible'); return; }
  const hits = SEARCH_INDEX.filter(({ ins }) => {
    return ins.title.toLowerCase().includes(q)
        || ins.summary.toLowerCase().includes(q)
        || ins.stat.toLowerCase().includes(q)
        || ins.statLabel.toLowerCase().includes(q);
  }).slice(0, 8);

  if (!hits.length) {
    searchResults.innerHTML = '<div class="search-result-item"><span class="sri-title" style="color:var(--text-muted)">No results found</span></div>';
  } else {
    searchResults.innerHTML = hits.map(({ slug, ind, ins }) => `
      <div class="search-result-item" role="option" data-insight-id="${ins.id}" data-slug="${slug}" style="--item-color:${ind.color}">
        <div class="sri-industry">${ind.name}</div>
        <div class="sri-title">${ins.title}</div>
        <div class="sri-stat">${ins.stat} \u2014 ${ins.statLabel}</div>
      </div>`).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const id   = item.dataset.insightId;
        const sSlug = item.dataset.slug;
        if (state.isDetailActive) { zoomBackOut(); }
        panToZone(sSlug, true);
        setTimeout(() => openInsight(id), ANIM_DURATION + 100);
        closeSearch();
      });
    });
  }
  searchResults.classList.add('visible');
}

function closeSearch() {
  searchWrapper.classList.remove('open');
  searchResults.classList.remove('visible');
  searchInput.value = '';
}

/* ---- Pointer events (drag) ---- */
function onPointerDown(e) {
  if (state.isDetailActive || state.isZoneExpanded) { return; }
  if (e.target.closest('.hotspot, .nav-pill, .nav-brand, .search-wrapper, .zoom-controls, .minimap, .breadcrumb, .back-button, .detail-fixed')) { return; }
  if (e.touches) { return; }
  state.isDragging   = true;
  state.wasDragged   = false;
  state.dragStartX   = e.clientX;
  state.dragStartY   = e.clientY;
  state.dragStartOffsetX = state.offsetX;
  state.dragStartOffsetY = state.offsetY;
  worldViewport.classList.add('grabbing');
  e.preventDefault();
}

function onPointerMove(e) {
  if (!state.isDragging) { return; }
  const dx = e.clientX - state.dragStartX;
  const dy = e.clientY - state.dragStartY;
  /* Mark as a real drag once we exceed the threshold */
  if (!state.wasDragged && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
    state.wasDragged = true;
  }
  state.offsetX = state.dragStartOffsetX + dx;
  state.offsetY = state.dragStartOffsetY + dy;
  clampOffsets();
  scheduleTransform();
}

function onPointerUp() {
  if (!state.isDragging) { return; }
  state.isDragging = false;
  worldViewport.classList.remove('grabbing');
  clampOffsets();
  scheduleTransform();
}

/* ---- Wheel / trackpad handling ---- */
let _trackpadPanTime = 0;
const TRACKPAD_PAN_COOLDOWN = 200;

function onWheel(e) {
  if (state.isDetailActive || state.isZoneExpanded) { return; }
  e.preventDefault();

  const absDX = Math.abs(e.deltaX);
  const absDY = Math.abs(e.deltaY);
  const now   = performance.now();

  const isPixelMode = (e.deltaMode === 0);
  const isNewTrackpadPan = isPixelMode && absDX > 2;
  const isInPanCooldown = (now - _trackpadPanTime) < TRACKPAD_PAN_COOLDOWN;

  if (isNewTrackpadPan || (isInPanCooldown && isPixelMode)) {
    _trackpadPanTime = now;
    state.offsetX -= e.deltaX;
    state.offsetY -= e.deltaY;
    clampOffsets();
    scheduleTransform();
  } else if (isPixelMode && absDY < 4) {
    return;
  } else {
    const rect = worldViewport.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    zoomAroundPoint(state.scale * (1 + delta), cx, cy);
  }
}

/* ---- Touch-to-click suppression ---- */
/* When we handle a touch interaction ourselves, suppress the browser's
   synthesized click event that follows touchend. */
let _suppressNextClick = false;
function suppressClick() {
  _suppressNextClick = true;
  setTimeout(() => { _suppressNextClick = false; }, 400);
}

/* ---- Touch events ---- */
function getTouchMidpoint(touches) {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2
  };
}
function getTouchDist(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

function onTouchStart(e) {
  if (state.isDetailActive || state.isZoneExpanded) { return; }
  /* Only skip for UI chrome — NOT for hotspots or zones (those should be draggable) */
  if (e.target.closest('.nav-pill, .nav-brand, .zoom-controls, .minimap, .back-button, .search-wrapper, .detail-fixed, .zone-expand-btn')) { return; }
  if (e.touches.length === 1) {
    state.touchState = {
      mode: 'pan',
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      lastX: e.touches[0].clientX,
      lastY: e.touches[0].clientY,
      wasDragged: false
    };
  } else if (e.touches.length === 2) {
    const mid  = getTouchMidpoint(e.touches);
    const dist = getTouchDist(e.touches);
    state.touchState = {
      mode: 'pinch',
      lastDist: dist,
      lastMidX: mid.x,
      lastMidY: mid.y,
      wasDragged: true  /* pinch always counts as a drag */
    };
    e.preventDefault();
  }
}

function onTouchMove(e) {
  if (!state.touchState) { return; }
  if (state.touchState.mode === 'pan' && e.touches.length === 1) {
    const curX = e.touches[0].clientX;
    const curY = e.touches[0].clientY;
    const dx = curX - state.touchState.lastX;
    const dy = curY - state.touchState.lastY;
    /* Check if we've exceeded the drag threshold */
    if (!state.touchState.wasDragged) {
      const totalDX = curX - state.touchState.startX;
      const totalDY = curY - state.touchState.startY;
      if (Math.hypot(totalDX, totalDY) > DRAG_THRESHOLD) {
        state.touchState.wasDragged = true;
      } else {
        return;  /* don't move canvas until threshold exceeded */
      }
    }
    state.offsetX += dx;
    state.offsetY += dy;
    state.touchState.lastX = curX;
    state.touchState.lastY = curY;
    clampOffsets();
    scheduleTransform();
    e.preventDefault();
  } else if (state.touchState.mode === 'pinch' && e.touches.length === 2) {
    const newMid   = getTouchMidpoint(e.touches);
    const newDist  = getTouchDist(e.touches);
    const rect     = worldViewport.getBoundingClientRect();
    /* Pan by midpoint movement */
    const panDX = newMid.x - state.touchState.lastMidX;
    const panDY = newMid.y - state.touchState.lastMidY;
    state.offsetX += panDX;
    state.offsetY += panDY;
    /* Zoom around current midpoint */
    const cx = newMid.x - rect.left;
    const cy = newMid.y - rect.top;
    const scaleRatio = newDist / state.touchState.lastDist;
    const newScale   = clamp(state.scale * scaleRatio, ZOOM_MIN, ZOOM_MAX);
    const factor     = newScale / state.scale;
    state.offsetX = cx - (cx - state.offsetX) * factor;
    state.offsetY = cy - (cy - state.offsetY) * factor;
    state.scale   = newScale;
    /* Update last values for next frame */
    state.touchState.lastDist = newDist;
    state.touchState.lastMidX = newMid.x;
    state.touchState.lastMidY = newMid.y;
    clampOffsets();
    scheduleTransform();
    e.preventDefault();
  }
}

function onTouchEnd(e) {
  if (!state.touchState) { return; }
  /* If going from 2 fingers to 1, re-initialize as a pan */
  if (e.touches.length === 1 && state.touchState.mode === 'pinch') {
    state.touchState = {
      mode: 'pan',
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      lastX: e.touches[0].clientX,
      lastY: e.touches[0].clientY,
      wasDragged: true  /* came from pinch, suppress tap */
    };
    return;
  }
  /* If it was a tap (not a drag), fire the tap target */
  if (!state.touchState.wasDragged && e.changedTouches.length > 0) {
    const touch = e.changedTouches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    if (el) {
      const hotspot = el.closest('.hotspot');
      const zone = el.closest('.zone');
      if (hotspot) {
        const insightId = hotspot.dataset.insightId;
        if (insightId) { openInsight(insightId); }
      } else if (zone && !el.closest('.zone-expand-btn')) {
        const slug = zone.dataset.slug;
        if (slug) { panToZone(slug, true); }
      }
    }
  }
  suppressClick();
  state.touchState = null;
}

/* ---- Keyboard ---- */
function onKeyDown(e) {
  if (e.target.tagName === 'INPUT') { return; }
  if (e.key === 'Escape') {
    if (state.isDetailActive || state.isZoneExpanded) {
      zoomBackOut();
    }
    closeSearch();
    return;
  }
  if (state.isDetailActive || state.isZoneExpanded) { return; }
  switch (e.key) {
    case 'ArrowLeft':  state.offsetX += PAN_KEY_STEP; clampOffsets(); scheduleTransform(); break;
    case 'ArrowRight': state.offsetX -= PAN_KEY_STEP; clampOffsets(); scheduleTransform(); break;
    case 'ArrowUp':    state.offsetY += PAN_KEY_STEP; clampOffsets(); scheduleTransform(); break;
    case 'ArrowDown':  state.offsetY -= PAN_KEY_STEP; clampOffsets(); scheduleTransform(); break;
    case '+': case '=': {
      const halfW = worldViewport.clientWidth / 2;
      const halfH = worldViewport.clientHeight / 2;
      zoomAroundPoint(state.scale * (1 + ZOOM_STEP), halfW, halfH);
      break;
    }
    case '-': {
      const halfW2 = worldViewport.clientWidth / 2;
      const halfH2 = worldViewport.clientHeight / 2;
      zoomAroundPoint(state.scale * (1 - ZOOM_STEP), halfW2, halfH2);
      break;
    }
    default: break;
  }
}

/* ---- Zoom buttons ---- */
function onZoomIn() {
  const halfW = worldViewport.clientWidth / 2;
  const halfH = worldViewport.clientHeight / 2;
  zoomAroundPoint(state.scale * (1 + ZOOM_STEP), halfW, halfH);
}
function onZoomOut() {
  const halfW = worldViewport.clientWidth / 2;
  const halfH = worldViewport.clientHeight / 2;
  zoomAroundPoint(state.scale * (1 - ZOOM_STEP), halfW, halfH);
}

/* ---- Utility ---- */
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

/* ---- Onboarding ---- */
let _onboardedThisSession = false;

function initOnboarding() {
  if (_onboardedThisSession) {
    onboarding.classList.add('hidden');
    return;
  }
  /* Adapt text for touch devices */
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    const p = onboarding.querySelector('p');
    if (p) { p.textContent = 'Pinch to zoom \u00B7 Drag to pan \u00B7 Tap zones to explore'; }
  }
  onboarding.classList.remove('hidden');
  onboardingBtn.addEventListener('click', () => {
    onboarding.classList.add('hidden');
    _onboardedThisSession = true;
  });
  onboarding.addEventListener('click', (e) => {
    if (e.target === onboarding) {
      onboarding.classList.add('hidden');
      _onboardedThisSession = true;
    }
  });
}

/* ---- Wire up all events ---- */
function wireEvents() {
  worldViewport.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  worldViewport.addEventListener('wheel', onWheel, { passive: false });

  worldViewport.addEventListener('touchstart', onTouchStart, { passive: false });
  worldViewport.addEventListener('touchmove',  onTouchMove,  { passive: false });
  worldViewport.addEventListener('touchend',   onTouchEnd);

  window.addEventListener('keydown', onKeyDown);

  zoomIn.addEventListener('click',  onZoomIn);
  zoomOut.addEventListener('click', onZoomOut);
  zoomReset.addEventListener('click', () => {
    if (state.isDetailActive) { zoomBackOut(); }
    fitWorld(true);
  });

  backButton.addEventListener('click', zoomBackOut);

  navBrand.addEventListener('click', () => {
    if (state.isDetailActive) { zoomBackOut(); }
    fitWorld(true);
  });

  crumbWorld.addEventListener('click', () => {
    if (state.isDetailActive) { zoomBackOut(); }
    fitWorld(true);
  });

  searchToggle.addEventListener('click', () => {
    const isOpen = searchWrapper.classList.toggle('open');
    if (isOpen) {
      requestAnimationFrame(() => searchInput.focus());
    } else {
      closeSearch();
    }
  });
  searchInput.addEventListener('input', () => doSearch(searchInput.value));
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeSearch(); }
  });
  document.addEventListener('click', (e) => {
    if (!searchWrapper.contains(e.target)) {
      searchResults.classList.remove('visible');
    }
  });

  /* Zone click-to-navigate — suppressed if the user was dragging or touch-tapping */
  worldCanvas.addEventListener('click', (e) => {
    if (_suppressNextClick) { return; }
    if (state.isDetailActive) { return; }
    if (state.wasDragged) { return; }
    const zone = e.target.closest('.zone');
    if (!zone) { return; }
    if (e.target.closest('.hotspot')) { return; }
    const slug = zone.dataset.slug;
    if (slug) {
      panToZone(slug, true);
    }
  });

  window.addEventListener('resize', () => {
    if (state.isDetailActive) { return; }
    const gridChanged = recalcGrid();
    if (gridChanged) {
      repositionZones();
      buildMinimap();
    }
    fitWorld(false);
  });
}

/* ---- Init ---- */
function init() {
  buildWorld();
  buildNavPills();
  buildMinimap();
  wireEvents();
  initOnboarding();
  fitWorld(false);
}

document.addEventListener('DOMContentLoaded', init);
