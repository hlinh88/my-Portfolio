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
  username: "Hoang Linh Nguyen",
  title: "Hi all, I'm Luke",
  subTitle: emoji(
    "A passionate iOS Developer 🚀 having an experience of building " +
      "Mobile applications with Swift / Flutter / React Native."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hlinh88",
  linkedin: "https://www.linkedin.com/in/hoang-linh-nguyen-760330186/",
  gmail: "hlinh.jobs@gmail.com",
  facebook: "https://www.facebook.com/llpmaker249",
  stackoverflow: "https://stackoverflow.com/users/19060641/hlinhxavo",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "MOBILE APPLICATION DEVELOPER WHO WANTS TO BUILD MORE INCREDIBLE APPS",
  skills: [
    emoji("⚡ Self-motivated, be honest and responsible"),
    emoji(
      "⚡ Experienced with source version control Git and optimizing performance for app"
    ),
    emoji(
        "⚡ A constant learner who is eager to explore and share new things, to be challenged, even by unfamiliar technologies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RMIT University",
      logo: require("./assets/images/rmit.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "October 2020 - June 2023",
      desc: "Melbourne, Australia",
      descBullets: [
      ]
    },
    {
      schoolName: "York University",
      logo: require("./assets/images/york.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "September 2019 - April 2020",
      desc: "Toronto, Canada",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Swift", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Flutter",
      progressPercentage: "60%"
    },
    {
      Stack: "React Native",
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
      role: "iOS Developer",
      company: "Sun Asterisk",
      companylogo: require("./assets/images/sun.png"),
      date: "August 2023 – Present",
      desc: "Participate in technical training courses, in-depth training on iOS development specialized knowledge as well as new technology introduction sessions at the company.",
    },
    {
      role: "Software Intern",
      company: "VNG Corporation",
      companylogo: require("./assets/images/vng.png"),
      date: "September 2021 – November 2021",
      desc: "Participate in the development and operation of internal support tools, and APIs on web platforms using ReactJS."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "title",
  subtitle: "subtitle",
  projects: [
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "projectName",
      projectDesc: "projectDesc",
      footerLink: [
        {
          name: "Visit Website",
          url: "url"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Champion of JunctionX Hanoi 2021",
      subtitle:
        "JunctionX Hanoi 2021 is an online hackathon organized by JunctionX Hanoi. Targeted at solving problems we are facing during this ongoing pandemic, we bring together developers, designers and other tech-minded individuals to create projects and solve intriguing challenges. During the this difficult time of Covid-19, we realize that our online event could contribute to the regional resolution by raising awareness and inspire people to build solution to tackle.",
      image: require("./assets/images/junction.png"),
      imageAlt: "Junction",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/hoang-linh-nguyen-760330186/overlay/1635477464303/single-media-viewer/?profileId=ACoAACvUuzgBX0D9wQ6po4LlHqdNY4l3TQlWMwI"
        }
      ]
    },
    {
      title: "IELTS Academic (7.0)",
      subtitle: "IELTS is the world's most popular English language test for higher education and global migration.",
      image: require("./assets/images/ielts.png"),
      imageAlt: "Ielts logo",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    }
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
      url: "",
      title: "",
      description:
        ""
    },
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84345583680",
  email_address: "hlinh.jobs@gmail.com"
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
  isHireable
};
