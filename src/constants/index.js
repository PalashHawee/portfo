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
  face,
  jobit,
  tripguide,
  python,
  bizsolve,
  diligence,
  threejs,
  agrovez,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "Python Developer",
    icon: python,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Bizsolve",
    icon: bizsolve,
    iconBg: "#383E56",
    date: "November 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Redux, WordPress, Node.js, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to deliver scalable and high-quality products.",
      "Implementing responsive design principles and ensuring seamless cross-browser compatibility for web applications.",
      "Participating in code reviews to maintain code quality and providing constructive feedback to enhance development practices.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
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
    name: "Agrovez",
    description:
      "Agrovez is a dynamic e-commerce platform developed with WordPress, designed to offer a diverse selection of agricultural-based and organic fresh foods. It fosters direct collaboration with local farmers to provide high-quality, farm-to-table produce. The platform includes essential features such as intuitive search functionality, secure login/signup options, and real-time order tracking to enhance the user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "woocommerce",
        color: "pink-text-gradient",
      },
    ],
    image: agrovez,
    source_code_link: "https://github.com/PalashHawee",
    weblink: "https://agrovez.com/",
  },
  {
    name: "Diligence Universal Ltd",
    description:
      " Developed a dynamic and responsive portfolio for Diligence Universal Ltd using React.js, Tailwind CSS, and Framer Motion. The project highlights my skills in creating modern, visually appealing web applications with smooth animations and intuitive design, offering an exceptional user experience for the company’s clients and visitors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: diligence,
    source_code_link: "https://github.com/PalashHawee/digiltd",
    weblink: "https://diligenceuniversal.com/",
  },
  {
    name: "Face Recognition System",
    description:
      "The purpose of the attendance monitoring system using face recognition is to ease the attendance process which consumes lot of time and efforts; it is a convenient and easy way for students and teacher. The system will capture the images of the students and using face recognition algorithm mark the attendance in the sheet. This way the class-teacher will get their attendance marked without actually spending time in traditional attendance marking.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "datascience",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    source_code_link:
      "https://github.com/PalashHawee/Face-Recognition-System?tab=readme-ov-file",
    weblink: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
