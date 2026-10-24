const common = {
  title: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  occupation: {
    founder: 'Founder',
    student: 'Computer Science Student',
    developer: 'Independent Developer',
    assistant: 'Printing & Design Assistant',
  },
  portfolio: {
    scratchDevelopment: 'Development from scratch',
  },
}

const EN = {
  title: common.title,
  month: {
    january: 'january',
    february: 'february',
    march: 'march',
    april: 'april',
    may: 'may',
    june: 'june',
    july: 'july',
    august: 'august',
    september: 'september',
    october: 'october',
    november: 'november',
    december: 'december',
  },
  home: {
    hi: {
      morning: 'Good morning',
      afternoon: 'Good afternoon',
      evening: 'Good evening',
      night: 'Good night',
    },
    iam: "I'm",
    occupation: {
      part1: 'software',
      part2: 'engineer',
      part3: 'founder',
    },
    subtitle: 'Banner',
  },
  about: {
    text: "I'm a <0>software engineer</0> and second-year Computer Science student at the University of Zambia, with {{0}} years of hands-on coding experience. I build <1>projects</1> of different sizes and complexity, bringing <0>{{1}}</0> ideas to life. I founded <0>{{2}}</0>, a venture studio building technology for real-world African infrastructure constraints. More on my <2>journey</2>. Based in Lusaka, Zambia",
    feature: {
      projects: {
        label: '{{0}} projects',
        text: `My portfolio spans student marketplaces, AI-powered agri-logistics, offline-first academic tools and small business sites. You can find all of them in <0>${common.title.portfolio}</0>`,
      },
      position: {
        label: 'Full-stack developer',
        text: `I build projects from scratch: design architecture, write business logic, create interfaces, test and ship. Comfortable moving between frontend, backend and mobile. More in <0>${common.title.skills}</0>`,
      },
      experience: {
        label: '{{0}}+ years of coding',
        text: `Started coding in 2024, right before starting my Computer Science degree. Since then I've gone from teaching myself the basics to founding a venture studio while studying full-time. More in <0>${common.title.experience}</0>`,
      },
      organizing: {
        label: 'Organized and independent',
        text: 'I have built most of my projects independently and like owning the whole process end to end: from the idea and research to design, development, launch and maintenance',
      },
      programming: {
        label: 'Love building',
        text: "Coding is my main focus outside class. I experiment with {{0}}, {{1}} and AI-assisted development tools. I'm especially interested in offline-first architecture, mobile networking (mesh/BLE) and applying AI to real infrastructure problems",
      },
      competitions: {
        label: 'Competition-tested',
        text: 'I have pitched and presented at {{0}} and the {{1}} at LibertyCon Africa, developing Agri-Flow AI and UniFlow from concept through to investor-ready demos. More in <0>Experience</0>',
      },
      growing: {
        label: 'Constantly learning',
        text: 'I keep sharpening the saw by studying new technologies, documentation, courses and papers. Interested in distributed systems, on-device AI and product design. Always looking for tools that help me build faster without cutting corners',
      },
      perfect: {
        label: 'Prone to perfectionism',
        text: 'Quality is my core principle. I care about every detail of a project, but experience and deadlines help me balance speed and results. Value consistency, simplicity and order',
      },
      education: {
        label: 'BSc Computer Science, UNZA',
        text: "I'm currently a second-year Computer Science student at the University of Zambia, balancing coursework in systems, discrete structures, databases and architecture with running Akivara Technologies. More in <0>Experience</0>",
      },
      music: {
        label: 'Curated music taste',
        text: 'Outside of code, I spend a lot of time curating playlists — mostly {{0}} and {{1}}. Building the perfect playlist scratches a similar itch to building the perfect system',
      },
      based: {
        label: 'Zambia-based',
        text: "I'm based in {{0}}, building technology specifically for African infrastructure constraints: intermittent connectivity, basic devices and limited cloud access",
      },
      coffee: {
        label: 'Coffee-fueled',
        text: 'Most long build sessions start with a cup of coffee and end somewhere well past midnight',
      },
    },
    subtitle: 'Avatar and social media',
  },
  skills: {
    text: 'Develop <0>applications</0>, <1>multi-page websites</1>, <2>landing pages</2> and <3>admin panels</3>. Love the <4>{{0}}</4> ecosystem and also build mobile apps with <4>{{1}}</4>. Use <4>{{3}}</4> for {{2}}-friendly, offline-first projects, and reach for <4>{{4}}</4> for scripting and automation. Work with AI agents <4>{{5}}</4> && <4>{{6}}</4> throughout the day',
    feature: {
      interface: {
        label: 'Creating usable and reliable interfaces',
        text: 'I build clear interfaces with well-thought-out business logic. Understand when to use a specific element, component or widget. Handle edge cases and pay attention to accessibility and {{0}}',
      },
      performance: {
        label: 'Writing modern and performant code',
        text: 'I work with {{0}}, {{1}}, {{2}}, {{3}}, {{4}} and other modern technologies. Avoid unnecessary operations and memory leaks. Memoize heavy computations and optimize performance for low-bandwidth conditions',
      },
      architecture: {
        label: 'Designing modular and scalable architecture',
        text: 'I think through architecture for each project. Use a modular approach, custom {{0}} and {{1}} principles. Create a clear code structure with a clean separation of concerns, so it is easy to maintain and extend',
      },
      code: {
        label: 'Writing clean and maintainable code',
        text: 'I write self-documenting code in a declarative style. Use {{0}}, {{1}} and proven style guides. Follow {{2}}, {{3}} and {{4}} principles. Refactor regularly. Readable code matters more than micro-optimizations',
      },
      state: {
        label: 'Managing application state',
        text: 'I separate local, global, server and {{0}} state. Build predictable data flow without duplication. Think through data loading, caching, synchronization and offline sync',
      },
      tools: {
        label: 'Using modern libraries and tools',
        text: 'I keep up with technology updates. Like the {{0}} ecosystem. Add dependencies intentionally, so each one solves a specific problem. Choose frameworks, libraries, utilities and tools based on the project. My <0>core toolkit</0>',
      },
      patterns: {
        label: 'Applying various patterns and techniques',
        text: 'Memoization, lazy loading, optimistic updates, destructuring, decorator, delegation, recursion, module, observer, throttling, debouncing, offline-first sync..',
      },
      server: {
        label: 'Handling server requests',
        text: 'Deduplication, interceptors, caching, prefetching, aborting, retries, authentication, mutations, pagination, progress tracking, offline mode, USSD/SMS fallback, parallel and dependent requests..',
      },
      markup: {
        label: 'Creating semantic, cross-browser and {{0}} markup',
        text: 'I build layouts carefully. Use modern {{0}} features and semantic {{1}} tags. Avoid "div soup". Account for browser and device differences, care about accessibility',
      },
      responsive: {
        label: 'Adapting interfaces for different devices',
        text: 'I use {{0}} approaches. Set up breakpoints and create flexible responsive layouts for different devices and resolutions, including low-end/basic devices common across Zambia',
      },
      animation: {
        label: 'Creating purposeful animations',
        text: 'I create smooth, lightweight animations: transitions, interactive flows and scroll effects, kept subtle so they stay fast on lower-powered devices',
      },
      media: {
        label: 'Working with media and design',
        text: 'I work with raster and vector images, video and documents. Choose suitable file formats and optimize media for low-bandwidth delivery. Prototype layouts and contribute to design. Work in {{0}} and manage assets via {{1}}',
      },
      test: {
        label: 'Testing and optimizing',
        text: 'I write end-to-end tests with {{0}}. Optimize resource loading, {{1}} scores and {{2}} to keep sites usable on slower connections',
      },
      ai: {
        label: 'Using AI tools',
        text: 'I use AI agents for development, mainly {{0}} and {{1}}. Use prompt engineering, validate AI output and integrate {{2}} into my workflow. Also apply AI directly in products, like the agent swarm behind Agri-Flow AI',
      },
      integrations: {
        label: 'Integrating third-party services',
        text: 'I connect backends, media hosting, analytics and external platforms. Have experience integrating {{0}}, {{1}}, {{2}}, {{3}}, {{4}} and {{5}}. Adapt integrations to work within limited connectivity',
      },
      cicd: {
        label: 'Working with infrastructure and {{0}}',
        text: 'I use {{0}}, {{1}}, {{2}}, {{3}} and {{4}} for deployment. Set up build pipelines, automated tests and scripts for stable releases',
      },
      tasks: {
        label: 'Planning and decomposing tasks',
        text: 'I plan the backlog, decompose and estimate tasks. Account for priorities, dependencies, risks and acceptance criteria. Turn ideas into a clear work plan using {{0}} and {{1}}',
      },
      ownership: {
        label: 'Taking responsibility for the result',
        text: "I don't wait for step-by-step instructions. Clarify requirements, notice problems and propose solutions. Own tasks end to end and bring them to a finished result. Care about project quality and consistency",
      },
      mentor: {
        label: 'Sharing knowledge',
        text: 'I share what I learn with classmates and teammates on Akivara Technologies projects, review each other\'s code and give constructive feedback',
      },
      competitions: {
        label: 'Building for competitions',
        text: 'I put together pitch decks, technical briefs, demo scripts and working prototypes for competitions like ZNRAC and the Africa Digi Free Competition',
      },
    },
    subtitle: 'Technologies',
    technologyGroup: {
      logic: 'Logic',
      ai: 'AI',
      markup: 'Markup',
      styles: 'Styles',
      utils: 'Utils',
      deploy: 'Deploy',
      services: 'Services',
      software: 'Software',
    },
  },
  experience: {
    text: `<0>${common.occupation.founder}</0> at <1>{{0}}</1>. Been coding since {{1}}, and building professionally since I started my Computer Science degree at UNZA. I keep learning, competing and shipping — read more about the journey below`,
    projects: 'Projects',
    tools: 'Tools',
    duties: 'Duties',
    achievements: 'Achievements',
    current: 'Current',
    occupation: common.occupation,
    job: {
      duty: {
        logicApps: 'Developing applications business logic',
        logicAppsSites: 'Developing applications and websites business logic',
        structureProjects: 'Creating projects architecture',
        responsive: 'Creating cross-browser and responsive markup',
        rest: 'Working with {{0}}',
        restSocket: 'Working with {{0}} and {{1}}',
        refactor: 'Refactoring and maintaining coursework code',
        scratch: 'Developing projects from scratch',
        support: 'Supporting and maintaining shipped projects',
        tasks: 'Decomposing and evaluating tasks',
        design: 'Designing posters, flyers and quotation/receipt books',
        partIntegration: 'Configuring and integrating third-party services',
        printing: 'Handling customer printing and copying orders',
        typing: 'Typing and formatting documents for customers',
        refill: 'Refilling and maintaining printer toner and ink',
        binding: 'Binding documents and finishing print jobs',
      },
      achievement: {
        resultForeign:
          'Successfully developed several different projects from scratch',
        technologiesBase: 'Pumped {{0}}, {{1}} and {{2}}',
        independent: 'Reached a high level of autonomy and organization',
        work: 'Built strong customer service and time-management habits',
        architecture: 'Designed offline-first architecture for low-connectivity environments',
      },
      feature: {
        busyFull: 'full-time',
        busyPart: 'part-time',
        remote: 'remotely',
        office: 'on-site',
        lusaka: 'Lusaka, Zambia',
      },
    },
    subtitle: 'Journey',
    next: 'Next',
    back: 'Back',
    refresh: 'Reset',
    continue: 'To be continued',
    stepper: {
      step1: 'Completed high school in 2023',
      step2:
        'Worked at <0>{{0}}</0>, an internet cafe/print shop — printing, typing, toner & ink refills, binding, and designing posters, flyers and quotation/receipt books',
      step3:
        'Started teaching myself to code in 2024, while still working, diving into the basics of programming on my own',
      step4: `Enrolled at <0>{{0}}</0> in January 2025 to study for a BSc in Computer Science`,
      step5: `Founded <0>{{0}}</0>, a venture studio focused on building technology for real-world African infrastructure constraints, and shipped my first complete project`,
      step6:
        'Built and pitched <0>{{0}}</0>, an agricultural logistics platform for Zambian smallholder farmers, for the <0>{{1}}</0> competition',
      step7:
        'Developed <0>{{0}}</0>, an offline-first academic platform, and presented both flagship products at the <0>{{1}}</0>',
      step8: `Currently building <0>{{0}}</0>, a Zambian student marketplace, while continuing my studies at <0>{{1}}</0> and growing Akivara Technologies`,
    },
  },
  portfolio: {
    limit:
      "Here are the projects I've worked on that I can showcase publicly {{1}}",
    developed: 'Developed in',
    filter: {
      all: 'All',
      app: 'Application',
      site: 'Website',
      landing: 'Landing page',
      admin: 'Admin panel',
    },
    mobileApp: 'Mobile application',
    feature: {
      wholeDevelopment: `${common.portfolio.scratchDevelopment}, project improvement & support`,
      leadWork: 'Project lead',
      teamWork: 'Development team member',
      soloWork: 'Standalone development',
      responsive: 'Responsive interface',
      design: 'Prototyping & design',
      animations: 'Animations',
      businessLogic: 'Extensive business logic',
      pwa: 'Offline-first / progressive web app',
      firstProject: 'First independent project',
      darkTheme: 'Dark theme',
      fastDevelopment: 'Fast development',
      newArchitecture: 'New architecture experiment',
    },
    project: {
      zedshelf: {
        text: "Zambian student marketplace with a dedicated UNZA classifieds section, real-time messaging and {{0}} pricing — a local eBay/Amazon",
      },
      uniflow: {
        text: 'Offline-first academic management platform built by {{0}}, using local RAG, on-device OCR and a Ghost-Net mesh (Wi-Fi Direct + BLE), with a Scholar Credits marketplace',
      },
      'agri-flow-ai': {
        text: 'Agricultural logistics platform for Zambian smallholder farmers by {{0}}, powered by a three-agent AI swarm with USSD/SMS access via {{1}}',
      },
      schoolcore: {
        text: 'K-12 school administration platform for Zambian schools, built SMS-first and offline-friendly for low-connectivity environments',
      },
      'weather-app': {
        text: 'Modular weather app with a clean front-end architecture and an Express backend proxy to keep API keys off the client',
      },
      'essie-gift': {
        text: 'An animated web gift built as a birthday surprise: an animated heart garden, a typewriter letter, a photo gallery and background music',
      },
      startech: {
        text: 'Landing page and site for {{0}}, a Lusaka-based telecom and Motorola dealer',
      },
      'ig-meme-pipeline': {
        text: 'Automated Instagram content pipeline using {{0}} for scheduling and the Anthropic API for caption generation',
      },
    },
    subtitle: 'Screenshots',
    screenshot: 'Screenshot',
    mobile: 'mobile',
    screen: 'project screen',
  },
  contact: {
    text: {
      part1: 'Do you need my <0>help</0>',
      part2: 'Have a <0>suggestion</0> for me',
      part3: 'Send me a <0>message</0> to <1>{{0}}</1> or use the form',
    },
    marker: 'Based here',
    form: {
      name: 'Name',
      message: 'Message',
      send: 'Send',
    },
    success: {
      thank: 'Message sent. Thank you',
      sent: 'Message sent',
      callback: 'I will get back to you shortly',
      ok: 'Good',
    },
  },
  copyright: {
    crafted: 'Crafted by',
    me: 'me',
    with: 'with',
  },
  other: {
    more: 'Details',
    expand: 'Expand all',
    collapse: 'Collapse all',
    see: 'See it live',
    error: 'Server connection error',
  },
  message: {
    newYear: '<0>Merry Christmas and Happy New Year!</0>',
  },
}

export default EN
