/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import 'devicon/devicon.min.css';

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
  username: "Kedar Chandulur",
  title: "Hi all, I'm Kedar",
  subTitle: emoji(
    "A passionate Software Engineer and Game Developer specializing in building real-time, scalable, and immersive systems. Experienced in gameplay systems, distributed engines, and multithreaded tools, delivering performance-driven solutions across platforms."
  ),
  resumeLink: "https://drive.google.com/drive/folders/1HMj6h3UzaOzYj2PXuvkTwVpLFU6fyoKj?usp=sharing", // Leave empty if you don't want to display the resume button
  displayGreeting: true // Keep true to show the greeting section
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KedarChandulur",
  linkedin: "https://www.linkedin.com/in/kedar-chandulur-42b1a317a/",
  gmail: "kchandulur@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER AND GAME DEVELOPER SPECIALIZING IN BUILDING REAL-TIME, SCALABLE SYSTEMS",
  skills: [
    emoji("⚡ Develop real-time, scalable systems for immersive VR/AR experiences."),
    emoji("⚡ Design and optimize interactive applications using C++ and Unity"),
    emoji("⚡ Implement backend solutions using AWS-EC2, REST APIs, and Node.js"),
    emoji("⚡ Design and optimize distributed engines and multithreaded applications.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "devicon-csharp-plain"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain",
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "devicon-unity-plain"
    },
    {
      skillName: "Unreal",
      fontAwesomeClassname: "devicon-unrealengine-original",
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "devicon-github-plain",
    },
    {
      skillName: "JSON",
      fontAwesomeClassname: "devicon-json-plain",
    },
    {
      skillName: "gRPC",
      fontAwesomeClassname: "devicon-grpc-plain",
    },
    {
      skillName: "Photon",
      fontAwesomeClassname: "devicon-photonengine-plain",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "devicon-nodejs-plain-wordmark",
    },
    {
      skillName: "Amazon EC2",
      fontAwesomeClassname: "devicon-amazonwebservices-plain-wordmark",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain",
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu",
    },
    {
      skillName: "Multithreading",
      fontAwesomeClassname: "fa fa-network-wired",
    },
    {
      skillName: "Distributed Systems",
      fontAwesomeClassname: "fa fa-server",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "devicon-firebase-plain",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "devicon-python-plain",
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "C",
      fontAwesomeClassname: "devicon-c-plain",
    },
    {
      skillName: "Lua",
      fontAwesomeClassname: "devicon-lua-plain",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain",
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "devicon-html5-plain",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "devicon-azuresqldatabase-plain",
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "devicon-css3-plain",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "DePaul University",
      logo: require("./assets/images/depaulLogo.avif"),
      subHeader: "Master of Science in Software Engineering, Concentration: Real-Time Game Systems",
      duration: "August 2022 - June 2024",
      desc: "Member of university's Rainbow 6 Siege team.",
    },
    {
      schoolName: "Backstage Pass Institute of Gaming and Technology",
      logo: require("./assets/images/backstagepassinstituteLogo.png"),
      subHeader: "Bachelor of Science in Computer Science and Game Development",
      duration: "August 2016 - June 2020",
      desc: "Played Rainbow 6 Siege professionally in India, winning multiple tournaments.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Imaginate",
      companylogo: require("./assets/images/imaginateLogo.jpg"),
      date: "July 2020 – January 2022",
      desc: "Developed and optimized core features for Atom, a cross-platform VR/AR collaboration application. Managed CAD object integration, real-time collaboration, and UI enhancements.",
      descBullets: [
        "Led the CAD object viewer development, implementing seamless model conversion using Node.js and Autodesk Forge.",
        "Built a scalable conversion pipeline for transforming CAD models into GLTF format on AWS EC2.",
        "Integrated REST APIs for real-time data transfer between Autodesk Forge, Imaginate backend, and Unity.",
        "Developed real-time name displays and implemented speech-to-text functionality for hands-free interaction.",
        "Mentored interns on CAD object integration and speech-to-text projects."
      ]
    },
    {
      role: "Game Developer",
      company: "Gameshastra",
      companylogo: require("./assets/images/gameshastraLogo.jpg"),
      date: "June 2019 – July 2020",
      desc: "Developed and optimized mobile games for iOS and Android, focusing on gameplay mechanics, authentication systems, and build management.",
      descBullets: [
        "Streamlined Unity build processes for iOS (Xcode) and Android (NDK, SDK, OpenJDK).",
        "Integrated third-party plugins, including Facebook login and social authentication systems.",
        "Led debugging efforts to resolve game engine bugs, improving stability and reducing post-build issues.",
        "Collaborated with QA teams to ensure smooth game releases through extensive post-build testing."
      ]
    },
    {
      role: "Game Programmer (Volunteer & Intern)",
      company: "Games for Love",
      companylogo: require("./assets/images/gamesforloveLogo.png"),
      date: "April 2024 – Present",
      desc: "Led gameplay programming for two single-player Windows games: Gather Sword (Puzzle) and Cause-23 (Survival). Developed AI behaviors, weapon mechanics, and UI systems.",
      descBullets: [
        "Implemented a UI Manager that improved responsiveness and reduced load times by 15%.",
        "Created AI behaviors using Unity NavMesh, enhancing enemy movement and interactions.",
        "Programmed weapon mechanics.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Academic and Personal Projects",
  projects: [
    {
      //image: require("./assets/images/distributedSystems.jpg"), // optional if you have a visual
      projectName: "Distributed Systems",
      projectDesc:
        "Designed and implemented a scalable file retrieval system using a multithreaded client-server model. Orchestrated communication between virtual machines and containers using SSH, ZeroMQ, and gRPC. Built a lightweight file server to simulate real-world distributed environments.",
      footerLink: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/kedar-chandulur-42b1a317a/details/projects/"
        }
      ]
    },
    {
      projectName: "Game Engine",
      projectDesc: "Built a 3D Game Engine using C++ and DirectX 11 with full support for memory management, shaders, and real-time rendering. Developed systems for asset loading and animation. Engine was used to create interactive environments with smooth performance and modular architecture.",
      footerLink: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/kedar-chandulur-42b1a317a/details/projects/"
        }
      ]
    },    
    {
      projectName: "Multithreading Project",
      projectDesc: "Created a modular multithreading framework using C#(for audio engine) and C++(for running a puzzle solver). Improved performance by separating logic into concurrent threads, reducing latency and boosting responsiveness. Focused on synchronization, thread safety.",
      footerLink: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/kedar-chandulur-42b1a317a/details/projects/"
        }
      ]
    },
    {
      projectName: "Space Invaders Game",
      projectDesc: "Recreated the classic Space Invaders arcade game using Unity and C#. Implemented object pooling for efficient projectile handling, accurate collision detection for enemy hits, and a wave-based enemy spawning system. Applied design patterns to ensure scalability and code maintainability.",
      footerLink: [
        {
          name: "Video Demo",
          url: "https://youtu.be/K__JX0RLzYs?si=2KfmUMbQRW9zT6z9&t=833"
        }
      ]
    },        
    {
      projectName: "Escape Room",
      projectDesc: "Designed a escape room game in Unity where players solve puzzles and answer quizzes to progress. Integrated a custom quiz system, dynamic puzzle flow, and multiple interactive rooms to enhance gameplay. Focused on player progression and UI feedback to improve user engagement.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KedarChandulur/EscapeRoom_QuizBased"
        }
      ]
    },
    {
      projectName: "Business Game",
      projectDesc: "Created a board-style business simulation game inspired by traditional Indian gameplay. Developed interactive UI, player turn system, dice mechanics, and property logic using Unity and C#. Designed for both single and multiplayer modes with a focus on game balance and usability.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KedarChandulur/Business_Game"
        }
      ]
    },
    {
      projectName: "Volcano Panic",
      projectDesc: "Developed a Unity-based vehicle rescue game where players save hostages from volcanic danger. Implemented player navigation with NavMesh, designed immersive camera mechanics, and scripted gameplay logic using SOLID principles and object-oriented patterns.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KedarChandulur/Volcano_Panic"
        }
      ]
    },
    {
      projectName: "Pong Game",
      projectDesc: "Recreated the classic Pong game in Unity. Built collision-based paddle and ball interactions, scoring logic, and responsive player controls. Focused on game loop structure, physics handling, and debugging techniques to reinforce foundational game programming concepts.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KedarChandulur/Pong"
        }
      ]
    },
    {
      projectName: "Cryptology Ciphers",
      projectDesc: "Implemented classic cryptographic algorithms like AES and DES using C++. Simulated Meet-in-the-Middle and brute-force attacks to demonstrate vulnerabilities. Focused on encryption fundamentals, key generation, and attack mitigation strategies through practical examples.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KedarChandulur/Cryptology_BasicCiphers"
        }
      ]
    },
    {
      projectName: "Basic Login System",
      projectDesc: "Built a login system using Unity, C#, PHP, and MAMP. Implemented backend validation with hashed password storage, user session management, and basic authentication. Focused on secure communication between frontend and backend using HTTP POST and MySQL integration.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KedarChandulur/Basic_Login_Setup"
        }
      ]
    },
    {
      //image: require("./assets/images/Projectsummaries.png"),
      projectName: "Additional Portfolio Documents",
      projectDesc: "Hosted a collection of project-related assets including gameplay demos, design summaries, and technical overviews. These materials provide extended context to each project, showcasing development processes, feature implementations, and problem-solving strategies.",
      footerLink: [
        {
          name: "Go to Drive",
          url: "https://drive.google.com/drive/folders/1yR-YV0b9Un_kF_NozujJsi5A0SHYtia7?usp=sharing",
        }
      ]
    }    
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (773) 732-1908",
  email_address: "kchandulur@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
