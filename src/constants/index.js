import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  softwareEngineer,
  QspiderLogo,
  java,
  jdbc,
  jsp,
  servlet,
  hibernate,
  springMVC,
  springBoot,
  walchandLogo,
  mysql,
  oracle,
  postgresql,
  dataStructures,
  manualTesting,
  vsCode,
  eclipse,
  aws,
  shellScripting
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Full Stack Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title:"Software Engineer",
    icon:softwareEngineer
  },
  
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "ReduxToolkit",
    icon: redux,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },

  
  {
    name : "Java",
    icon : java
  },
  {
    name : "JDBC",
    icon : jdbc
  },
  {
    name : "JSP",
    icon : jsp
  },
  {
    name : "Servlet",
    icon : servlet
  },
  {
    name : "Hibernate",
    icon : hibernate
  },
  {
    name : "Spring MVC",
    icon : springMVC
  },
  {
    name : "Spring Boot",
    icon : springBoot
  },
  {
    name : "MYSQL",
    icon : mysql
  },
  {
    name : "PostgreSQL",
    icon : postgresql
  },
  // {
  //   name : "Oracle"
  // },
  // {
  //   name : "Data Structures and Algorithams"
  // },
  // {
  //   name : "Manual Testing"
  // },
  // {
  //   name : "VS Code"
  // },
  // {
  //   name : "Eclipse"
  // },
  // {
  //   name : "AWS"
  // },
  // {
  //   name : "Shell Scripting"
  // },
  // {
  //   name : "Php"
  // }



];

const experiences = [
  {
    title: "Java Full Stack Developer",
    company_name: "Qspiders Training Institute, Pune",
    icon: QspiderLogo,
    iconBg: "#383E56",
    date: "Feb 2025 - Oct 2025",
    points: [
      "Core Java (Oops, Collections, Exception Handing, Multi-Threading) & Advanced Java (JDBC, JSP, Servlets).",
      "Spring Framework, Hibernate, Oracle SQL.",
      "Web Technologies (HTML, CSS, JavaScript, ReactJS).",
      "Manual Testing (SDLC,STLC,Agile Model, Functional & Non-Functional Testing).",
      "Data Structures & Algorithms, AWS with Linux, Shell Scripting."
    ],
  },
  {
    title: "B.Tech Engineering",
    company_name: "Walchand Institute Of Technology, Solapur",
    icon: walchandLogo,
    iconBg: "#E6DEDD",
    date: "March 2020 - July 2024",
    points: [
      "Among top 5% of batch.",
      "CGPA -: 9.14/10",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "March 2020 - July 2024",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Weather Report System",
    description:
      "Developed a RESTful backend application using Spring Boot and Spring Data JPA Implemented CRUD APIs to manage weather data such as city, date, temperature, and conditions Followed layered architecture (Controller, Service, Repository) for maintainability Integrated PostgreSQL database using Hibernate ORM Tested REST APIs using Postman and managed dependencies using Maven",
    tags: [
      {
        name: "SpringBoot",
        color: "blue-text-gradient",
      },
      {
        name: "SpringDataJPA",
        color: "green-text-gradient",
      },
      {
        name: "Hibernate",
        color: "pink-text-gradient",
      },
        {
        name: "postgresql",
        color: "blue-text-gradient",
      },
       {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Ordering App",
    description:
      "Built a responsive food ordering website with interactive UI components. Implemented dynamic menu filtering and client-side form validation using JavaScript. Used Bootstrap to create a mobile-friendly layout and improve user experience. Optimized page performance for faster loading. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };