export const portfolioData = {
  profile: {
    name: 'Pranav chavan',
    title: 'Data Analyst & Developer',
    shortBio:
      "I'm Pranav Chavan, a Data Analyst passionate about turning raw data into meaningful business insights. I work with SQL, Python, Pandas, NumPy, Power BI, and Excel to clean, analyze, and visualize data, building dashboards that support data-driven decisions.",
    resumeUrl: '/Resume.pdf',
    github: 'https://github.com/ipranavchavan',
    linkedin: 'https://www.linkedin.com/in/pranavchavhan/',
    email: 'ipranavchavan@gmail.com',
    location: 'Remote',
  },

  hero: {
    availability: 'Available for freelance & full-time roles',
    stack: ['SQL', 'Python', 'Pandas', 'NumPy', 'Power BI', 'Excel'],
    statCards: [
      {
        label: 'Core Stack',
        items: ['SQL', 'Python', 'Pandas', 'Power BI', 'Excel', 'Looker Studio'],
      },
      {
        label: 'Analytics Focus',
        value: 'CRM + Growth',
        detail: 'Dashboards, automation, and operational reporting',
      },
    ],
  },

  education: [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Vidhayabharti Collage Amravati',
      years: '2020 - 2023',
      details: '7.21 CGPA',
    },
    {
      degree: 'Fellowship in FullStack Development',
      institution: 'CRIO',
      years: 'Jan 2025 - May 2026 | Bengaluru (Remote)',
      portfolioUrl: 'https://crio.do/learn/portfolio/pranavchavanrc/',
      highlights: [
        'Built responsive frontend applications using React and JavaScript.',
        'Developed reusable UI components and responsive layouts.',
        'Practiced API integration and component-based architecture.',
      ],
      techStack: 'HTML, CSS, Bootstrap, JavaScript, React',
    },
  ],

  experience: [
    {
      title: 'Sr. Analyst - IT Market Research',
      company: '',
      location: '',
      period: 'Oct 2023 - Dec 2025',
      description: [
        'Conducted in-depth IT market and competitive research across SaaS, CRM, cloud, and enterprise technology segments to support sales and business development teams.',
        'Built and maintained high-quality prospect and account databases in Apollo.io, segmented by industry, geography, company size, and technology stack.',
        'Managed Salesforce, Pipedrive, and Freshworks CRM data to track leads, opportunities, pipeline health, and engagement metrics.',
        'Supported lead generation and outbound campaigns through decision-maker research, contact validation, and firmographic and technographic enrichment.',
        'Analyzed market trends, customer pain points, and competitor positioning to deliver actionable sales-strategy and client-targeting insights.',
        'Improved data accuracy, reporting efficiency, and CRM adoption through regular audits and process optimization.',
      ],
      skills: ['Salesforce', 'Apollo.io', 'Pipedrive', 'Freshworks CRM', 'Monday.com', 'Market Research'],
    },
    {
      title: 'Analyst - IT Market Research',
      company: '',
      location: '',
      period: 'May 2021 - Sep 2023',
      description: [
        'Conducted IT market and competitive research to identify target industries, buyer personas, and high-intent accounts.',
        'Built and enriched B2B lead databases using Snov.io and Lusha, maintaining high data accuracy and relevance.',
        'Used LinkedIn Sales Navigator for account mapping, decision-maker research, and lead qualification.',
        'Executed and optimized email outreach campaigns with GMass, tracking engagement and response metrics.',
        'Created research reports and Looker Studio dashboards to analyze lead quality, campaign effectiveness, and market trends.',
        'Supported sales and growth teams with actionable insights through structured data analysis and reporting.',
      ],
      skills: ['Snov.io', 'Lusha', 'LinkedIn Sales Navigator', 'GMass', 'Looker Studio', 'Lead Generation'],
    },
    {
      title: 'Executive Lead',
      company: 'Btb Venture Group',
      location: 'Remote',
      period: 'May 2025 - Present',
      description: [
        'Analyzed CRM datasets (Pipedrive) to identify trends in conversion rates and deal progression.',
        'Built performance tracking dashboards to monitor funnel metrics and revenue opportunities.',
        'Automated data workflows using Google Apps Script and Power Automate, reducing manual effort by 30-40%.',
        'Performed data cleaning and validation to ensure high accuracy across CRM systems.',
        'Analyzed market and account datasets to support business expansion and growth strategy.',
        'Coordinated cross-functional execution, task tracking, and reporting through Monday.com.',
        'Leveraged AI tools to enhance research efficiency, data enrichment, and operational scalability.',
      ],
      skills: [
        'Microsoft Power Automate',
        'Google Apps Script',
        'Seamless AI',
        'Pipedrive',
        'Monday.com',
      ],
    },
  ],

  projects: [
    {
      title: 'QKart Frontend',
      period: 'Aug 2025',
      description:
        'QKart is an e-commerce application offering a variety of products for customers to choose from.',
      highlights: [
        'Implemented the core logic for authentication, shopping cart, and checkout.',
        'Improved UI with responsive design elements for a consistent experience across devices.',
        'Utilized REST APIs to dynamically load and render data served by the backend server.',
      ],
      tech: ['React Hooks', 'Forms', 'Controlled Components', 'REST', 'JSON', 'Error Handling', 'Authentication', 'Shopping Cart'],
      visual: 'cart',
      github: 'https://github.com/ipranavchavan',
      projectUrl: 'https://crio.do/learn/portfolio/pranavchavanrc/ME_QKART_FRONTEND_V2/',
    },
    {
      title: 'QTripDynamic',
      period: 'Jul 2025',
      description:
        'QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.',
      highlights: [
        'Created web pages using HTML and CSS and made them dynamic using JavaScript.',
        'Improved UX with multi-select filters and image carousels.',
        'Utilised localStorage to persist user preferences on the client side.',
      ],
      tech: ['HTML', 'CSS', 'ES6', 'JavaScript', 'Developer Tools', 'Bootstrap', 'localStorage'],
      visual: 'travel',
      github: 'https://github.com/ipranavchavan',
      projectUrl: 'https://www.crio.do/learn/portfolio/pranavchavanrc/ME_QTRIPDYNAMIC/',
    },
    {
      title: 'XCruise',
      period: 'May 2025',
      description:
        'XCruise is a responsive static website built from scratch using HTML and CSS to provide a seamless and visually appealing experience for users looking to book cruise vacations.',
      highlights: [
        'Developed a responsive and interactive website showcasing cruise destinations.',
        'Created a clear, visually appealing layout for essential cruise information and offerings.',
      ],
      tech: ['HTML', 'CSS', 'Responsive Design'],
      visual: 'cruise',
      github: 'https://github.com/ipranavchavan',
      projectUrl: 'https://www.crio.do/learn/portfolio/pranavchavanrc/ME_FE_BUILDOUT_XCRUISE/',
    },
    {
      title: 'Business KPI Dashboard',
      period: 'Analytics Project',
      description:
        'Built dashboards for tracking operational and sales performance metrics, analyzing trends and conversion performance to support strategic decisions.',
      highlights: [
        'Tracked operational, sales, and funnel metrics in an executive-friendly dashboard.',
        'Analyzed trends and conversion performance to support strategic decisions.',
      ],
      tech: ['Power BI', 'Excel', 'SQL'],
      visual: 'analytics',
      github: 'https://github.com/ipranavchavan',
    },
    {
      title: 'CRM Automation Project',
      period: 'Automation Project',
      description:
        'Automated CRM data workflows using Power Automate and Google Apps Script to improve operational efficiency and reporting speed.',
      highlights: [
        'Automated repetitive CRM data workflows and reporting tasks.',
        'Improved operational efficiency and reporting turnaround time.',
      ],
      tech: ['Power Automate', 'Google Apps Script', 'CRM'],
      visual: 'automation',
      github: 'https://github.com/ipranavchavan',
    },
    {
      title: 'Lead Conversion Analysis',
      period: 'Analytics Project',
      description:
        'Analyzed campaign and lead engagement data to improve targeting and reporting accuracy.',
      highlights: [
        'Examined campaign and lead engagement data for actionable patterns.',
        'Improved targeting insights and reporting accuracy.',
      ],
      tech: ['Excel', 'Power BI', 'Pandas'],
      visual: 'analytics',
      github: 'https://github.com/ipranavchavan',
    },
  ],

  skills: [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    },
    {
      title: 'Data Analysis',
      items: ['Excel', 'SQL', 'Power BI', 'Looker Studio', 'Tableau'],
    },
    {
      title: 'Tools / Other',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Appscript', 'Power Automate'],
    },
  ],
};

export default portfolioData;
