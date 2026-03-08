/* data.js — All content from both blog posts as structured JSON */
const INDUSTRIES = {
  'software-dev': {
    name: 'Software Development',
    subtitle: 'Ground Zero of the Revolution',
    color: '#3B82F6',
    tagline: 'The sector where AI\'s impact is most measurable and immediate.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 14 8 24 16 34"/><polyline points="32 14 40 24 32 34"/><line x1="26" y1="10" x2="22" y2="38"/></svg>`,
    headlineStat: { value: '97%', label: 'Adoption Rate' },
    insights: [
      {
        id: 'sd-adoption',
        title: 'Near-Universal Adoption',
        stat: '97%',
        statLabel: 'of organizations using AI in dev workflows',
        summary: 'AI coding tools have achieved near-total penetration. Only 3.1% of organizations remain disengaged.',
        details: `<ul>
          <li><strong>97% adoption:</strong> 76.6% of organizations actively use AI in development workflows, another 20.4% are evaluating — only 3.1% remain disengaged (Futurum Research, 2026 Survey)</li>
          <li><strong>92% daily usage:</strong> 92% of US developers use AI coding tools daily; 82% globally on a weekly basis (Hashnode, Feb 2026)</li>
          <li><strong>46% of new code is AI-generated</strong> according to GitHub; among Y Combinator's Winter 2025 cohort, 21% of startups have codebases that are 91%+ AI-generated (Hashnode)</li>
          <li>Google reports <strong>25% of its code</strong> is already AI-assisted (Hashnode)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'sd-vibe-coding',
        title: '"Vibe Coding" — The New Paradigm',
        stat: '62%',
        statLabel: 'of orgs experimenting with autonomous coding agents',
        summary: 'Intent-driven development: developers describe what they want in natural language, and AI agents build it.',
        details: `<ul>
          <li><strong>Intent-driven development:</strong> developers describe <em>what</em> they want in natural language, and AI agents build it with terminal access, browser control, and deployment capabilities (YouTube)</li>
          <li><strong>62% of organizations</strong> experimenting with autonomous coding agents (YouTube)</li>
          <li><strong>The freelancer superpower:</strong> one person can now build a SaaS product that previously required a team of five (AI Tech Boss)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'sd-tension',
        title: 'The Trust Paradox',
        stat: '33%',
        statLabel: 'developer trust in AI code accuracy (down from 43%)',
        summary: 'Code churn is up 41%, duplication increased 4x, and developer trust is dropping — yet usage keeps climbing.',
        details: `<ul>
          <li>Code churn up <strong>41%</strong>; code duplication increased <strong>4x</strong>; developer trust in AI code accuracy dropped from 43% (2024) to <strong>33%</strong> (2026) — yet usage keeps climbing (Hashnode)</li>
          <li>METR's randomized controlled trial found developers using AI were actually <strong>19% slower</strong> at completing tasks — but still <em>believed</em> they were 20% faster (Hashnode)</li>
          <li>IBM reports <strong>60% reduction</strong> in development time for internal enterprise apps (Hashnode)</li>
          <li>Entry-level developer hiring plummeted <strong>~50%</strong> between 2023 and 2025 (YouTube)</li>
        </ul>`,
        type: 'tension'
      }
    ]
  },

  'publishing': {
    name: 'Publishing',
    subtitle: 'The Content Flood',
    color: '#F59E0B',
    tagline: 'AI has turned book publishing from a craft measured in years to a volume game measured in days.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8c4-2 8-2 12 0v30c-4-2-8-2-12 0V8z"/><path d="M42 8c-4-2-8-2-12 0v30c4-2 8-2 12 0V8z"/><path d="M18 8c4-2 8-2 12 0v30"/></svg>`,
    headlineStat: { value: '1.4M', label: 'Titles/Year on KDP' },
    insights: [
      {
        id: 'pub-volume',
        title: 'The Publishing Volume Explosion',
        stat: '1,095',
        statLabel: 'books/year possible per Amazon account',
        summary: 'Amazon had to cap uploads at 3 books per author per day to curb AI-generated flooding.',
        details: `<ul>
          <li>Amazon's Kindle Direct Publishing processes <strong>~1.4 million self-published titles annually</strong>; Amazon had to cap uploads at 3 books per author <em>per day</em> in September 2024 to curb AI-generated flooding (The New Publishing Standard)</li>
          <li>Even at 3/day, that's <strong>1,095 books per year per account</strong> — a volume physically impossible for a human author (Reddit discussion)</li>
          <li>Draft2Digital reported publishing volumes trending <strong>~50% higher than usual</strong> in 2024 (The New Publishing Standard)</li>
          <li><strong>53% of publishing companies</strong> are using AI, up from 23% in 2022 (Publishers Weekly, via Authors A.I.)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'pub-authors',
        title: 'How Real Authors Use AI',
        stat: '45%',
        statLabel: 'of surveyed authors currently using AI',
        summary: 'Authors are using AI for research, marketing, outlining, and editing — but 74% don\'t disclose it.',
        details: `<ul>
          <li>BookBub's May 2025 survey of 1,200+ authors: <strong>~45% currently using AI</strong> (Authors A.I.)</li>
          <li>Top use cases: research (81%), marketing copy (73%), outlining/plotting (72%), editing (70%) (Authors A.I.)</li>
          <li><strong>74% of authors who use AI don't disclose</strong> that fact to readers (Authors A.I.)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'pub-dark',
        title: 'The Clone Problem',
        stat: '74%',
        statLabel: 'of AI-using authors don\'t disclose AI use',
        summary: 'AI-generated imitations of real authors\' books are flooding Amazon, with clones appearing within days.',
        details: `<ul>
          <li>AI-generated imitations and summaries of real authors' books flooding Amazon — researcher <strong>Melanie Mitchell</strong> found an AI-generated clone of her own book for sale (WIRED)</li>
          <li>AI pioneer <strong>Fei-Fei Li's</strong> memoir spawned over a dozen AI-generated "summaries" on Amazon (WIRED)</li>
          <li>Amazon's "Ask This Book" Kindle feature drew pushback from the <strong>Authors Guild</strong>, who called it an unlicensed AI enhancement that "sets a dangerous precedent" (Writer Beware)</li>
          <li>Local authors in Boston reported copycat AI books appearing on Amazon <strong>within days</strong> of their legitimate publications (Boston 25 News)</li>
        </ul>`,
        type: 'tension'
      }
    ]
  },

  'video': {
    name: 'Video Production',
    subtitle: 'The Democratization of Cinema',
    color: '#EC4899',
    tagline: 'Professional video production is becoming a prompt-and-refine workflow.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="28" height="28" rx="3"/><polygon points="38 18 46 14 46 34 38 30"/><polygon points="17 18 17 30 27 24" fill="currentColor" stroke="none"/></svg>`,
    headlineStat: { value: '1080p', label: '60s Narrative AI Video' },
    insights: [
      {
        id: 'vid-landscape',
        title: 'The AI Video Landscape in 2026',
        stat: '60s',
        statLabel: 'sustained narrative from a single prompt',
        summary: 'Text-to-video tools now produce cinema-quality footage with sustained narrative continuity.',
        details: `<ul>
          <li><strong>Text-to-video:</strong> Sora 2 Pro (OpenAI), Veo 3.1 (Google), Runway Gen-4.5 — each with distinct strengths in cinematic storytelling, photorealism, and commercial-grade aesthetics (IPFoxy, Feb 2026)</li>
          <li><strong>Image-to-video:</strong> Feed a static image into Runway or Pika Labs and animate it with motion, physics, and camera work (YouTube comparison)</li>
          <li>Sora supports up to <strong>1080p, ~60 seconds</strong>, with sustained narrative continuity — it's currently the only model capable of this (IPFoxy)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'vid-editing',
        title: 'AI-Powered Editing Revolution',
        stat: '40%',
        statLabel: 'of video editors expected to use AI tools',
        summary: 'AI tools auto-identify scenes, create rough cuts, add captions, balance audio, and generate highlight reels.',
        details: `<ul>
          <li>AI tools can now <strong>auto-identify key scenes</strong>, create rough cuts, add captions, perform color correction, balance audio, suggest background music, and generate highlight reels (Think Branded Media)</li>
          <li><strong>~40% of video editors</strong> expected to utilize AI-driven tools for tasks like color grading and audio enhancement (Glean)</li>
          <li>Healthcare organizations using AI to rapidly produce <strong>multilingual patient education videos</strong> and training content (Think Branded Media)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'vid-creator',
        title: 'The Creator Economy Impact',
        stat: '1 Creator',
        statLabel: 'can now produce full video content alone',
        summary: 'Faceless YouTube channels and multi-tool AI workflows are transforming content creation.',
        details: `<ul>
          <li>Entire <strong>"faceless YouTube channels"</strong> are being built using AI tools — no camera, no on-screen talent required (Artsyl, Feb 2026)</li>
          <li>Multi-tool AI video workflows now allow a <strong>single creator</strong> to go from concept to finished product using Sora for wide shots, Veo for detail shots, and traditional NLE software for final assembly (YouTube workflow guide)</li>
        </ul>`,
        type: 'impact'
      }
    ]
  },

  'consulting': {
    name: 'Management Consulting',
    subtitle: 'McKinsey\'s 25,000 AI Agents',
    color: '#10B981',
    tagline: 'The quintessential knowledge work industry is being restructured from within.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="28" width="6" height="12"/><rect x="18" y="20" width="6" height="20"/><rect x="28" y="12" width="6" height="28"/><rect x="38" y="6" width="6" height="34"/><polyline points="6 6 18 16 30 10 46 4" stroke-dasharray="3 3"/></svg>`,
    headlineStat: { value: '25K', label: 'AI Agents at McKinsey' },
    insights: [
      {
        id: 'con-mckinsey',
        title: 'McKinsey\'s Digital Workforce',
        stat: '25,000',
        statLabel: 'AI agents operating alongside 35,000 humans',
        summary: 'McKinsey now has one AI agent for almost every human employee, saving 1.5 million hours in 2025.',
        details: `<ul>
          <li>McKinsey CEO <strong>Bob Sternfels</strong> announced in early 2026 that the firm now operates with 35,000 human consultants <em>plus</em> <strong>25,000 AI agents</strong> — with a goal of one AI agent paired with every human employee (YouTube)</li>
          <li><strong>Lilli</strong>, McKinsey's proprietary GenAI platform, is used by 72% of its professionals, generating <strong>500,000+ prompts monthly</strong> and saving ~1.5 million hours of work in 2025 (Whitehat SEO)</li>
          <li><strong>QuantumBlack</strong>, McKinsey's AI arm, has 7,000+ technologists across 50 countries and drives <strong>~40% of the firm's client work</strong> (Business Insider)</li>
          <li>An AI agent called <strong>"Tone of Voice"</strong> now handles the writing-style review that consultants used to do manually (Business Insider)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'con-industry',
        title: 'Industry-Wide AI Arms Race',
        stat: '$91B',
        statLabel: 'projected AI consulting market by 2035',
        summary: 'From BCG\'s Deckster to Deloitte\'s Zora AI, every major firm is building AI agents.',
        details: `<ul>
          <li><strong>BCG</strong> built "Deckster" to reduce time consultants spend polishing PowerPoint slides; 60% of companies using GenAI already have active "Deploy" plays (Business Insider / Articsledge)</li>
          <li><strong>Deloitte</strong> invested billions in AI; launched "Zora AI" — agents trained in specific subjects like finance or marketing, designed to "think like humans"; also launched "Sidekick," their internal ChatGPT alternative (Business Insider)</li>
          <li><strong>KPMG</strong> signed an agreement with Google Cloud for Agentspace licenses for its entire US workforce (Business Insider)</li>
          <li>The global AI consulting market: <strong>$11 billion in 2025</strong>, projected to <strong>$90.99 billion by 2035</strong> (26.2% CAGR) (Articsledge)</li>
          <li><strong>77% of UK consulting firms</strong> have integrated AI into their systems (MCA Member Survey, Jan 2026, via Whitehat SEO)</li>
          <li>~150 former consultants from McKinsey, Bain, and BCG were contracted to <strong>train AI models</strong> to perform entry-level consulting tasks (Bloomberg, via Whitehat SEO)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'con-pyramid',
        title: 'The Pyramid Crumbles',
        stat: '150',
        statLabel: 'ex-consultants hired to train AI replacements',
        summary: 'AI is destroying the traditional consulting pyramid: junior analyst tasks are being automated.',
        details: `<p>AI is destroying the traditional consulting pyramid model: junior analyst tasks are being automated, freeing expensive senior consultants for high-level strategic counsel and stakeholder management (YouTube).</p>
        <p>~150 former consultants from McKinsey, Bain, and BCG were contracted to train AI models to perform entry-level consulting tasks — effectively teaching machines to replace the roles they once held (Bloomberg, via Whitehat SEO).</p>`,
        type: 'tension'
      }
    ]
  },

  'finance': {
    name: 'Financial Services',
    subtitle: 'Wall Street\'s Billion-Dollar AI Bet',
    color: '#6366F1',
    tagline: 'Banks are pouring tens of billions into AI, reshaping everything from junior analyst work to client-facing tools.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="42" x2="42" y2="42"/><polyline points="10 34 10 22 18 22 18 34"/><polyline points="22 34 22 16 30 16 30 34"/><polyline points="34 34 34 10 42 10 42 34"/><polyline points="6 26 16 18 28 22 42 8"/><circle cx="42" cy="8" r="2" fill="currentColor"/></svg>`,
    headlineStat: { value: '$18B', label: 'JPMorgan Tech Budget' },
    insights: [
      {
        id: 'fin-investment',
        title: 'The Investment Scale',
        stat: '$18B',
        statLabel: 'JPMorgan annual technology budget',
        summary: 'The biggest banks are making massive AI bets, with tech budgets in the tens of billions.',
        details: `<ul>
          <li><strong>JPMorgan:</strong> ~$18 billion annual technology budget; CEO Jamie Dimon said AI "may reduce certain job categories or roles," comparing its impact to the printing press and electricity (Business Insider / Fortune)</li>
          <li><strong>Bank of America:</strong> ~$13 billion on tech in 2025, planning 10% more in 2026; virtual assistant <strong>Erica</strong> handled 2 million customer interactions in a single day, answering 700 types of questions (up from 210) (Business Insider)</li>
          <li><strong>Citigroup:</strong> AI tools available to 182,000 employees in 84 countries, 70%+ adoption; GenAI tools saved <strong>100,000 developer hours <em>per week</em></strong> with automated code reviews (Business Insider)</li>
          <li><strong>Goldman Sachs:</strong> Internal memo stated AI will "drive efficiency, slow hiring, and result in a 'limited reduction' of roles" (Business Insider)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'fin-automation',
        title: 'The Automation Risk',
        stat: '54%',
        statLabel: 'of financial jobs at high automation potential',
        summary: 'More than half of financial jobs face high automation potential — the most of any sector.',
        details: `<ul>
          <li>Citigroup research found <strong>54% of financial jobs</strong> "have a high potential for automation" — more than any other sector (Fortune)</li>
          <li>Yet current layoffs are largely attributed to <strong>pandemic-era overhiring</strong> and economic uncertainty, not AI directly (Fortune)</li>
          <li>AI tools performing "hours' worth of junior-level analyst tasks in just seconds" — one tool called <strong>"Socrates"</strong> at an unnamed bank (Fortune)</li>
          <li>Morgan Stanley sees investors beginning to rotate from AI "builders" (infrastructure providers) to AI <strong>"adopters"</strong> (companies using AI to lift productivity and margins) (Morgan Stanley)</li>
        </ul>`,
        type: 'tension'
      }
    ]
  },

  'education': {
    name: 'Education',
    subtitle: 'The Two-Hour School Day',
    color: '#F97316',
    tagline: 'AI is challenging the most fundamental assumption of education: that learning requires six hours of classroom instruction per day.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6 L4 18 L24 30 L44 18 Z"/><path d="M12 24v12c0 0 5 6 12 6s12-6 12-6V24"/><line x1="44" y1="18" x2="44" y2="36"/></svg>`,
    headlineStat: { value: '2hrs', label: 'School Day at Alpha' },
    insights: [
      {
        id: 'edu-alpha',
        title: 'Alpha School\'s Revolutionary Model',
        stat: '2 hrs',
        statLabel: 'to complete all core academics per day',
        summary: 'Students complete a full grade level in 20-30 hours and score in the top 1-2% nationally.',
        details: `<ul>
          <li>Founded in Austin, TX in 2014; now in NYC and expanding to California; tuition up to <strong>$65,000/year</strong> (NY Post, Jan 2026)</li>
          <li>Students complete all core academics (language, math, science, history) in just <strong>2 hours per day</strong> on tablets/laptops, with AI-driven personalized learning paths (NY Post)</li>
          <li>No traditional teachers — human <strong>"guides"</strong> monitor classrooms; no homework (NY Post)</li>
          <li>Students score in the <strong>top 1-2% nationally</strong> on MAP Growth testing, achieving ~2.3x annual growth compared to peers (Alpha School)</li>
          <li>A student completes a full grade level in <strong>~20-30 hours</strong> of focused study — roughly <strong>10x faster</strong> than traditional pacing (Alpha School)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'edu-how',
        title: 'How AI Tutoring Works',
        stat: '10x',
        statLabel: 'faster than traditional pacing',
        summary: 'Based on Bloom\'s 2 Sigma Problem — one-on-one mastery tutoring can raise an average student to 98th percentile.',
        details: `<ul>
          <li>AI algorithm generates personalized question sets; students must achieve <strong>90%+ mastery</strong> before advancing (Alpha School)</li>
          <li>Based on Benjamin Bloom's 1984 <strong>"2 Sigma Problem"</strong> — one-on-one mastery tutoring can raise an average student to 98th-percentile performance; Alpha applies this digitally (Alpha School)</li>
          <li>AI tailors content to make learning engaging — e.g., teaching math through <strong>Taylor Swift album sales</strong> instead of baseball statistics (NY Post)</li>
          <li>Rest of the day spent on "life skill workshops": rock climbing, building IKEA furniture, Rubik's Cubes, entrepreneurship, athletics, public speaking (NY Post)</li>
          <li>Long-term goal: scale the <strong>TimeBack platform</strong> globally via a sub-$1,000 tablet capable of offline AI tutoring (Alpha School)</li>
        </ul>`,
        type: 'impact'
      }
    ]
  },

  'music': {
    name: 'Music',
    subtitle: 'Spotify Every Two Weeks',
    color: '#A855F7',
    tagline: 'AI is generating the equivalent of Spotify\'s entire catalog every two weeks.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="34" r="6"/><circle cx="36" cy="30" r="6"/><line x1="24" y1="34" x2="24" y2="10"/><line x1="42" y1="30" x2="42" y2="6"/><path d="M24 10c6 0 12-2 18-4"/><path d="M24 18c6 0 12-2 18-4"/></svg>`,
    headlineStat: { value: '7M', label: 'Songs/Day on Suno' },
    insights: [
      {
        id: 'mus-suno',
        title: 'Suno\'s Explosive Growth',
        stat: '$300M',
        statLabel: 'annual revenue',
        summary: 'Suno has 100M+ users producing 7 million songs per day, valued at $2.45 billion.',
        details: `<ul>
          <li><strong>2 million+ paying subscribers</strong>, 100 million+ total users, <strong>$300 million in annual revenue</strong> (Forbes, Feb 2026)</li>
          <li>Users produce <strong>~7 million songs per day</strong> — equivalent to Spotify's entire catalog every two weeks (Billboard, via Forbes)</li>
          <li>Raised <strong>$250 million</strong> from Menlo Ventures and NVentures at a <strong>$2.45 billion valuation</strong> (Forbes)</li>
          <li>Producer <strong>Timbaland</strong> partnered with Suno, claiming he "probably made a thousand beats in three months" and calling it a tool presented by God (Forbes)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'mus-impact',
        title: 'AI Personas Charting',
        stat: '20M',
        statLabel: 'Spotify streams for AI-generated act',
        summary: 'AI-generated musical personas are topping Billboard charts and drawing millions of streams.',
        details: `<ul>
          <li>AI-generated personas are charting: <strong>Xania Monet</strong> (AI persona of songwriter Telisha "Nikki") topped Billboard R&B song sales; <strong>Breaking Rust</strong> (AI-generated country act) charted on Billboard with 20M Spotify streams (Forbes)</li>
          <li>No musical talent, practice, or instrument required — users input descriptive terms and a captivating rhythm emerges (AP News)</li>
        </ul>`,
        type: 'impact'
      },
      {
        id: 'mus-tension',
        title: 'The Copyright Battle',
        stat: 'Lawsuit',
        statLabel: 'Major labels vs. Suno & Udio',
        summary: 'Major record labels are suing AI music platforms, and artist rights organizations are fighting back.',
        details: `<ul>
          <li><strong>Major record labels sued Suno and Udio</strong> for allegedly exploiting recorded works (AP News, Feb 2026)</li>
          <li><strong>"Say No to Suno"</strong> campaign launched by artist rights organizations (Forbes)</li>
        </ul>`,
        type: 'tension'
      }
    ]
  },

  'healthcare': {
    name: 'Healthcare',
    subtitle: 'From Administrative Burden to Clinical Intelligence',
    color: '#14B8A6',
    tagline: 'AI is reclaiming thousands of nursing hours and transforming care delivery.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8v32"/><path d="M8 24h32"/><rect x="14" y="14" width="20" height="20" rx="4"/></svg>`,
    headlineStat: { value: '80%+', label: 'Health Systems Prioritizing Agentic AI' },
    insights: [
      {
        id: 'hc-agentic',
        title: 'Agentic AI in Healthcare',
        stat: '80%+',
        statLabel: 'of health systems prioritizing agentic AI',
        summary: 'Health systems are deploying AI agents for virtual nursing, care management, and revenue cycle operations.',
        details: `<ul>
          <li><strong>80%+ of health systems</strong> prioritizing agentic AI for clinical operations, care delivery, and revenue cycle management (Deloitte Insights, Feb 2026)</li>
          <li><strong>Sentara Health</strong> deployed agentic AI for virtual nursing — ambient documentation, remote consultation, care management — reclaiming <strong>thousands of nursing hours</strong> within months (Deloitte Insights)</li>
          <li><strong>Mayo Clinic</strong> deploying AI agents for eligibility verification, prior authorization, claims processing, and prescription support (Deloitte Insights)</li>
          <li>AI transforming clinical documentation from static, retrospective records to <strong>dynamic, proactive, predictive tools</strong> (Deloitte Insights)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'hc-concern',
        title: 'The Insurance AI Concern',
        stat: 'Alert',
        statLabel: 'U.S. Senate Subcommittee report',
        summary: 'Concerns about commercial insurers using AI to target financial gain over medical necessity.',
        details: `<p>Concern: Commercial insurers using AI to determine claims and prior authorizations, potentially targeting <strong>financial gain over medical necessity</strong> (U.S. Senate Subcommittee report, via AHA).</p>
        <p>This raises serious questions about algorithmic accountability in healthcare, where AI decisions directly impact patient outcomes and access to care.</p>`,
        type: 'tension'
      }
    ]
  },

  'legal': {
    name: 'Legal',
    subtitle: 'From Billable Hours to AI-Augmented Judgment',
    color: '#64748B',
    tagline: 'The differentiator for legal leaders is now human judgment, strategic partnership, and business insight.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="24" y1="6" x2="24" y2="22"/><line x1="12" y1="14" x2="36" y2="14"/><path d="M12 14l-4 12h8z"/><path d="M36 14l-4 12h8z"/><line x1="24" y1="22" x2="24" y2="38"/><line x1="14" y1="38" x2="34" y2="38"/><line x1="10" y1="42" x2="38" y2="42"/></svg>`,
    headlineStat: { value: 'AI+', label: 'Human Judgment' },
    insights: [
      {
        id: 'leg-shift',
        title: 'The Judgment Premium',
        stat: 'Critical',
        statLabel: 'Human judgment as key differentiator',
        summary: 'AI handles drafting, research, and regulatory recall — the differentiator is now human judgment.',
        details: `<ul>
          <li>As AI increasingly handles drafting, research, and regulatory recall, the true differentiator for legal leaders is <strong>human judgment, strategic partnership, and business insight</strong> (DSG Global, Jan 2026)</li>
          <li>Legal industry grappling with <strong>copyright, IP, and licensing questions</strong> raised by AI tools across all sectors</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'leg-regulation',
        title: 'The Regulatory Frontier',
        stat: 'Active',
        statLabel: 'State legislatures pursuing AI regulation',
        summary: 'State legislatures are actively pursuing AI regulation, with Colorado proposing stringent disclosure requirements.',
        details: `<ul>
          <li>State legislatures actively pursuing AI regulation in healthcare, with <strong>Colorado proposing some of the most stringent AI disclosure requirements</strong> (Healthcare Law Insights)</li>
          <li>The legal industry is at the intersection of every AI disruption — from music copyright to healthcare claims to publishing clones, <strong>every sector's AI tensions become legal questions</strong></li>
        </ul>`,
        type: 'tension'
      }
    ]
  },

  'it-services': {
    name: 'IT Services / MSP',
    subtitle: 'The Digital General Contractor',
    color: '#06B6D4',
    tagline: 'AI transformed one skilled operator from a specialist into a general contractor with every license.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="6" width="16" height="12" rx="2"/><rect x="16" y="30" width="16" height="12" rx="2"/><rect x="4" y="18" width="12" height="12" rx="2"/><rect x="32" y="18" width="12" height="12" rx="2"/><line x1="24" y1="18" x2="24" y2="30"/><line x1="16" y1="24" x2="10" y2="24"/><line x1="38" y1="24" x2="32" y2="24"/><line x1="10" y1="18" x2="20" y2="12"/><line x1="38" y1="18" x2="28" y2="12"/></svg>`,
    headlineStat: { value: 'GC', label: 'General Contractor Model' },
    isDepthPost: true,
    insights: [
      {
        id: 'it-old-model',
        title: 'The Old Model: Six Vendors, One Problem',
        stat: '6',
        statLabel: 'separate vendors needed for IT',
        summary: 'Traditional IT required hiring an MSP, web developer, software developer, marketing agency, security consultant, and cloud consultant.',
        details: `<p>In construction, no one does everything. You have the General Contractor, the electrician, the plumber, the HVAC tech, the framer, the finish crew. Each one is skilled. Each one is necessary. Each one is separate.</p>
        <p><strong>Coordination costs money. Changes cost time. Miscommunication costs even more.</strong></p>
        <p>That's exactly how traditional IT worked. If a business needed help, they'd hire:</p>
        <ul>
          <li>An <strong>MSP</strong> for support</li>
          <li>A <strong>web developer</strong> for a website</li>
          <li>A <strong>software developer</strong> for custom tools</li>
          <li>A <strong>marketing agency</strong> for integrations</li>
          <li>A <strong>security consultant</strong> for compliance</li>
          <li>A <strong>cloud consultant</strong> for migrations</li>
        </ul>
        <p><strong>Six vendors. One problem.</strong></p>`,
        type: 'trend'
      },
      {
        id: 'it-new-model',
        title: 'The New Reality: One GC With Every License',
        stat: '1',
        statLabel: 'skilled operator with access to every trade',
        summary: 'AI gave one skilled operator access to every trade and incredibly cheap labor.',
        details: `<p>Now imagine this: You meet a General Contractor who:</p>
        <ul>
          <li>Is also a licensed electrician</li>
          <li>Is also a licensed plumber</li>
          <li>Is also a structural engineer</li>
          <li>Is also a finish carpenter</li>
          <li>Can draft plans instantly</li>
          <li>Can simulate structural issues before building</li>
          <li>Can scale labor power overnight</li>
        </ul>
        <p><strong>That's what AI has done to technical work.</strong></p>
        <p>It didn't eliminate the different aspects of the tech trade. It gave one skilled operator access to every trade and INCREDIBLY cheap labor.</p>`,
        type: 'trend'
      },
      {
        id: 'it-capabilities',
        title: 'What One AI-Enabled MSP Can Do',
        stat: 'All',
        statLabel: 'of these capabilities in one operator',
        summary: 'Build custom apps, integrate systems, create portals, automate workflows, develop SaaS, handle security, and migrate infrastructure.',
        details: `<p>Before AI, doing any of the following would have needed multiple specialists and a lot of time:</p>
        <ul>
          <li>Build a custom internal job-tracking app</li>
          <li>Integrate QuickBooks with a field dispatch system</li>
          <li>Create a client portal</li>
          <li>Automate intake forms and estimates</li>
          <li>Build a custom dashboard</li>
          <li>Develop a small SaaS product</li>
          <li>Handle cybersecurity hardening</li>
          <li>Migrate infrastructure to the cloud</li>
        </ul>
        <p>Now? <strong>I can architect, design, build, test, and deploy most of it directly</strong> — because AI dramatically lowers the labor barrier for software creation, automation, integration, and documentation.</p>
        <p><strong>That's the paradigm shift.</strong></p>`,
        type: 'impact'
      },
      {
        id: 'it-role-change',
        title: 'The Role Has Changed',
        stat: 'New',
        statLabel: 'category of IT provider',
        summary: 'From "We fix computers" to "We build, automate, integrate, secure, and scale your entire digital operation."',
        details: `<p>The old MSP was:</p>
        <blockquote>"We fix computers and manage your network."</blockquote>
        <p>The new AI-enabled MSP is:</p>
        <blockquote>"We build, automate, integrate, secure, and scale your entire digital operation."</blockquote>
        <p>That's a different category. I'm not just maintaining infrastructure anymore. <strong>I'm building digital systems.</strong> Just like a GC doesn't just manage a site — they orchestrate the entire build.</p>`,
        type: 'impact'
      },
      {
        id: 'it-dgc',
        title: 'The Digital General Contractor',
        stat: 'DGC',
        statLabel: 'The emerging role',
        summary: 'Not "the computer guy" but the Digital General Contractor — with instant blueprints, unlimited apprentices, and rapid iteration.',
        details: `<p>That's the role I see emerging. Not:</p>
        <p><em>"The computer guy."</em></p>
        <p>But:</p>
        <p><strong>The Digital General Contractor.</strong></p>
        <p>With:</p>
        <ul>
          <li><strong>Instant blueprints</strong></li>
          <li><strong>Automated drafting</strong></li>
          <li><strong>Unlimited apprentices</strong></li>
          <li><strong>Real-time simulation</strong></li>
          <li><strong>Rapid iteration</strong></li>
        </ul>
        <p>And that's not theory. <strong>It's happening now.</strong></p>
        <p>Because the shift is real. And it's accelerating. And it's a little scary.</p>`,
        type: 'impact'
      }
    ]
  },

  'real-estate': {
    name: 'Real Estate',
    subtitle: 'The $34B Automation Wave',
    color: '#D97706',
    tagline: 'AI is reshaping how properties are valued, screened, managed, and funded — disrupting a $92B labor base.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 42h36"/><path d="M10 42V22l14-12 14 12v20"/><rect x="18" y="30" width="8" height="12"/><rect x="14" y="24" width="6" height="6"/><rect x="28" y="24" width="6" height="6"/></svg>`,
    headlineStat: { value: '$34B', label: 'Efficiency Gains by 2030' },
    insights: [
      {
        id: 're-automation',
        title: 'The $34B Automation Takeover',
        stat: '$34B',
        statLabel: 'projected AI efficiency gains for real estate by 2030',
        summary: 'Morgan Stanley projects $34 billion in efficiency gains as 37% of real estate tasks become automatable — one REIT already cut headcount 15%.',
        details: `<ul>
          <li><strong>$34 billion in efficiency gains</strong> projected by 2030 across 162 REIT and CRE firms with $92B in combined labor costs and 525,000 employees — 37% of tasks now automatable (<a href="https://www.morganstanley.com/insights/articles/ai-in-real-estate-2025" target="_blank">Morgan Stanley</a>)</li>
          <li>A self-storage REIT automated 85% of customer interactions, <strong>reducing on-property labor hours by 30%</strong>; a residential REIT cut full-time employees by 15% since 2021 (<a href="https://www.morganstanley.com/insights/articles/ai-in-real-estate-2025" target="_blank">Morgan Stanley</a>)</li>
          <li>JLL's Hank AI reduced HVAC energy costs <strong>20%+</strong>; one Bay Area office saw 45% HVAC energy reduction and doubled fresh air circulation (<a href="https://www.naiop.org/research-and-publications/magazine/2024/Winter-2024-2025/business-trends/ais-growing-impact-on-commercial-real-estate/" target="_blank">NAIOP</a>)</li>
          <li><strong>84% of commercial building decision-makers</strong> plan to increase AI use, with 92% citing workforce skill shortages as an accelerant (<a href="https://www.publicpower.org/periodical/article/artificial-intelligence-offers-tools-boost-energy-efficiency-reduce-carbon-emissions-buildings" target="_blank">Honeywell/Public Power</a>)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 're-screening',
        title: 'Screening Scores vs. Fair Housing',
        stat: '80%',
        statLabel: 'more likely to deny Black mortgage applicants vs. comparable White applicants',
        summary: 'AI tenant screening replicates and amplifies decades of housing discrimination — triggering landmark lawsuits and federal intervention.',
        details: `<ul>
          <li>Lenders <strong>80% more likely to deny Black applicants</strong>, 70% more for Native Americans, 50% more for Asian/Pacific Islanders, 40% more for Latinos vs. comparable White applicants — tied to algorithmic scoring (<a href="https://www.law.georgetown.edu/poverty-journal/blog/the-discriminatory-impacts-of-ai-powered-tenant-screening-programs/" target="_blank">Georgetown Law</a>)</li>
          <li>SafeRent case: a Black applicant with <strong>16 years of on-time rent</strong> was denied housing by AI scoring — settled for $2.3 million (<a href="https://www.law.georgetown.edu/poverty-journal/blog/the-discriminatory-impacts-of-ai-powered-tenant-screening-programs/" target="_blank">Georgetown Law</a>)</li>
          <li>HUD issued formal <strong>Fair Housing Act guidance on AI</strong> in May 2024, stating housing providers remain legally responsible even when using third-party AI tools (<a href="https://archives.hud.gov/news/2024/pr24-098.html" target="_blank">HUD</a>)</li>
          <li>Georgetown researchers warn AI may be <strong>more biased than humans</strong> because landlords rely on algorithmic scores rather than underlying data (<a href="https://www.law.georgetown.edu/poverty-journal/blog/the-discriminatory-impacts-of-ai-powered-tenant-screening-programs/" target="_blank">Georgetown Law</a>)</li>
        </ul>`,
        type: 'tension'
      },
      {
        id: 're-avm',
        title: 'AVMs Are Replacing Appraisers',
        stat: '$300→$15',
        statLabel: 'cost of property valuation: traditional appraisal vs. AI',
        summary: 'AI valuation models compress a 3–5 day, $300–$500 appraisal into 60 seconds for $5–$15, covering 116 million homes.',
        details: `<ul>
          <li>AI AVMs analyze <strong>300+ data points in real time</strong> at $5–$15 vs. 20–50 data points over 3–5 days at $300–$500 for traditional appraisals (<a href="https://www.growthfactor.ai/blog-posts/ai-property-valuation" target="_blank">GrowthFactor</a>)</li>
          <li>Zillow's Zestimate covers <strong>116 million U.S. homes</strong> with 1.83% median error on-market (7.01% off-market) (<a href="https://www.zillow.com/zestimate/" target="_blank">Zillow</a>)</li>
          <li>Rocket Mortgage's AI processes <strong>1.5 million documents monthly</strong> with 70% auto-identification, saving 5,000+ underwriter hours/month; 73% of AI-adopting lenders cite operational efficiency as primary objective (<a href="https://www.propair.ai/insights/predictive-ai-in-us-mortgage-lending-and-insurance-outperforming-the-competition-2024-2025/" target="_blank">ProPair</a>)</li>
          <li>NYC benchmarking study found Zestimates <strong>overstated values by 16–18%</strong> in heterogeneous neighborhoods — significant blind spots remain (<a href="https://acr-journal.com/article/zestimate-vs-reality-benchmarking-automated-valuations-against-new-york-city-assessments-1510/" target="_blank">ACR Journal</a>)</li>
        </ul>`,
        type: 'impact'
      },
      {
        id: 're-proptech',
        title: "Real Estate Tech's $16.7B AI Gold Rush",
        stat: '$16.7B',
        statLabel: 'global proptech VC invested in 2025 — up 67.9% year-over-year',
        summary: 'Proptech funding surged to $16.7B in 2025. AI-centered firms growing at 42% vs 24% for non-AI. Three new unicorns — all AI-native.',
        details: `<ul>
          <li><strong>$16.7 billion invested globally</strong> in proptech in 2025, a 67.9% YoY increase surpassing pre-pandemic highs; January 2026 alone saw $1.7B (176% increase over Jan 2025) (<a href="https://creti.org/insights/proptech-venture-capital-in-2025-end-of-year-report" target="_blank">CRETI</a>)</li>
          <li>AI-centered proptech companies grew at <strong>42% annually vs. 24% for non-AI</strong>; 71.9% of capital went to just 35 companies in deals over $100M (<a href="https://creti.org/insights/proptech-venture-capital-in-2025-end-of-year-report" target="_blank">CRETI</a>)</li>
          <li>Three new unicorns since July 2025 — all AI-native: <strong>Bedrock Robotics</strong> ($1.75B, autonomous construction), <strong>Basis AI</strong> ($1.15B, agentic real estate accounting) (<a href="https://www.theaiconsultingnetwork.com/blog/proptech-vc-16-billion-ai-funding-cre-investors-2026" target="_blank">AI Consulting Network</a>)</li>
          <li><strong>88% of real estate investors</strong> already piloting AI, pursuing an average of 5 use cases simultaneously (<a href="https://www.jll.com/en-us/insights/ai-for-business-growth-are-real-estate-investors-ready-to-gain-the-competitive-edge" target="_blank">JLL</a>)</li>
        </ul>`,
        type: 'trend'
      }
    ]
  },

  'marketing': {
    name: 'Marketing / Advertising',
    subtitle: 'The 83% Creative Takeover',
    color: '#E11D48',
    tagline: 'AI-generated ad creative has moved from experimental to standard operating procedure — but consumers aren\'t buying the hype.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h8l4-6h12l4 6h8v28H6z"/><circle cx="24" cy="28" r="8"/><circle cx="24" cy="28" r="3"/><circle cx="36" cy="18" r="2" fill="currentColor"/></svg>`,
    headlineStat: { value: '83%', label: 'Ad Execs Using AI Creative' },
    insights: [
      {
        id: 'mkt-creative',
        title: 'The AI Creative Takeover',
        stat: '83%',
        statLabel: 'of ad executives have deployed AI in creative production',
        summary: '83% of ad execs deploy AI in creative production — up from 60% in 2024. Meta\'s Advantage+ delivers $4.52 per $1 spent.',
        details: `<ul>
          <li><strong>83% of ad executives</strong> have deployed AI in creative production, up from 60% one year earlier (<a href="https://www.iab.com/insights/the-ai-gap-widens/" target="_blank">IAB, Jan 2026</a>)</li>
          <li>Meta's AI-powered Advantage+ delivers <strong>$4.52 in revenue for every $1 spent</strong> — 22% higher return than standard manual campaigns (<a href="https://coinis.com/blog/meta-advantage-plus-ai-ads-updates-2025" target="_blank">Coinis/Meta</a>)</li>
          <li>Google's Performance Max drives <strong>18% more conversions at similar CPA</strong> across 1 million+ advertisers globally (<a href="https://www.dataslayer.ai/blog/google-ads-performance-max-complete-guide-2025" target="_blank">Dataslayer</a>)</li>
          <li>Top stated benefit shifted from "creative innovation" (61%) to <strong>"cost efficiency" (64%)</strong> — AI has industrialized creative production (<a href="https://www.iab.com/insights/the-ai-gap-widens/" target="_blank">IAB</a>)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'mkt-trust',
        title: 'AI Ads vs. Consumer Trust',
        stat: '37-pt',
        statLabel: 'gap between exec optimism (82%) and consumer positivity (45%)',
        summary: '82% of ad execs think consumers like AI ads — only 45% actually do. Gen Z backlash is sharpest: 39% feel negative.',
        details: `<ul>
          <li><strong>82% of ad execs</strong> believe consumers feel positive about AI ads — only <strong>45% of consumers</strong> actually do, a 37-point gap that widened from 32 points in one year (<a href="https://www.iab.com/insights/the-ai-gap-widens/" target="_blank">IAB, Jan 2026</a>)</li>
          <li>Gen Z: <strong>39% feel negative</strong> about AI ads (vs. 20% Millennials); 30% call AI-using brands "inauthentic," 26% "disconnected," 24% "unethical" (<a href="https://www.iab.com/insights/the-ai-gap-widens/" target="_blank">IAB</a>)</li>
          <li>Brand partnerships with <strong>AI virtual influencers dropped ~30%</strong> between 2024 and 2025; 96% of brands steering clear cite consumer trust concerns (<a href="https://digiday.com/media/in-graphic-detail-virtual-influencers-click-with-young-audiences-yet-brands-interest-wanes/" target="_blank">Digiday</a>)</li>
          <li>Yet 73% of consumers say knowing an ad was AI-created <strong>either increases or has no impact</strong> on purchase intent — risk is brand perception, not conversion (<a href="https://www.iab.com/insights/the-ai-gap-widens/" target="_blank">IAB</a>)</li>
        </ul>`,
        type: 'tension'
      },
      {
        id: 'mkt-seo',
        title: "SEO's Zero-Click Collapse",
        stat: '-61%',
        statLabel: 'drop in organic CTR on Google AI Overview queries',
        summary: 'Organic click-through rates collapsed 61% on Google AI Overview queries. 60% of all Google searches now end in zero clicks.',
        details: `<ul>
          <li>Organic CTR on queries with AI Overviews <strong>collapsed 61%</strong> (1.76% → 0.61%); paid CTR plummeted 68% (19.7% → 6.34%) — tracking 25.1M impressions across 42 organizations (<a href="https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update" target="_blank">Seer Interactive</a>)</li>
          <li><strong>60% of all Google searches</strong> now end in zero clicks; AI Overviews appear for 13.14% of all queries, up from 6.49% in Jan 2025 (<a href="https://thedigitalbloom.com/learn/2025-organic-traffic-crisis-analysis-report/" target="_blank">Digital Bloom</a>)</li>
          <li>HubSpot reported <strong>70–80% organic traffic declines</strong>; CNN fell 27–38%. McKinsey estimates $750B in consumer revenue will flow through AI search by 2028 (<a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/new-front-door-to-the-internet-winning-in-the-age-of-ai-search" target="_blank">McKinsey</a>)</li>
          <li>AI referral traffic from LLM platforms <strong>surged 527% YoY</strong> in first half of 2025 — 1.13 billion referral visits in June 2025 (<a href="https://www.semrush.com/blog/ai-seo-statistics/" target="_blank">Semrush</a>)</li>
        </ul>`,
        type: 'impact'
      },
      {
        id: 'mkt-agency',
        title: 'Agency Workforce in Freefall',
        stat: '32,000',
        statLabel: 'US agency jobs projected eliminated by 2030',
        summary: 'Forrester projects 32K agency jobs eliminated by 2030. BlueFocus fired its entire human creative team. AI-skilled marketers command 43% salary premium.',
        details: `<ul>
          <li>Forrester projects <strong>32,000 US agency jobs</strong> (7.5% of total workforce) eliminated by automation by 2030 (<a href="https://www.kalungi.com/blog/ais-seismic-impact-on-marketing-careers" target="_blank">Kalungi</a>)</li>
          <li>BlueFocus terminated its <strong>entire human content writing and design workforce</strong> "fully and indefinitely" in April 2024, replacing them with generative AI (<a href="https://tech.co/news/companies-replace-workers-with-ai" target="_blank">Tech.co</a>)</li>
          <li>AI-enabled teams demonstrate <strong>2–3x productivity multipliers</strong>, 22% higher ROI, and 75% faster campaign launches (4–5 days vs. 3–4 weeks) (<a href="https://www.kalungi.com/blog/ais-seismic-impact-on-marketing-careers" target="_blank">Kalungi</a>)</li>
          <li>AI-skilled marketers command a <strong>43% salary premium</strong> over non-AI peers — up from 25% one year prior ($195K vs. ~$177K average) (<a href="https://www.kalungi.com/blog/ais-seismic-impact-on-marketing-careers" target="_blank">Kalungi/PwC</a>)</li>
        </ul>`,
        type: 'impact'
      }
    ]
  },

  'government': {
    name: 'Government / Public Sector',
    subtitle: 'The $4B Fraud Catcher',
    color: '#1D4ED8',
    tagline: 'Governments are simultaneously the biggest AI promoters and the entities most responsible for regulating its risks.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 42h36"/><path d="M8 34h32v8H8z"/><path d="M12 22v12"/><path d="M20 22v12"/><path d="M28 22v12"/><path d="M36 22v12"/><path d="M6 22h36L24 10z"/></svg>`,
    headlineStat: { value: '$4B', label: 'Fraud Caught by Treasury AI' },
    insights: [
      {
        id: 'gov-fraud',
        title: 'AI Catches What Humans Miss',
        stat: '$4B',
        statLabel: 'fraud recovered/prevented by Treasury AI in FY2024',
        summary: 'Treasury\'s ML fraud detection recovered/prevented $4B in FY2024 — a 6x increase from $652M the prior year.',
        details: `<ul>
          <li>Treasury's Office of Payment Integrity prevented and recovered <strong>over $4 billion</strong> in fraudulent/improper payments in FY2024 — up from $652.7M in FY2023, a <strong>6x increase</strong> (<a href="https://home.treasury.gov/news/press-releases/jy2650" target="_blank">U.S. Treasury</a>)</li>
          <li>Breakdown: $2.5B from high-risk transaction prioritization, $1B from ML-powered check fraud recovery, $500M from expanded risk-based screening, $180M from processing efficiencies (<a href="https://www.nextgov.com/artificial-intelligence/2024/10/ai-tools-helped-treasury-recover-billions-fraud-and-improper-payments/400368/" target="_blank">Nextgov/FCW</a>)</li>
          <li>CMS denied <strong>800,000+ fraudulent claims</strong> saving $141M between Jan–Aug 2025 alone (<a href="https://www.carahsoft.com/blog/onspring-the-practical-applications-of-ai-in-government-blog-2025" target="_blank">Carahsoft/CMS</a>)</li>
          <li>BCG finds AI in government case processing can save <strong>up to 35% of budget costs</strong> over 10 years — vs. 10–15% from traditional cost optimization (<a href="https://www.bcg.com/publications/2025/benefits-of-ai-in-government" target="_blank">BCG</a>)</li>
        </ul>`,
        type: 'impact'
      },
      {
        id: 'gov-pentagon',
        title: 'The Pentagon Goes AI-First',
        stat: '$13.4B',
        statLabel: 'Pentagon FY2026 AI & autonomous systems budget',
        summary: 'The Pentagon earmarked $13.4B for AI and autonomous systems — its first-ever standalone budget line — and launched an "AI-first warfighting force" strategy.',
        details: `<ul>
          <li><strong>$13.4 billion</strong> earmarked for AI and autonomous systems in FY2026 — first-ever standalone line item: $9.4B aerial drones, $1.7B maritime, $734M underwater, $210M ground, $1.2B software integration (<a href="https://www.cdomagazine.tech/us-federal-news-bureau/pentagon-seeks-13-4-bn-for-ai-and-autonomy-fy-2026-budget-request" target="_blank">CDO Magazine</a>)</li>
          <li>Seven "Pace-Setting Projects" including <strong>Swarm Forge</strong> (autonomous drone swarms), <strong>Agent Network</strong> (AI battle management), and <strong>GenAI.mil</strong> (frontier AI models for all DoD personnel) (<a href="https://www.war.gov/News/Releases/Release/Article/4376420/war-department-launches-ai-acceleration-strategy-to-secure-american-military-ai/" target="_blank">DoW</a>)</li>
          <li>Defense Innovation Unit budget increased to <strong>$2 billion</strong> (from $1.3B); $500M allocated to new Defense Autonomous Warfare Group (<a href="https://www.defenseone.com/policy/2026/02/pentagons-spending-plan-doubles-down-land-air-sea-robots/411628/" target="_blank">Defense One</a>)</li>
          <li>Anthropic refused Pentagon demand for kinetic autonomous operations — <strong>Trump administration ordered all agencies to cease using Anthropic technology</strong> (<a href="https://www.opb.org/article/2026/02/27/anthropic-refuses-to-bend-to-pentagon-on-ai-safeguards-as-dispute-nears-deadline/" target="_blank">Bloomberg/OPB</a>)</li>
        </ul>`,
        type: 'trend'
      },
      {
        id: 'gov-regulate',
        title: 'Regulate or Accelerate?',
        stat: '1,000+',
        statLabel: 'state AI bills introduced in the U.S. in 2025',
        summary: '1,000+ state AI bills in 2025 while Trump\'s EO sought to preempt them all. Only 1 AI-specific federal statute enacted all year.',
        details: `<ul>
          <li><strong>1,000+ AI-related bills</strong> introduced across U.S. states in 2025; December 2025 EO created a DOJ AI Litigation Task Force to challenge "onerous" state regulations (<a href="https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/" target="_blank">White House</a>)</li>
          <li>Only <strong>1 AI-specific federal statute</strong> enacted in all of 2025 — the narrow TAKE IT DOWN Act targeting nonconsensual intimate images (<a href="https://www.skadden.com/insights/publications/2026/2026-insights/sector-spotlights/dont-believe-the-hype" target="_blank">Skadden</a>)</li>
          <li>EU AI Act penalty regime took force August 2025 — fines up to <strong>€35M or 7% of global turnover</strong> — but 14 of 27 member states hadn't designated compliance authorities (<a href="https://www.dlapiper.com/insights/publications/2025/08/latest-wave-of-obligations-under-the-eu-ai-act-take-effect" target="_blank">DLA Piper</a>)</li>
          <li><strong>$2.2B in unclassified federal AI procurement</strong> in FY2025 — government is simultaneously the largest buyer and the regulator (<a href="https://news.bgov.com/bloomberg-government-news/ai-sales-to-us-agencies-run-on-off-the-shelf-not-custom-deals" target="_blank">Bloomberg Government</a>)</li>
        </ul>`,
        type: 'tension'
      },
      {
        id: 'gov-surveillance',
        title: 'Surveillance State or Safety Tool?',
        stat: '40x',
        statLabel: 'higher facial recognition error rate for darker-skinned women',
        summary: 'Facial recognition error rates 40x higher for darker-skinned women. 8 Americans wrongfully arrested. Milwaukee banned it entirely in 2026.',
        details: `<ul>
          <li>MIT's Gender Shades study: error rates of <strong>0.8% for light-skinned men but 34.7% for darker-skinned women</strong> — a 43-fold disparity; NIST found African American and Asian faces 10–100x more likely to be misidentified (<a href="https://www.joneswalker.com/en/insights/blogs/ai-law-blog/ai-police-surveillance-bias-the-minority-report-impacting-constitutional-right.html" target="_blank">Jones Walker</a>)</li>
          <li>At least <strong>8 Americans wrongfully arrested</strong> based on faulty facial recognition matches; police in some cases treated software suggestions as "100% matches" (<a href="https://www.joneswalker.com/en/insights/blogs/ai-law-blog/ai-police-surveillance-bias-the-minority-report-impacting-constitutional-right.html" target="_blank">Jones Walker</a>)</li>
          <li>Milwaukee PD <strong>banned facial recognition entirely</strong> in February 2026 after revelations it continued using the software without governance or criminal discovery disclosure (<a href="https://www.route-fifty.com/public-safety/2026/02/public-outcry-over-facial-recognition-technology-leads-milwaukee-police-ban-it-now/411282/" target="_blank">Route Fifty</a>)</li>
          <li>China deploys an estimated <strong>600 million surveillance cameras</strong> — roughly 3 per 7 citizens — with AI predicting protests, assessing inmate emotions, and automating censorship (<a href="https://www.cnn.com/2025/12/04/china/china-ai-censorship-surveillance-report-intl-hnk" target="_blank">CNN</a>)</li>
        </ul>`,
        type: 'tension'
      }
    ]
  },

  'labor-market': {
    name: 'Labor Market Impact',
    subtitle: 'Who Wins, Who Loses',
    color: '#EF4444',
    tagline: 'Connecting the threads across all industries.',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="12" r="5"/><circle cx="12" cy="32" r="5"/><circle cx="36" cy="32" r="5"/><path d="M20 16l-5 12"/><path d="M28 16l5 12"/><path d="M17 32h14"/><path d="M24 40v-8" stroke-dasharray="3 3"/></svg>`,
    headlineStat: { value: '-50%', label: 'Entry-Level Dev Hiring' },
    insights: [
      {
        id: 'lm-entry',
        title: 'The Entry-Level Crisis',
        stat: '-1%',
        statLabel: 'employment decline in most AI-exposed sectors',
        summary: 'Employment is declining in the most AI-exposed sectors, disproportionately hitting workers under 25.',
        details: `<ul>
          <li>Dallas Fed: Employment has declined <strong>1%</strong> since late 2022 in the 10% of sectors most exposed to AI; the decline falls disproportionately on <strong>workers under 25</strong> (Dallas Fed)</li>
          <li>Stanford researchers confirm the decline in AI-exposed employment is particularly pronounced for those under 25 — <strong>not from layoffs, but from a low job-finding rate for new graduates</strong> (Dallas Fed)</li>
          <li>Computer systems design and related services sector employment has declined <strong>5%</strong> since ChatGPT's release (Dallas Fed)</li>
        </ul>`,
        type: 'tension'
      },
      {
        id: 'lm-experience',
        title: 'The Experience Premium',
        stat: '81%',
        statLabel: 'productivity gains for senior developers',
        summary: 'Senior developers gain 81% from AI; wages are rising for experienced workers and falling for those without tacit knowledge.',
        details: `<ul>
          <li>Wages are <em>rising</em> in AI-exposed occupations that value <strong>tacit (experiential) knowledge</strong>; wages are <em>declining</em> in AI-exposed occupations with low experience premiums (Dallas Fed)</li>
          <li>Senior developers with 10+ years experience report <strong>81% productivity gains</strong> from AI; junior developers show mixed results because they lack judgment to evaluate AI output (Hashnode)</li>
          <li>The traditional model of career progression — entry-level codifiable tasks → gradual acquisition of tacit knowledge → senior expertise — is being disrupted because <strong>AI is eliminating the bottom rung of the ladder</strong> (Dallas Fed)</li>
        </ul>`,
        type: 'tension'
      },
      {
        id: 'lm-gartner',
        title: 'The Gartner Prediction',
        stat: '40%',
        statLabel: 'non-traditional devs by 2028 (up from 20%)',
        summary: 'Share of dev team members from non-traditional backgrounds predicted to double from 20% to 40% by 2028.',
        details: `<ul>
          <li>Share of development team members from nontraditional software engineering backgrounds predicted to rise from <strong>20% (2025) to 40% by 2028</strong> (Itransition)</li>
          <li>This represents a fundamental shift in who can participate in software creation — "vibe coding" and AI tools are lowering the barrier to entry for people outside traditional CS backgrounds</li>
        </ul>`,
        type: 'impact'
      },
      {
        id: 'lm-cta',
        title: 'Call to Action: Navigating the Revolution',
        stat: '4',
        statLabel: 'audiences who must act now',
        summary: 'Workers, leaders, policymakers, and everyone must respond to this once-in-centuries transformation.',
        details: `<div class="cta-grid">
          <div class="cta-item">
            <h4>For Workers</h4>
            <p>Cultivate tacit knowledge and judgment — the things AI cannot replicate — and learn to use AI as a force multiplier.</p>
          </div>
          <div class="cta-item">
            <h4>For Leaders</h4>
            <p>Invest in AI literacy across the organization while preserving the human expertise pipeline.</p>
          </div>
          <div class="cta-item">
            <h4>For Policymakers</h4>
            <p>Address the entry-level employment crisis before it becomes a generational problem.</p>
          </div>
          <div class="cta-item">
            <h4>For Everyone</h4>
            <p>Understand that we are living through a once-in-centuries transformation — and act accordingly.</p>
          </div>
        </div>`,
        type: 'impact'
      }
    ]
  }
};

const KEY_TAKEAWAYS = [
  {
    number: 1,
    title: 'This Is Not Speculation',
    text: '97% of software organizations, 77% of UK consulting firms, 88% of organizations globally are already using AI in at least one business function.'
  },
  {
    number: 2,
    title: 'The Pattern Is Consistent',
    text: 'AI automates codifiable tasks and augments experienced judgment. The entry-level knowledge worker is the most at risk.'
  },
  {
    number: 3,
    title: 'Volume Is Exploding',
    text: '7 million songs/day on Suno. 1,095 books/year per Amazon account. 46% of new code is AI-generated. McKinsey\'s 25,000 AI agents saved 1.5 million hours.'
  },
  {
    number: 4,
    title: 'Quality Lags Behind Adoption',
    text: 'Developer trust in AI code dropped to 33%. Authors don\'t disclose AI use (74%). AI-generated book clones and music lawsuits proliferate.'
  },
  {
    number: 5,
    title: 'New Roles, Destroyed Old Ones',
    text: 'The revolution creates new roles and destroys old ones — just like the original Industrial Revolution. The question is not whether AI will transform cognitive labor, but how fast societies can adapt.'
  }
];

const META_INTRO = {
  title: 'The Industrial Revolution for Cognitive Labor',
  subtitle: 'The Cognitive Revolution',
  description: 'The Industrial Revolution introduced machines that dramatically increased the amount of physical work humans could do. AI is beginning to play a similar role — but instead of amplifying physical labor, AI amplifies cognitive labor: tasks that involve reading, writing, analyzing information, recognizing patterns, and making decisions.',
  attribution: 'Based on articles by Paul DiMaggio'
};
