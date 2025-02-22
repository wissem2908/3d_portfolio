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
    
    jobit,
    tripguide,
    threejs,
    weather_app,
    mapApp,
    ads,
    map,
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
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Responsive Design",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
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
      name: "Weather app",
      description:
        "Web-based platform that provides users with real-time weather updates, forecasts, and current conditions, ensuring you stay informed and prepared for any weather situation.",
      tags: [
        {
          name: "api",
          color: "blue-text-gradient",
        },
        {
          name: "jquery",
          color: "green-text-gradient",
        },
      
      ],
      image: weather_app,
      source_code_link: "https://github.com/wissem2908/weather-app",
    },
    {
      name: "Map App",
      description:
        "Web-based platform that provides detailed information about each country, including currency and the most populous cities, offering an insightful and educational resource for geographic and demographic data.",
      tags: [
        {
          name: "jquery",
          color: "blue-text-gradient",
        },
        {
          name: "leaflet",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: mapApp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Business ads website",
      description:
        "Web-based platform that allows users to post, browse, and manage advertisements, providing a seamless and efficient solution for buying, selling, and promoting goods and services.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "jquery",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: ads,
      source_code_link: "https://github.com/",
    },
    {
      name: "Map",
      description:
        "Simple map app using geojson files",
      tags: [
        {
          name: "jquery",
          color: "blue-text-gradient",
        },
        {
          name: "leaflet",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: map,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };