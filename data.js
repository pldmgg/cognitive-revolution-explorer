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
