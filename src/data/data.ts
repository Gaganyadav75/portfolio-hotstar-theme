import { MainDataType } from "@/components/types";

export const techInfo = {
  hero: {
    id: 0,
    title: "SKILLS",
    slug: "skills",
    list1: [
      { text: "Semantic Tags", title: "Used for meaningful structure" },
      { text: "Forms", title: "Input and submission controls" },
      { text: "Tables", title: "Tabular data layout" },
      { text: "HTML5 APIs", title: "Drag-Drop, Audio, Video etc." }
    ],
    description: [
      "Learned how to structure web content using semantic elements.",
      "Built forms and tables, and explored HTML5 features."
    ],
    list2: ["English", "Hindi"],
    list2top: 0,
    background: "/skills/skills.jpg"
  },
  list: [
    {
      id: 1,
      title: "HTML",
      slug: "html",
      list1: [
        { text: "Semantic Tags", title: "Used for meaningful structure" },
        { text: "Forms", title: "Input and submission controls" },
        { text: "Tables", title: "Tabular data layout" },
        { text: "HTML5 APIs", title: "Drag-Drop, Audio, Video etc." }
      ],
      description: [
        "Learned how to structure web content using semantic elements.",
        "Built forms and tables, and explored HTML5 features."
      ],
      list2: ["English", "Hindi"],
      list2top: 0,
      background: "https://community-cdn-digitalocean-com.global.ssl.fastly.net/vUuUtKqDrY9gAbaD2czK9KrN",
      button: { title: "watch tutorial", text: "▶️ Video", link: "https://www.youtube.com/watch?v=UB1O30fR-EE" }
    },
    {
      id: 2,
      title: "CSS",
      slug: "css",
      list1: [
        { text: "Flexbox", title: "Flexible box layout" },
        { text: "Grid", title: "2D layout system" },
        { text: "Selectors", title: "Class, ID, attribute-based etc." },
        { text: "Animations", title: "CSS transitions and keyframes" }
      ],
      description: [
        "Styled responsive layouts with Flexbox and Grid.",
        "Applied animations and hover effects for interactivity."
      ],
      list2: ["English", "Hindi"],
      list2top: 0,
      background: "https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg",
      button: { title: "watch tutorial", text: "▶️ Video", link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" }
    },
    {
      id: 3,
      title: "JavaScript",
      slug: "javascript",
      list1: [
        { text: "DOM", title: "Document Object Model manipulation" },
        { text: "ES6+", title: "Modern syntax and features" },
        { text: "APIs", title: "Fetch, async/await" },
        { text: "Events", title: "Interaction handling" }
      ],
      description: [
        "Built interactive features with JS and the DOM.",
        "Worked with APIs using fetch and async/await."
      ],
      list2: ["English", "Hindi"],
      list2top: 0,
      background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZq_FDxj8jleGCeDXaWUdeuD1XGtvc2wG0Vg&s",
      button: { title: "watch JS tutorial", text: "▶️ Video", link: "https://www.youtube.com/watch?v=PkZNo7MFNFg" }
    },
    {
      id: 4,
      title: "ReactJS",
      slug: "reactjs",
      list1: [
        { text: "JSX", title: "HTML + JS syntax" },
        { text: "useState", title: "State management" },
        { text: "Props", title: "Reusable components" },
        { text: "useEffect", title: "Side effects and lifecycle" }
      ],
      description: [
        "Built SPAs using components and hooks.",
        "Learned to manage state and props effectively."
      ],
      list2: ["English", "Hindi"],
      list2top: 0,
      background: "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8959327/og_image/optimized/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
      button: { title: "watch React tutorial", text: "▶️ Video", link: "https://www.youtube.com/watch?v=RVFAyFWO4go" }
    },
    {
      id: 5,
      title: "NodeJS",
      slug: "nodejs",
      list1: [
        { text: "File System", title: "Read/write files" },
        { text: "HTTP", title: "Server-side scripting" },
        { text: "NPM", title: "Package management" },
        { text: "Events", title: "Event-driven architecture" }
      ],
      description: [
        "Built backend servers using Node.js.",
        "Used modules, NPM and handled files/events."
      ],
      list2: ["English", "Hindi"],
      list2top: 0,
      background: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      button: { title: "watch Node tutorial", text: "▶️ Video", link: "https://www.youtube.com/watch?v=TlB_eWDSMt4" }
    },
    {
      id: 6,
      title: "ExpressJS",
      slug: "expressjs",
      list1: [
        { text: "Routing", title: "Handle different endpoints" },
        { text: "Middleware", title: "Custom processing logic" },
        { text: "REST APIs", title: "API creation and consumption" },
        { text: "Error Handling", title: "Graceful server crashes" }
      ],
      description: [
        "Built REST APIs with routes, middleware and error handling.",
        "Used Express to structure backend applications."
      ],
      list2: ["English", "Hindi"],
      list2top: 0,
      background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_RY4COV565Nju7b4ZI5tsPkJQT1imxdFXg&s",
      button: { title: "watch Express tutorial", text: "▶️ Video", link: "https://www.youtube.com/watch?v=L72fhGm1tfE" }
    },
    {
      id: 7,
      title: "NextJS",
      slug: "nextjs",
      list1: [
        { text: "Routing", title: "Handle different endpoints" },
        { text: "Middleware", title: "Custom processing logic" },
        { text: "REST APIs", title: "API creation and consumption" },
        { text: "Error Handling", title: "Graceful server crashes" }
      ],
      description: [
        "Built REST APIs with routes, middleware and error handling.",
        "Used Next.js to structure backend applications."
      ],
      list2: ["English", "Hindi"],
      list2top: 0,
      background: "https://cdn.sanity.io/images/vftxng62/production/1262ed785d4f6cc55e479961a6d009543b1adf04-1000x582.png",
      button: { title: "watch NextJS tutorial", text: "▶️ Video", link: "https://www.youtube.com/watch?v=L72fhGm1tfE" }
    },
    {
      id: 8,
      title: "TailwindCSS",
      slug: "tailwindcss",
      list1: [
        { text: "Utility-first", title: "Write styles directly in class names" },
        { text: "Responsive Design", title: "Mobile-first approach" },
        { text: "Custom Themes", title: "Easily configure colors and fonts" },
        { text: "Plugins", title: "Extend functionality with plugins" }
      ],
      description: [
        "Styled UI components efficiently using utility classes.",
        "Built responsive layouts and customized themes."
      ],
      list2: ["English", "Hindi"],
      list2top: 0,
      background: "https://blog.nashtechglobal.com/wp-content/uploads/2025/08/O-que-e-Tailwind-CSS-e-por-que-ele-virou-tendencia-no-front-end_-Programadores-Depre-Programacao-e-Tecnologia.jpeg",
      button: { title: "watch Tailwind tutorial", text: "▶️ Video", link: "https://www.youtube.com/watch?v=dFgzHOX84xQ" }
    }
  ]
};




export const myInfo ={
  Recruiters:{
    id:0,
    profile: "Recruiters",
    title: "Gagan Yadav",
    list1: [
      { text: "BCA", title: "started in 2024" },
      { text: "M/A 20+", title: "my age" },
      { text: "2023", title: "started coding" },
      { text: "4 languages", title: "human languages" }
    ],
    description: [
      "Focused and dedicated web developer skilled in React and Node.js.",
      "Looking forward to contributing to meaningful projects."
    ],
    list2: ["Hindi", "English", "Maithili", "Bhojpuri"],
    list2top: 1,
    background: "bg-img.png",
    button: {
      title: "download resume",
      text: "▶️ Resume",
      link: "/data/gagan's cv.pdf"
    },
    button2: {
      title: "double click to copy email",
      text: "📧",
      link: "",
      email: "7549gaganyadav@gmail.com"
    }
  },
  Clients:{
    id:1,
    profile: "Clients",
    title: "Gagan Yadav",
    list1: [
      { text: "BCA", title: "Academic foundation" },
      { text: "M/A 20+", title: "my age" },
      { text: "2023", title: "started coding professionally" },
      { text: "4 languages", title: "languages I can communicate in" }
    ],
    description: [
      "I build responsive, efficient, and scalable websites.",
      "Client satisfaction and on-time delivery are my priorities."
    ],
    list2: ["Hindi", "English", "Maithili", "Bhojpuri"],
    list2top: 1,
    background: "bg-img.png",
    button: {
      title: "see my resume",
      text: "▶️ Resume",
      link: "/data/gagan's cv.pdf"
    },
    button2: {
      title: "click to email me",
      text: "📧",
      link: "",
      email: "7549gaganyadav@gmail.com"
    }
  },
  Friends:{
  id:2,
  profile: "Friends",
  title: "Oye Chomu! 🤟",
  list1: [
    { text: "BCA", title: "2024 se timepass padhai" },
    { text: "M/A 20+", title: "abhi bhi jawaan hu, tension mat le" },
    { text: "2023", title: "tab se coding-shoding shuru" },
    { text: "4 languages", title: "gali dene ko full stock" }
  ],
  description: [
    "Coder toh hu hi, par asli talent hai biryani khana. 🍗",
    "Portfolio dekh ke kya karega? Chal call maar, gossip karein."
  ],
  list2: ["Hindi", "English", "Maithili", "Bhojpuri"],
  list2top: 1,
  background: "bg-img.png",
  button: {
    title: "resume dekhne ka nahi re baba",
    text: "📞 Call Kar Na BC",
    link: "tel:+91XXXXXXXXXX" // yaha apna number daal
  },
  button2: {
    title: "meme bhejne ka mood ho toh double click",
    text: "😂",
    link: "",
    email: "7549gaganyadav@gmail.com"
  }
},
 Developer:{
    id:3,
    profile: "Developer",
    title: "",
    list1: [
      { text: "BCA", title: "studying computer apps since 2024" },
      { text: "M/A 20+", title: "20 years old dev" },
      { text: "2023", title: "started my coding journey" },
      { text: "4 languages", title: "I can speak and understand these" }
    ],
    description: [
      "React, Node.js & full-stack stuff.",
      "Let’s collaborate on fun and open-source projects!"
    ],
    list2: ["Hindi", "English", "Maithili", "Bhojpuri"],
    list2top: 1,
    background: "bg-img.png",
    button: {
      title: "resume preview",
      text: "GitHub ↗️",
      link: "https://github.com/Gaganyadav75"
    },
    button2: {
      title: "click to copy email",
      text: "📧",
      link: "",
      email: "7549gaganyadav@gmail.com"
    }
  }
}

export const projectsData = {
  hero: {
    id: 0,
    title: "Projects",
    slug:"projects",
    list1: [
      { text: "Semantic Tags", title: "Used for meaningful structure" },
      { text: "Forms", title: "Input and submission controls" },
      { text: "Tables", title: "Tabular data layout" },
      { text: "HTML5 APIs", title: "Drag-Drop, Audio, Video etc." }
    ],
    description: [
      "Learned how to structure web content using semantic elements.",
      "Built forms and tables, and explored HTML5 features."
    ],
    list2: ["English", "Hindi"],
    list2top: 0,
    background: "https://community-cdn-digitalocean-com.global.ssl.fastly.net/vUuUtKqDrY9gAbaD2czK9KrN"
  },
  list:[
{
  id: 1,
  title: "Notespace Prime",
  slug: "notespace-prime",
  list1: [
    { text: "Admin Panel", title: "Add and manage notes" },
    { text: "Subject Metadata", title: "Organized by subjects and semesters" },
    { text: "User Access", title: "Students can view all available notes" },
  ],
  description: [
    "A full-stack notes management platform where admins can upload and manage notes for different subjects.",
    "Users can browse and read notes easily. Currently features BCA Semester 3 CCSU notes.",
  ],
  list2: ["ReactJs", "Supabase"],
  list2top: 0,
  background: "/projects/notespace-prime.png",
  button: { 
    title: "Source Code", 
    text: "🧠 GitHub", 
    link: "https://github.com/Gaganyadav75/notespace-prime" 
  },
  button2: { 
    title: "Visit Site", 
    text: "🚀 Live Demo", 
    link: "https://notespace-prime.vercel.app/", 
    email: "" 
  },
},
{
  id: 2,
  title: "APS Tax India",
  slug: "apstaxindia",
  list1: [
    { text: "Service Pages", title: "Showcase firm offerings" },
    { text: "About Section", title: "Highlights company background" },
    { text: "Responsive Design", title: "Optimized for all devices" },
  ],
  description: [
    "A professional accounting firm website built to represent APS Tax India’s services and expertise.",
    "Includes multiple pages for services, about, and contact to clearly showcase the firm's work field.",
  ],
  list2: ["NextJs", "Typescript", "Tailwind"],
  list2top: 0,
  background: "/projects/apstaxindia.png",
  button: { 
    title: "Visit Site", 
    text: "🚀 Live Demo", 
    link: "https://apstaxindia.com/", 
  }
},

  {
    id: 3,
    title: "Messaging App",
    slug: "messaging-app",
    list1: [
      { text: "Socket.io", title: "Real-time communication" },
      { text: "Node.js", title: "Backend runtime" },
      { text: "React.js", title: "Frontend framework" },
    ],
    description: [
      "Real-time chat application using socket.io.",
      "Utilizing Node.js for backend and React.js for frontend.",
    ],
    list2: ["Real-time", "WebSockets", "Full Stack"],
    list2top: 1,
    background: "/projects/message.png",
    button: { title: "view on github", text: "💻 GitHub", link: "https://github.com/Gaganyadav75/message_frontend" },
    button2: { title: "Live demo link", text: "🚀 Demo", link: "https://codegalaxy-message.vercel.app/", email: "" },
  },
  {
    id: 4,
    title: "Quiz App",
    slug: "quiz-app",
    list1: [
      { text: "Category Selector", title: "Choose quiz topics" },
      { text: "Boolean/Options", title: "Different quiz types" },
      { text: "Scoring System", title: "Dynamic evaluation" },
    ],
    description: [
      "Interactive quiz platform with dynamic question generation and scoring.",
      "Allows selection of question category and quiz type.",
    ],
    list2: ["Trivia", "Quiz", "UI/UX"],
    list2top: 0,
    background: "/projects/quiz.png",
    button: { title: "source code", text: "🧠 GitHub", link: "https://github.com/Gaganyadav75/jsprojects/tree/main/quizapp" },
    button2: { title: "View Quiz App", text: "🚀 Demo", link: "https://gaganyadav75.github.io/jsprojects/quizapp/", email: "" },
  },
  {
    id: 5,
    title: "Weather App",
    slug: "weather-app",
    list1: [
      { text: "API", title: "Live weather data" },
      { text: "Search by Location", title: "User input based" },
      { text: "Fetch & Display", title: "Real-time data" },
    ],
    description: [
      "A web application displaying real-time weather data using API integration.",
      "Allows user to enter location and fetches data accordingly.",
    ],
    list2: ["Weather", "API", "React"],
    list2top: 0,
    background: "/projects/weather.png",
    button: { title: "view source", text: "🌦 GitHub", link: "https://github.com/Gaganyadav75/weatherapp" },
    button2: { title: "Try it live", text: "🚀 Demo", link: "https://codegalaxy-weatherapp.vercel.app/", email: "" },
  },
  {
    id: 6,
    title: "Landing Pages",
    slug: "landing-pages",
    list1: [
      { text: "Responsive", title: "Mobile-first design" },
      { text: "Animations", title: "Interactive UI" },
      { text: "Multiple Layouts", title: "For different purposes" },
    ],
    description: ["Designed and developed multiple landing pages for various purposes."],
    list2: ["Portfolio", "Product", "Marketing"],
    list2top: 0,
    background: "/projects/landingpage1.png",
    button: { title: "see landing templates", text: "🖼 GitHub", link: "https://github.com/Gaganyadav75/jsprojects/tree/main/travelling" },
    button2: { title: "Demo portfolio", text: "🚀 Live", link: "https://gaganyadav75.github.io/jsprojects/travelling", email: "" },
  },
  {
    id: 7,
    title: "Signature App",
    slug: "signature-app",
    list1: [
      { text: "Draw or Type", title: "Create digital signatures" },
      { text: "Customization", title: "Size, style, color" },
      { text: "Save/Download", title: "Persistent options" },
    ],
    description: ["Web-based tool for creating digital signatures with customizable options."],
    list2: ["Canvas", "Custom Tools", "Signature"],
    list2top: 0,
    background: "/projects/signature.png",
    button: { title: "GitHub code", text: "✍️ GitHub", link: "https://github.com/Gaganyadav75/jsprojects/tree/main/signature" },
    button2: { title: "Try signature tool", text: "🚀 Demo", link: "https://gaganyadav75.github.io/jsprojects/signature/", email: "" },
  },
  {
    id: 8,
    title: "Notes App",
    slug: "notes-app",
    list1: [
      { text: "Data persist", title: "uses localstorage" },
      { text: "CRUD Notes", title: "Add/Edit/Delete" },
    ],
    description: [
      "Task management app with data persistence.",
      "Simple note-taking app with CRUD functionality.",
    ],
    background: "/projects/notes.png",
    button: { title: "view on GitHub", text: "📝 GitHub", link: "https://github.com/Gaganyadav75/jsprojects/tree/main/notesapp" },
    button2: { title: "Live demo", text: "🚀 Demo", link: "https://gaganyadav75.github.io/jsprojects/notesapp/", email: "" },
  },
  {
    id: 9,
    title: "Calculator",
    slug: "calculator",
    list1: [
      { text: "JS Logic", title: "Arithmetic operations" },
      { text: "Basic UI", title: "Clean calculator layout" },
      { text: "Error Handling", title: "Edge cases covered" },
    ],
    description: ["Basic calculator with arithmetic operations implemented using JavaScript."],
    list2: ["JavaScript", "Math", "Calculator"],
    list2top: 0,
    background: "/projects/calculator.png",
    button: { title: "source code", text: "➗ GitHub", link: "https://github.com/Gaganyadav75/jsprojects/blob/main/calculator/index.html" },
    button2: { title: "Run calculator", text: "🚀 Demo", link: "https://gaganyadav75.github.io/jsprojects/calculator/", email: "" },
  },
]

}


export const contactData = {
  Recruiters: { 
    id: 1,
    title: "GET IN TOUCH",
    list1: [
      { text: "+91 7549878755", title: "Phone Number" },
      { text: "7549gaganyadav@gmail.com", title: "Email" }
    ],
    description: [
      "",
      "I am a FrontEnd Web-Developer from Noida-India.",
      "I am a Fresher Searching for like-minded people.",
      ""
    ],
    list2: ["LinkedIn", "GitHub", "Instagram", "WhatsApp"],
    list2top: 1,
    background: "bg-img.png",
    button: {
      title: "Download Resume",
      text: "🔻Visit",
      link: "https://www.youtube.com/watch?v=L72fhGm1tfE"
    },
    button2: {
      title: "Double click to copy email",
      text: "📧",
      link: "",
      email: "7549gaganyadav@gmail.com"
    }
  },

  Clients: {
    id: 2,
    title: "LET'S CONNECT",
    list1: [
      { text: "+91 9876543210", title: "Phone Number" },
      { text: "clients.gagan@gmail.com", title: "Email" }
    ],
    description: [
      "I build responsive, efficient, and scalable websites.",
      "Client satisfaction and on-time delivery are my priorities."
    ],
    list2: ["LinkedIn", "GitHub", "WhatsApp"],
    list2top: 1,
    background: "bg-img.png",
    button: {
      title: "See My Resume",
      text: "▶️ Resume",
      link: "/data/gagan's cv.pdf"
    },
    button2: {
      title: "Click to email me",
      text: "📧",
      link: "",
      email: "clients.gagan@gmail.com"
    }
  },

  Friends: {
    id: 3,
    title: "HEY BUDDY! 🤟",
    list1: [
      { text: "+91 7549878755", title: "Phone Number" },
      { text: "7549gaganyadav@gmail.com", title: "Email" }
    ],
    description: [
      "Coder by profession, biryani lover by passion. 🍗",
      "Portfolio dekh ke kya karega? Chal call maar, gossip karein."
    ],
    list2: ["Instagram", "WhatsApp", "Facebook"],
    list2top: 1,
    background: "bg-img.png",
    button: {
      title: "Call Me",
      text: "📞 Call Kar Na BC",
      link: "tel:+917549878755"
    },
    button2: {
      title: "Send me a meme",
      text: "😂",
      link: "",
      email: "friends.gagan@gmail.com"
    }
  },

  Developer: {
    id: 4,
    title: "COLLAB WITH ME",
    list1: [
      { text: "+91 7549878755", title: "Phone Number" },
      { text: "7549gaganyadav@gmail.com", title: "Email" }
    ],
    description: [
      "React, Node.js & full-stack stuff.",
      "Let’s collaborate on fun and open-source projects!"
    ],
    list2: ["GitHub", "LinkedIn", "Twitter"],
    list2top: 1,
    background: "bg-img.png",
    button: {
      title: "GitHub Portfolio",
      text: "GitHub ↗️",
      link: "https://github.com/Gaganyadav75"
    },
    button2: {
      title: "Click to copy email",
      text: "📧",
      link: "",
      email: "7549gaganyadav@gmail.com"
    }
  }
};


export const MainData:MainDataType = {
  myInfo,
  skills:techInfo,
  projects:projectsData,
  contacts:contactData
}
  