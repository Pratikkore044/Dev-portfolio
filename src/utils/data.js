import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "Html", level: 95, color: "bg-blue-500" },
      { name: "Css/Tailwind", level: 90, color: "bg-blue-600" },
      { name: "React", level: 78, color: "bg-gray-800" },
      { name: "JavaScript", level: 72, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 75, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 80, color: "bg-green-500" },
      { name: "Express.js", level: 78, color: "bg-gray-700" },
      { name: "JWT", level: 85, color: "bg-yellow-500" },
      { name: "MongoDB", level: 82, color: "bg-orange-500" },
    ],
  },
];

export const TECH_STACK = [
  "Git",
  "Github",
  "React-Router",
  "Vite",
  "Rest-Api",
  "React-bits",
  "KeyNotes",
  "GenAI-APis",
  "Notion",
  "Cloudinary",
];

export const STATS = [
  { number: "5+", label: "Frontend Projects" },
  { number: "3+", label: "Full Stack Projects" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "To-do List",
    description:
      "Developer-friendly frontend to-do checklist built for a full-stack e-commerce app (HTML + CSS + vanilla JavaScript).",
    image: PROJECT_IMG_1,
    tags: ["Html", "CSS", "Javascript"],
    // githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 2,
    title: "Amazon Homepage",
    description:
      "Build an Amazon-style homepage: responsive header with search+autocomplete, account/cart, hero banner + deal carousels",
    image: PROJECT_IMG_2,
    tags: ["Html", "CSS", "Javascript"],
    featured: true,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Weather app",
    description:
      "Responsive weather app: search & geolocation, current card showing temp + wind (vector/rose/arrow) + humidity gauge.",
    image: PROJECT_IMG_3,
    tags: ["Html", "Css", "Javascript", "Api"],
    featured: true,
    category: "Web App",
  },
  {
    id: 4,
    title: "Profile-Card",
    description:
      "Simple responsive profile card: circular avatar (buttons + gradient), name, role/title, short bio, location/contact icons and a primary CTA",
    image: PROJECT_IMG_4,
    tags: ["Html", "Css", "Javascript"],
    category: "Frontend",
  },

  {
    id: 5,
    title: "AI Image generation",
    description:
      "The project image represents a cutting-edge MERN stack web development interface, seamlessly integrating Gen-AI Delta 2.0",
    image: PROJECT_IMG_5,
    tags: ["ReactJS", "Vite", "Node.js", "MongoDb"],
    featured: false,
    category: "Full-Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2019",
    title: "Started Bachelors",
    company: "BCA",
    description:
      "A Bachelor of Computer Applications (BCA) is an undergraduate degree that focuses on fundamental computing, programming, and software development.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2023",
    title: "Started Masters",
    company: "MCA",
    description:
      "Graduated with honors, specializing in web technologies and software engineering. Led the final year project team.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "First Internship",
    company: "Future Technology",
    description:
      "set up Python/venv, VS Code, Git, run the Django project and understand models/urls/admin.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2025",
    title: "Full Stack Developer (MERN)",
    company: "Geeks For Geeks Ltd.",
    description:
      "Learned to full-time developer role. Built end-to-end applications using MERN stack and led Frontend developer.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2025",
    title: "Freelance & Fresher",
    company: "Independent",
    description:
      "Started freelancing and contributing to open source projects.",
    icon: Award,
    color: "bg-pink-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "Building Web apps",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://twitter.com",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-500/10",
  },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:alex@example.com",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/10",
    },
  ];

  export const CONTACT_INFO = [
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
    },
    {
      icon: Mail,
      label: "Email",
      value: "iampratikkore@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+919742692649",
    },
  ];