import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nodejs,
    react,
    tailwindcss,
    typescript,
    linkedin,
    car,
    estate,
    pricewise,
    snapgram,
    summiz,
    threads,
    siemens,
    teamcenter,
    plm,
    bmide,
    workflow,
    awc,
    itk,
    deployment,
    c,
    cpp,
    java,
    python,
    sql,
    mariadb,
    redis,
    neo4j,
    influxdb,
    dsa,
    cs
} from "../assets/icons";

// Primary Skills with 3D Pop Icons - Teamcenter & PLM prioritized first, followed by Core CSE & Tech
export const skills = [
    // PLM & Teamcenter Suite (Priority #1)
    { imageUrl: teamcenter, name: "Siemens Teamcenter", type: "PLM & Architecture" },
    { imageUrl: plm, name: "PLM (Product Lifecycle Management)", type: "Engineering & Lifecycle" },
    { imageUrl: bmide, name: "BMIDE Data Modeling", type: "Teamcenter Configuration" },
    { imageUrl: awc, name: "Active Workspace (AWC)", type: "Web PLM Client" },
    { imageUrl: workflow, name: "Workflow Designer & EPM", type: "Process Automation" },
    { imageUrl: itk, name: "ITK & SOA Customization", type: "Server-side Extensibility" },
    { imageUrl: deployment, name: "Deployment Center", type: "Enterprise Deployment" },

    // Programming Languages & Foundations (Priority #2)
    { imageUrl: c, name: "C Language", type: "Programming" },
    { imageUrl: cpp, name: "C++", type: "Programming & ITK" },
    { imageUrl: java, name: "Java", type: "Programming & SOA" },
    { imageUrl: python, name: "Python", type: "Programming & Scripting" },
    { imageUrl: javascript, name: "JavaScript", type: "Web & AWC" },
    { imageUrl: sql, name: "SQL", type: "Relational Database" },

    // Core Computer Science (Priority #3)
    { imageUrl: cs, name: "Core CS (OS, Networks, DBMS)", type: "Core CS" },

    // Web & Database Technologies
    { imageUrl: react, name: "React.js", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: express, name: "Express.js", type: "Backend" },
    { imageUrl: html, name: "HTML5", type: "Frontend" },
    { imageUrl: css, name: "CSS3", type: "Frontend" },
    { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: typescript, name: "TypeScript", type: "Frontend" },

    // Databases & Tools
    { imageUrl: mongodb, name: "MongoDB", type: "Database" },
    { imageUrl: redis, name: "Redis", type: "In-Memory Database" },
    { imageUrl: mariadb, name: "MariaDB", type: "Database" },
    { imageUrl: neo4j, name: "Neo4j", type: "Graph Database" },
    { imageUrl: influxdb, name: "InfluxDB", type: "Time-Series Database" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
];

// Structured Portfolio Skill Layout (As recommended for Teamcenter & PLM Fresher)
export const plmSkillCategories = [
    {
        title: "PLM & Architecture",
        tagline: "Siemens Teamcenter & Product Lifecycle Foundations",
        badge: "Primary Core",
        icon: teamcenter,
        skills: [
            "Siemens Teamcenter",
            "Product Lifecycle Management (PLM)",
            "Teamcenter Architecture",
            "Teamcenter 2-Tier / 4-Tier Architecture",
            "Teamcenter Rich Client (RAC)",
            "Active Workspace (AWC)",
            "Teamcenter Administration",
            "Teamcenter Data Management",
            "Product Structure / BOM Management",
            "EBOM / MBOM Concepts",
            "Revision & Version Management",
            "Item / Item Revision Management",
            "Dataset & Named Reference Management",
            "Document Management",
            "Change Management",
            "Workflow Management",
            "Access Control"
        ]
    },
    {
        title: "Teamcenter Configuration",
        tagline: "BMIDE Data Model, Business Objects & Schema Rules",
        badge: "High Proficiency",
        icon: bmide,
        skills: [
            "BMIDE (Business Modeler Integrated Development Environment)",
            "Data Model Configuration",
            "Business Objects",
            "Persistent Properties",
            "Runtime Properties",
            "Compound Properties",
            "Table Properties",
            "LOVs (List of Values - Standard & Dependent)",
            "Naming Rules",
            "Iman Relations & Specification Relations",
            "Custom Relations",
            "Forms & Datasets Configuration",
            "Item / Item Revision Configuration",
            "Organization Structure",
            "Users, Groups & Roles",
            "Projects & Access Control",
            "Access Manager (Rule Trees & Privileges)",
            "Preferences Management",
            "Volumes Management",
            "Query Builder & Report Builder"
        ]
    },
    {
        title: "Teamcenter Workflow & EPM",
        tagline: "Workflow Designer, Lifecycle Automation & Handler Rules",
        badge: "Applied Project Focus",
        icon: workflow,
        skills: [
            "Teamcenter Workflow Designer",
            "Workflow Templates",
            "EPM Handlers (Action & Rule Handlers)",
            "Workflow Routing & Auto Assignment",
            "Approval Workflows",
            "Review / Approval / Rejection Processes",
            "Task Management",
            "Role-Based Assignment",
            "Workflow Conditions",
            "Workflow Demotion & Demote on Reject",
            "Sub-processes Management",
            "Property Validation",
            "Target Object Validation"
        ]
    },
    {
        title: "Teamcenter Customization",
        tagline: "Server-side ITK, Extensions, DLL & SOA Integration",
        badge: "Developer Level",
        icon: itk,
        skills: [
            "Teamcenter ITK Basics",
            "ITK APIs & Server-side Customization",
            "Method Extensions",
            "Handler Extensions",
            "DLL Development",
            "Custom Methods & Actions",
            "Custom Workflow Handlers",
            "Teamcenter SOA Basics",
            "Customization Deployment",
            "Troubleshooting / RCA (Root Cause Analysis)"
        ]
    },
    {
        title: "Active Workspace (AWC)",
        tagline: "Modern Declarative UI, Architecture & Search",
        badge: "Web PLM",
        icon: awc,
        skills: [
            "Active Workspace (AWC)",
            "AWC Architecture",
            "AWC Configuration",
            "Search Configuration & Indexing",
            "Tiles & Tile Collections",
            "Commands / Actions Configuration",
            "UI Configuration & Declarative Layout",
            "Workspace Configuration",
            "Active Workspace Administration",
            "Server-side AW Customization",
            "Deployment Center Integration",
            "AW Deployment & Troubleshooting"
        ]
    },
    {
        title: "Teamcenter Installation & Deployment",
        tagline: "Deployment Center, Upgrades & Environment Setup",
        badge: "Infrastructure",
        icon: deployment,
        skills: [
            "Teamcenter Installation",
            "Teamcenter Deployment",
            "Deployment Center (DC)",
            "Active Workspace Deployment",
            "Teamcenter Environment Configuration",
            "Server Restart & Deployment Sequences",
            "Configuration Troubleshooting",
            "Basic Installation / Upgrade Concepts",
            "Deployment Troubleshooting & Logs"
        ]
    },
    {
        title: "Programming / Technical Skills",
        tagline: "Programming Languages, Algorithms & Version Control",
        badge: "Engineering Core",
        icon: cpp,
        skills: [
            "C",
            "C++",
            "Java",
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "SQL",
            "Git",
            "GitHub",
            "Basic Data Structures & Algorithms"
        ]
    },
    {
        title: "PLM Core Concepts",
        tagline: "Enterprise Industry Terms & Recruiter Keywords",
        badge: "Industry Standards",
        icon: plm,
        skills: [
            "Product Lifecycle",
            "Product Development Process",
            "Product Data Management",
            "BOM Management",
            "EBOM (Engineering BOM)",
            "MBOM (Manufacturing BOM)",
            "Configuration Management",
            "Change Management",
            "Document Management",
            "Revision Management",
            "Version Management",
            "Workflow Management",
            "Requirements Management",
            "Product Structure",
            "Role-Based Access Control",
            "Engineering Change Process",
            "Release Management"
        ]
    }
];

// EPM Handlers Worked With (Specific hands-on list)
export const epmHandlers = [
    { name: "Create Form", type: "Action Handler", description: "Creates custom form business objects dynamically during workflow transition." },
    { name: "Display Form", type: "Action Handler", description: "Prompts users with required forms for input or verification at review stages." },
    { name: "Hold Form", type: "Action Handler", description: "Retains and locks form states during specific validation checks." },
    { name: "Demote", type: "Action Handler", description: "Transitions target objects to previous workflow stages upon review failure." },
    { name: "Check Object Properties", type: "Rule Handler", description: "Validates mandated attributes and properties prior to stage progression." },
    { name: "Check Condition", type: "Rule Handler", description: "Evaluates conditional branching logic across workflow paths." },
    { name: "Validate Target Objects", type: "Rule Handler", description: "Ensures targets conform to required item types and release statuses." },
    { name: "Check Related Objects", type: "Rule Handler", description: "Verifies dependent BOM items, datasets, and named references." },
    { name: "Create Sub-process", type: "Action Handler", description: "Spawns modular child workflows for asynchronous departmental tasks." },
    { name: "Set Property", type: "Action Handler", description: "Automates attribute population and status stamping on target revisions." },
    { name: "Auto Assign", type: "Action Handler", description: "Assigns review and signoff tasks dynamically based on roles and groups." },
    { name: "Demote on Reject", type: "Action Handler", description: "Enforces strict quality governance by rolling back rejected deliverables." }
];

// Quick Summary Categories (As requested in summary section)
export const summarySkills = [
    {
        category: "PLM",
        items: ["Teamcenter", "PLM", "BMIDE", "RAC", "Active Workspace", "ITK", "SOA", "Workflow", "EPM Handlers", "Access Manager", "Query Builder", "Report Builder"],
        color: "blue"
    },
    {
        category: "Programming",
        items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
        color: "cyan"
    },
    {
        category: "Web Technologies",
        items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "REST APIs"],
        color: "emerald"
    },
    {
        category: "Core CS",
        items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design", "Cloud Computing", "Software Engineering"],
        color: "indigo"
    },
    {
        category: "Databases",
        items: ["SQL", "MongoDB", "NoSQL", "MariaDB", "Redis", "Neo4j", "InfluxDB"],
        color: "amber"
    },
    {
        category: "Tools & Deployment",
        items: ["Git", "GitHub", "Teamcenter Deployment Center", "BMIDE"],
        color: "purple"
    }
];

// Technical Experience (Replacing generic work experience with complete profile breakdown)
export const experiences = [
    {
        title: "PLM & Teamcenter Specialization",
        company_name: "Siemens Teamcenter PLM",
        icon: teamcenter,
        iconBg: "#0284C7",
        date: "Specialization & Hands-on",
        points: [
            "Worked with Siemens Teamcenter and Product Lifecycle Management concepts.",
            "Hands-on exposure to BMIDE configuration, business objects, properties, LOVs, relations, forms, datasets, and naming rules.",
            "Worked with Teamcenter Rich Client (RAC), Active Workspace (AWC), administration, product structure, BOM, revision/version management, and access control.",
            "Designed Teamcenter workflows using workflow templates, role-based routing, approvals, rejection/demotion handling, and EPM handlers.",
            "Gained foundational exposure to Teamcenter ITK, Method Extensions, Handler Extensions, DLL customization, SOA, and deployment concepts."
        ],
    },
    {
        title: "Programming & Development",
        company_name: "Software Engineering & Full-Stack",
        icon: cpp,
        iconBg: "#3B82F6",
        date: "Engineering Foundation",
        points: [
            "Studied and practiced C, C++, Java, Python, JavaScript, HTML, CSS, SQL, and Git/GitHub.",
            "Built a foundation in object-oriented programming, modular programming, exception handling, file handling, and database connectivity.",
            "Familiar with web development concepts including React.js, Node.js, Express.js, REST APIs, MongoDB, and authentication."
        ],
    },
    {
        title: "Data Structures & Algorithms",
        company_name: "Algorithmic Problem Solving",
        icon: dsa,
        iconBg: "#8B5CF6",
        date: "Core Competency",
        points: [
            "Studied fundamental data structures including arrays, strings, linked lists, stacks, queues, trees, graphs, hash tables, and heaps.",
            "Practiced searching, sorting, recursion, traversal, and common algorithmic problem-solving techniques.",
            "Used programming-based problem solving to strengthen logical thinking and coding fundamentals."
        ],
    },
    {
        title: "Core Computer Science",
        company_name: "Computer Science Engineering (CSE)",
        icon: cs,
        iconBg: "#0D9488",
        date: "Academic & Systems Foundation",
        points: [
            "Studied Operating Systems, Computer Networks, DBMS, Object-Oriented Software Engineering, Computer Architecture, System Design, Cloud Computing, and Software Engineering concepts.",
            "Familiar with database concepts including relational databases, SQL, normalization, transactions, indexing, and NoSQL fundamentals.",
            "Studied networking fundamentals including OSI/TCP-IP models, protocols, IP addressing, HTTP/HTTPS, and client-server architecture."
        ],
    },
    {
        title: "PLM Enterprise Implementations",
        company_name: "Flagship Projects",
        icon: plm,
        iconBg: "#00646E",
        date: "Project Execution",
        points: [
            "Honda Hybrid Bike – Teamcenter PLM Workflow & Configuration: Designed product-development workflows with role-based approvals, document management, workflow automation, and Teamcenter configuration.",
            "Heavy Engineering Equipment Configuration System: Designed a Teamcenter configuration model using business objects, properties, LOVs, naming rules, access control, and approval workflows."
        ],
    }
];

// Flagship PLM Projects
export const plmProjects = [
    {
        title: "Honda Hybrid Bike – Teamcenter PLM Workflow & Configuration",
        tagline: "End-to-End Product Development Lifecycle & Workflow Automation",
        icon: teamcenter,
        theme: "btn-back-blue",
        badge: "Flagship PLM Project",
        highlights: [
            "BMIDE data model configuration tailored for hybrid automotive BOM assembly",
            "Business objects and custom properties definition for hybrid bike parts",
            "Organization, roles, and groups architecture for multi-department routing",
            "Product development workflow with automated milestone validation",
            "Approval and rejection workflow with demote on reject logic",
            "Configured custom EPM handlers for target validation and form population",
            "Role-based access control and project-level data security",
            "Active Workspace (AWC) dashboard tiles and declarative UI configuration",
            "Document approval and named reference lifecycle management",
            "Product improvement workflow and engineering change process",
            "Foundational Teamcenter customization and server extension handlers"
        ],
        techStack: ["Siemens Teamcenter", "BMIDE", "AWC", "Workflow Designer", "EPM Handlers", "Access Manager", "RAC"]
    },
    {
        title: "Heavy Engineering Equipment Configuration System",
        tagline: "Modular Equipment Configuration, Dependent LOVs & Product Structure",
        icon: bmide,
        theme: "btn-back-yellow",
        badge: "Enterprise Configuration",
        highlights: [
            "Equipment configuration architecture for high-complexity machinery",
            "Persistent properties modeling in BMIDE for technical specifications",
            "Hierarchical LOV configuration with dependent LOV concepts",
            "Intelligent naming rules enforcement for serial, part, and drawing numbering",
            "Multi-level product structure and BOM breakdown (EBOM & MBOM)",
            "Role-based access governance with Access Manager privileges",
            "Multi-stage approval workflow with automated signoff routing",
            "Reports and executive dashboard setup via Report Builder & Query Builder",
            "Full BMIDE data model packaging and live deployment testing"
        ],
        techStack: ["BMIDE", "Product Structure / BOM", "Dependent LOVs", "Naming Rules", "Access Manager", "Query Builder", "Report Builder"]
    }
];

export const socialLinks = [
    { name: "GitHub", iconUrl: github, link: "https://github.com/Jaskaran-Guru" },
    { name: "LinkedIn", iconUrl: linkedin, link: "https://www.linkedin.com/in/jaskaran-guru" }
];

// All Projects (Flagship PLM projects placed prominently at the top)
export const projects = [
    {
        iconUrl: teamcenter,
        theme: "btn-back-blue",
        name: "Honda Hybrid Bike – Teamcenter PLM Workflow & Configuration",
        description: "Comprehensive product development workflow with role-based approvals, BMIDE data modeling, EPM handlers, Active Workspace, and document lifecycle governance.",
        link: "https://github.com/Jaskaran-Guru",
        
    },
    {
        iconUrl: bmide,
        theme: "btn-back-yellow",
        name: "Heavy Engineering Equipment Configuration System",
        description: "Enterprise configuration system with persistent properties, dependent LOVs, naming rules, product structure/BOM, role-based access, and Query/Report builders.",
        link: "https://github.com/Jaskaran-Guru",
        
    },
    {
        iconUrl: car,
        theme: "btn-back-blue",
        name: "Blog Platform",
        description: "Full-stack blogging platform with content management and rich text editor.",
        link: "https://github.com/Jaskaran-Guru/blog",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Discussion App",
        description: "Real-time discussion platform with user authentication and community features.",
        link: "https://github.com/Jaskaran-Guru/Discussion-app",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "Elevare - Elevator System",
        description: "Smart elevator management system with IoT integration and real-time monitoring.",
        link: "https://github.com/Jaskaran-Guru/elevare",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "Face Recognition System",
        description: "AI-powered face recognition application using deep learning and computer vision.",
        link: "https://github.com/Jaskaran-Guru/face-recognition",
    },
    {
        iconUrl: pricewise,
        theme: "btn-back-red",
        name: "Flappy Bird Game",
        description: "Classic Flappy Bird game clone with modern graphics and smooth gameplay.",
        link: "https://github.com/Jaskaran-Guru/Flappy-Bird",
    },
    {
        iconUrl: threads,
        theme: "btn-back-green",
        name: "Guess the Number",
        description: "Interactive number guessing game with difficulty levels and score tracking.",
        link: "https://github.com/Jaskaran-Guru/Guess-the-number",
    },
    {
        iconUrl: car,
        theme: "btn-back-blue",
        name: "Jarvis AI Assistant",
        description: "Voice-activated AI assistant with natural language processing and automation.",
        link: "https://github.com/Jaskaran-Guru/jarvis-AI",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Love Calculator",
        description: "Fun love compatibility calculator with interactive UI and animations.",
        link: "https://github.com/Jaskaran-Guru/Love-Calculator",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "Medinet - Healthcare Platform",
        description: "Complete healthcare management system for patients, doctors, and appointments.",
        link: "https://github.com/Jaskaran-Guru/Medinet",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "Medivault - Medical Records",
        description: "Secure medical records management system with encryption and access control.",
        link: "https://github.com/Jaskaran-Guru/Medivault",
    },
    {
        iconUrl: pricewise,
        theme: "btn-back-red",
        name: "Parmodaro Clock",
        description: "Pomodoro technique timer with task management and productivity tracking.",
        link: "https://github.com/Jaskaran-Guru/Parmodaro-Clock",
    },
    {
        iconUrl: car,
        theme: "btn-back-blue",
        name: "QR Code Generator",
        description: "Dynamic QR code generator with customization options and download functionality.",
        link: "https://github.com/Jaskaran-Guru/QR-code-generator",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Saarthi - Travel Companion",
        description: "Smart travel planning and companion app with route optimization.",
        link: "https://github.com/Jaskaran-Guru/Saarthi",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "Snake Game",
        description: "Classic snake game with modern design and increasing difficulty levels.",
        link: "https://github.com/Jaskaran-Guru/Snake",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "Stop Watch",
        description: "Precision stopwatch application with lap timing and reset functionality.",
        link: "https://github.com/Jaskaran-Guru/Stop-Watch",
    },
    {
        iconUrl: pricewise,
        theme: "btn-back-red",
        name: "SysHospital Management",
        description: "Hospital management system for patient records, billing, and staff coordination.",
        link: "https://github.com/Jaskaran-Guru/SysHospital",
    },
    {
        iconUrl: threads,
        theme: "btn-back-green",
        name: "To Do App",
        description: "Task management application with priority tracking and reminders.",
        link: "https://github.com/Jaskaran-Guru/To-Do-app",
    },
    {
        iconUrl: car,
        theme: "btn-back-blue",
        name: "WaygonWay Navigation",
        description: "GPS-based navigation app with offline maps and route planning.",
        link: "https://github.com/Jaskaran-Guru/WaygonWay",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Weather App",
        description: "Real-time weather forecasting application with location-based updates.",
        link: "https://github.com/Jaskaran-Guru/Weather-App",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "YouTube Shorts",
        description: "Short-form video platform inspired by YouTube Shorts with content creation tools.",
        link: "https://github.com/Jaskaran-Guru/youtubeshorts",
    },
];