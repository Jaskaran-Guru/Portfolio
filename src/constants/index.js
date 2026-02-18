import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,   
} from "../assets/icons";

export const skills = [
    { imageUrl: css, name: "CSS", type: "Frontend" },
    { imageUrl: express, name: "Express", type: "Backend" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
    { imageUrl: html, name: "HTML", type: "Frontend" },
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: mongodb, name: "MongoDB", type: "Database" },
    { imageUrl: mui, name: "Material-UI", type: "Frontend" },
    { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: typescript, name: "TypeScript", type: "Frontend" },

];

export const experiences = [
    {
        title: "React.js Developer",
       
        iconBg: "#accbe1",
       
        points: [
            "Developed and maintained web applications using React.js.",
            "Collaborated with cross-functional teams.",
            "Implemented responsive UI and cross-browser compatibility.",
            "Participated in code reviews and best practices."
        ],
    },
    {
        title: "React Native Developer",
       
        iconBg: "#fbc3bc",
     
        points: [
            "Built scalable mobile applications using React Native.",
            "Worked closely with backend teams.",
            "Improved performance and UI responsiveness.",
            "Followed clean architecture principles."
        ],
    },
    {
        title: "Web Developer",
       
        iconBg: "#b7e4c7",
     
        points: [
            "Developed e-commerce web applications.",
            "Integrated REST APIs.",
            "Optimized application performance.",
            "Maintained code quality standards."
        ],
    },
    {
        title: "Full stack Developer",
      
        iconBg: "#a2d2ff",
       
        points: [
            "Developed full-stack applications using MERN stack.",
            "Designed scalable backend services.",
            "Integrated authentication and database systems.",
            "Deployed applications on cloud platforms."
        ],
    },
];

export const socialLinks = [
    { name: "GitHub", iconUrl: github, link: "https://github.com/Jaskaran-Guru" },
    { name: "LinkedIn", iconUrl: linkedin, link: "https://www.linkedin.com/in/jaskaran-guru" }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: "btn-back-red",
        name: "3D Portfolio",
        description: "Interactive 3D portfolio website showcasing projects and skills with immersive animations.",
        link: "https://github.com/Jaskaran-Guru/3D_portfolio",
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
        iconUrl: threads,
        theme: "btn-back-green",
        name: "Portfolio Website",
        description: "Personal portfolio website showcasing projects, skills, and experience.",
        link: "https://github.com/Jaskaran-Guru/Portfolio",
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