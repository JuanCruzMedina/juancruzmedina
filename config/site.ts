export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Juan Cruz Medina :)",
  email: "mail@juanmedina.com.ar",
  sendEmail: "mailto:mail@juanmedina.com.ar",
  description: "Juan Cruz Medina Software Developer Portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/JuanCruzMedina",
    linkedin: "https://www.linkedin.com/in/medinajuancruz/",
    twitter: "https://x.com/juanmedinadev",
    voxel: "https://www.voxelgroup.net/es/",
    university: "https://www.frc.utn.edu.ar/",
  },
  resume: {
    description:
      "I am a backend developer with experience in designing and building applications using .NET and Python, leveraging best practices, modern development techniques, and software design principles. My primary focus is collaborating with teams to create high-quality solutions in the most effective way possible. I have gained valuable experience working with teams of all sizes, from large to small. I am particularly passionate about applying my technical expertise in areas such as refactoring techniques, best practices, legacy code management, and software architecture to improve and optimize applications.",

    workExperience: [
      {
        charge: "Software Engineer",
        company: "Voxel Group an Amadeus Company",
        location: "Barcelona, Spain",
        date: "Apr 2022 - Present",
        descriptionItems: [
          "Design, develop, and maintain .NET applications within the Compliance team.",
          "Create new applications from scratch, emphasizing reliability and scalability.",
          "Perform code reviews for team members to ensure code quality and best practices.",
          "Manage technical debt for one of the most demanding projects, ensuring long-term maintainability.",
          "Successfully proposed and implemented an improvement in the certificate update process, reducing manual tasks as an intermediate step before a full migration to a new application.",
          "Work with .NET Core 3.1 and .NET Framework 4.8, utilizing Dapper for data access.",
          "Use Redis, PostgreSQL, and Oracle databases for different application needs.",
          "Define metrics and implement observability improvements for better performance monitoring.",
          "Collaborate with the team, applying best practices and agile methodologies.",
          "Use Python for scripting and automation tasks.",
        ],
        type: "Full-time",
        companyLogo: "/resume/voxel.png",
      },
      {
        charge: "Team Leader",
        company: "CORACE",
        location: "Córdoba, Argentina",
        date: "Jan 2024 - Mar 2024",
        descriptionItems: [
          "Led a three-person IT consulting team, handling email migration and infrastructure updates.",
          "Managed requirement gathering, task planning, and direct client interactions.",
          "Acted as the intermediary between the team and the client, ensuring smooth communication and project alignment.",
          "Successfully migrated email services from Claro to Google, improving communication efficiency.",
          "Upgraded the organization’s software infrastructure.",
          "Documented processes thoroughly.",
        ],
        type: "Freelance",
        companyLogo: "/resume/corace.jpeg",
      },
      {
        charge: "Full Stack Developer",
        company: "Fulltrace S.A.",
        location: "Córdoba, Argentina",
        date: "Dec 2023 - Apr 2024",
        descriptionItems: [
          "Designed and developed a .NET application from scratch to manage livestock data from the company’s proprietary devices.",
          "Used the latest version of .NET Framework with Windows Forms for UI development.",
          "Implemented data analysis functionality without relying on external libraries.",
          "Regularly met with the product creator to align development efforts with the product vision.",
          "The application had active users from its first version, and no bugs or issues have been reported since deployment.",
          "Implemented data handling features, allowing users to download and modify information.",
        ],
        type: "Freelance",
        companyLogo: "/resume/fulltrace.jpeg",
      },
      {
        charge: "Software Engineer",
        company: "AGI System Developments",
        location: "California, USA",
        date: "Oct 2022 - Jul 2023",
        descriptionItems: [
          "Developed a Python-based application on AWS Lambda.",
          "Integrated AWS logging services for monitoring and debugging.",
          "Enabled remote control of recreational devices (spa, chiller, sauna) via Amazon Alexa.",
          "The application has been actively used since deployment, with no reported bugs or technical issues.",
        ],
        type: "Freelance",
        companyLogo: "/resume/agi.jpeg",
      },
      {
        charge: "Backend Developer",
        company: "Juan Toselli Intl. Tours",
        location: "Córdoba, Argentina",
        date: "Aug 2021 - Apr 2022",
        descriptionItems: [
          "Developed and maintained .NET APIs for booking tourism services (hotels, flights, activities), with a focus on performance and reliability.",
          "Created reusable modules for multiple tourism applications, accelerating the release of new features.",
          "Developed a natural language processing module in Python (using SpaCy and NLTK) to normalize hotel room names from various providers.",
          "Led the integration of external service providers, working directly with their development teams to ensure seamless connectivity.",
          "Managed SQL & NoSQL databases (SQL Server, MySQL, MongoDB).",
          "Migrated services from Flask to FastAPI.",
        ],
        type: "Full-time",
        companyLogo: "/resume/toselli.jpeg",
      },
      {
        charge: "Fullstack Developer",
        company: "Procoop SRL",
        location: "Córdoba, Argentina",
        date: "Feb 2021 - Sept 2021",
        descriptionItems: [
          "Maintained a .NET desktop application for managing cooperatives and utilities (electricity, gas, water, internet).",
          "Implemented web services from scratch, applying design patterns and best practices.",
          "Developed an application to handle file storage on Amazon S3.",
          "Managed relational databases (MySQL, SQL Server).",
        ],
        type: "Full-time",
        companyLogo: "/resume/procoop.jpeg",
      },
      {
        charge: "Full Stack Developer",
        company: "Pentamedia",
        location: "Argentina",
        date: "Jan 2021 - Feb 2021",
        descriptionItems: [
          "Contributed to digital business transformation initiatives.",
          "Maintained e-commerce modules as a full stack developer (HTML, CSS, JS, PHP, Bootstrap).",
        ],
        type: "Freelance",
        companyLogo: "/resume/pentamedia.jpeg",
      },
    ],
    skills: [
      // Backend Frameworks & Languages
      ".NET",
      "Python",
      "Node.js",
      "Express",

      // .NET Ecosystem
      "Windows forms",
      "Entity Framework",
      "Dapper",
      "LINQ",

      // Python Frameworks
      "Flask",
      "FastAPI",

      // Frontend & Web
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "MERN",

      // UI Libraries & Frameworks
      "TailwindCSS",
      "Bootstrap",
      "Material-UI",

      // Software Design & Architecture
      "SOLID",
      "DDD",
      "Design Patterns",
      "Clean Code",
      "Refactoring",
      "Ports & Adapters",
      "TDD",

      // Project Management & Methodologies
      "Agile",

      // Databases
      "SQL",
      "MongoDB",
      "Oracle",
      "MySQL",

      // APIs & Communication
      "REST",

      // DevOps & Cloud
      "Git",
      "Github",
      "Jenkins",
      "AWS",
      "Lambda",
      "S3",
      "Firebase",

      // Monitoring & Logging
      "Graylog",
      "Grafana",
      "Canonical",
      "Logging",

      // Miscellaneous
      "Alexa",
      "Figma",
    ],
    education: [
      {
        title: "Information Systems Engineering",
        institution: "Universidad Tecnológica Nacional",
        subtitle: "2018 - Present",
        description: "Córdoba, Argentina",
        image: "/resume/utn-azul.jpg",
      },
    ],
    languages: [
      {
        name: "Spanish",
        level: "Native",
      },
      {
        name: "English",
        level: "Conversational",
      },
    ],
    certifications: [
      {
        title: "React from zero to expert: Hooks and MERN",
        date: "january 2025",
        instructor: "Fernando Herrera, {d/t} - DevTalles",
        company: "Udemy",
        image:
          "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg",
        link: "https://www.udemy.com/certificate/UC-40b17d83-9fa1-436c-b4a3-256d219fb09b/",
      },
      {
        title: "Cloud Patterns in Azure",
        date: "october 2024",
        instructor: "Javier Moreno",
        company: "NTT DATA",
        image:
          "https://mc-8afc6902-e56c-432c-8c3f-3991-cdn-endpoint.azureedge.net/-/media/project/emea/shared/global-logo/globallogo_nttdata_white_resized.png?extension=webp&amp;hash=82AED889DCD1D6C0BA76C56A5F81B4C6",
        link: "https://drive.google.com/file/d/1UEI1q7p2T-K38nMFkVkdQoPoDGSIYpaf/view?usp=sharing",
      },
      {
        title: "Refactoring",
        date: "september 2024",
        instructor: "Pedro Pardal",
        company: "Exeal",
        image:
          "https://import.cdn.thinkific.com/cdn-cgi/image/width=384,dpr=1,onerror=redirect/486459/custom_site_themes/358479/eGwqY7m6Tfa66CZOaxri_Logo-Exeal.png",
        link: "https://academia.exeal.com/certificates/ryvtmamogg",
      },
      {
        title: "Domain-driven Design: tactic patterns",
        date: "august 2024",
        instructor: "Pedro Pardal",
        company: "Exeal",
        image:
          "https://import.cdn.thinkific.com/cdn-cgi/image/width=384,dpr=1,onerror=redirect/486459/custom_site_themes/358479/eGwqY7m6Tfa66CZOaxri_Logo-Exeal.png",
        link: "https://academia.exeal.com/certificates/ljwuoev0xl",
      },
    ],
  },
  projects: {
    title: "Recent Projects & ",
    titleMark: "Achievements",
    subtitle:
      "I love building projects and practice my engineering skills, here's an archive of things that I've worked on.",
    items: [
      {
        title: "📊 Automated Tax File Normalization for ARCA",
        description:
          "Development of a custom application to normalize files generated by Argentina's tax agency (formerly AFIP, now ARCA). This tool extracts key financial information from the files to streamline accounting processes. It was specifically designed for a client in the tire retail business.",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        privacy: "open",
        link: "https://afipxer-seven.vercel.app/",
        sourceLink: "https://github.com/JuanCruzMedina/afipxer",
        image: "afipxer-project.jpg",
        date: "2025",
      },
      {
        title: "🐄 Desktop application to manage livestock information ",
        description:
          "A desktop application developed with Windows Forms to manage the data of a Digital Caravan Reader Stick. This application allowed users to download, normalize, and send new information to the device.",
        tags: ["C#", ".NET", "Windows Forms"],
        privacy: "closed",
        image: "fulltrace-project.jpg",
        date: "2023",
      },
      {
        title: "🌐 Remote Device Management App",
        description:
          "Development of a Python application for remotely managing devices such as spas, chillers and saunas. The app was deployed on an AWS Lambda function, enabling seamless communication with the devices using a custom protocol designed by the client.",
        tags: [
          "Python",
          "Alexa",
          "AWSLambda",
          "RemoteControl",
          "SmartDevices",
          "IoT",
          "Automation",
        ],
        privacy: "closed",
        image: "alexa-device-manager-project.jpg",
        date: "2023",
      },
      {
        title: "🏨 Tourism Supplier Mapper API",
        description:
          "Development of a RESTful API to map and standardize information from tourism product suppliers. Each supplier provides hotel room availability data, but room types are labeled differently across providers. This application normalizes all information using Natural Language Processing (NLP) techniques with NLTK and SpaCy. Built with Python, it leverages FastAPI as the framework for high-performance API interactions.",
        tags: [
          "Python",
          "NLP",
          "FastAPI",
          "NLTK",
          "Spacy",
          "TourismTech",
          "RESTfulAPI",
        ],
        privacy: "internal",
        image: "room-mapper-project.jpg",
        date: "2021",
      },
    ],
  },
};
