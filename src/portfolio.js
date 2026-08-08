/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "NoohFaisal",
  title: "Hi all, I'm Nooh",
  subTitle: emoji(
    "An experienced AI Engineer and Data Scientist with 4+ years of expertise in data analytics, machine learning, and AI-driven automation 🤖. Skilled in Python, SQL, and building LLM-powered voice and automation agents, I help businesses turn complex data and workflows into production-grade AI solutions. With a proven track record across healthcare, retail, and tech, I'm passionate about transforming complex data sets into actionable insights that fuel innovation and efficiency."
  ),
  resumeLink: process.env.PUBLIC_URL + "/Nooh_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/noohfaisal",
  linkedin: "https://www.linkedin.com/in/nooh-faisal/",
  gmail: "noohfaisal@gmail.com",
  medium: "https://medium.com/@noohfaisal",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:"AI ENGINEER BUILDING LLM-POWERED VOICE AGENTS AND AUTOMATION THAT TURN COMPLEX DATA INTO ACTIONABLE INSIGHTS",
  skills: [
    <br></br>,
    emoji("⚡ Design and deploy LLM-integrated voice and automation agents that reduce operational costs and manual work."),
    emoji("⚡ Build predictive models and machine learning solutions to drive business growth and operational efficiency."),
    emoji("⚡ Engineer data pipelines, CRM integrations, and observability tooling to keep AI systems reliable in production.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    <br></br>,
    <br></br>,
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "OpenAI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Claude",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "LiveKit",
      fontAwesomeClassname: "fas fa-microphone"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-laptop"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-comments"
    },
    {
      skillName: "Datadog",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "George Brown College",
      logo: require("./assets/images/GBC.png"),
      subHeader: "Postgraduate Certification: Applied AI Solutions Development",
      duration: "January 2023 - December 2023",
      desc: "GPA: 3.8/4.0",
      descBullets: [
        "Honored on the Dean's List for outstanding academic performance in both semesters."
        
      ]
    },
    {
      schoolName: "Visvesvaraya Technological University",
      logo: require("./assets/images/VTU.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2017 - March 2022",
      desc: "GPA: 3.2/4.0",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Artificial Intelligence & Voice Agents", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Automation & QA",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Forward Deployed Engineer",
      company: "CNTXT",
      companylogo: require("./assets/images/cntxtai_logo.jpeg"),
      date: "February 2026 – Present",
      desc: "",
      descBullets: [
        "Designed and deployed enterprise-grade end-to-end business AI solutions, specialising in AI-driven automation and voice agent development.",
        "Led forward deployment engagements, working directly with enterprise clients to scope, build, and deliver custom AI-powered voice agents and workflows tailored to operational needs.",
        "Owned the full QA lifecycle for the voice platform, including feature, regression, and API testing to ensure production stability.",
        "Collaborated cross-functionally with product and engineering teams to triage and resolve client-reported incidents rapidly.",
        "Technologies: Python, JavaScript, Claude, OpenAI, MCP, Claude Skills, LiveKit, Datadog, FastAPI, LangChain, LLM, Prompt Engineering, Automation, Postman, Git, Jira."
      ]
    },
    {
      role: "AI Engineer",
      company: "Actualize",
      companylogo: require("./assets/images/actualizeae_logo.png"),
      date: "October 2024 – February 2026",
      desc: "",
      descBullets: [
        "Designed and deployed 15+ LLM-integrated automation agents (Agntix platform), reducing client operational costs by 20–35% and manual intervention by 50%.",
        "Built DocTalk, a real-time speech-to-speech document assistant using OpenAI's Realtime API, cutting document review time by 60%.",
        "Trained and fine-tuned in-house LLM and voice models, reducing API dependency and latency by 30%; benchmarked 7+ PDF extraction tools, improving parser selection accuracy by 50%.",
        "Built DocEngine, an AI-driven legal document generation platform: redesigned RFP prompt templates (+25% accuracy), shipped LLM-powered dynamic section creation and summarization features (-40% drafting time), and built a benchmarking repo for AI document evaluation.",
        "Executed 30+ feature tests, 60+ API tests, and 10+ end-to-end tests, achieving 95% defect detection before release.",
        "Technologies: Python, JavaScript, FastAPI, LangChain, OpenAI, LLM, Prompt Engineering, Automation, Postman, Cypress, Zephyr, Datadog, Git, Jira."
      ]
    },
    {
      role: "Research And Development Associate",
      company: "Pendium Health",
      companylogo: require("./assets/images/phlogo.png"),
      date: "January 2023 – December 2023",
      desc: "",
      descBullets: [
        "Engineered and refined data pipelines for efficient preprocessing and storage by extracting data from public APIs, transforming, and optimizing it for storage in a vector database (Pinecone), expanding the database by 40% in two months.",
        "Enhanced chat functionalities using retrieval-augmented generation techniques, increasing efficiency by 25%.",
        "Developed a software feature that generates detailed consumer information during medication prescription, enhancing client interactions and increasing customer engagement by 35%.",
        "Technologies: Python, Numpy, Pandas, Git, Langchain, OpenAI, Pinecone, LLM."
      ]
    },
    {
      role: "Data Analyst",
      company: "Docker Group",
      companylogo: require("./assets/images/docker.png"),
      date: "Januaury 2020 – November 2022",
      descBullets: ["Conducted exploratory data analysis on sales data to detect trends, driving a 10% growth in monthly revenue.",
        "Built predictive model for sales forecasting using regression analysis, improving prediction accuracy by 15%.",
        "Reporting sales and products popularity data using Tableau, supporting stakeholders in decision-making that increased product availability by 20% and improved customer satisfaction.",
        "Oversaw inventory management, achieving a 25% optimization in stock levels and a 30% improvement in stock turnover through precise data analysis.",
        "Technologies: Python, Microsoft Excel, MS SQL, Tableau."
      ]
    },
    {
      role: "Data Analyst",
      company: "Cargo Mate",
      companylogo: require("./assets/images/cargologo.png"),
      date: "October 2021 – October 2022",
      descBullets: ["Managed data collection and analysis, maintaining 99% uptime for SQL Server Databases and optimizing performance.",
        "Streamlined data integration processes without comprising data security, saving over 8 hours per week.",
        "Produced data visualizations to enhance stakeholder communication using Google Data Studio.",
        "Technologies: MS SQL, BigQuery, GCP, Google Sheets, Google Data Studio."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "FireWatch AI",
      projectDesc: "Developed a smoke detection system using computer vision model (YOLOv8) based on cctv monitoring and drone imagery.",
      
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "SnapDetect",
      projectDesc: "Designed an AI-driven application to simplify the sale of household items during relocations by finetuning YOLOv8 object detection model.",
      
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Prescription Parser",
      projectDesc: "Refined a NER model by fine-tuning BERT to extract information from medical prescriptions.",
      
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Mental Illness Detection",
      projectDesc: "Developed a machine learning model to detect patterns in neuroimaging data linked to mental illnesses like depression and schizophrenia.",

    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "DocTalk",
      projectDesc: "Developed a proof of concept enabling real-time, speech-to-speech interaction with uploaded documents using OpenAI's Realtime API, reducing document review and comprehension time by 60%.",

    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Employee Future Prediction",
      projectDesc: "Developed a machine learning model that predicts employee turnover based on critical factors, using a curated dataset of 4,500 individuals, to improve employee retention.",

    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      //subtitle:
      //  "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/microsoft.png"),
      imageAlt: "Microsoft",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1zPXR5OF1cEyyBwsiy3WyZDmNADpiehim/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Data Analytics Professional Certificate",
      //subtitle:
      //"Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1Wytotbz5GaZGUjFR32YAEf7gOLzAWAKE/view?usp=sharing"
        }
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  
  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971 56 170 3377",
  email_address: "noohfaisal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
