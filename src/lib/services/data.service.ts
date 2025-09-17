import {
  Award,
  Blog,
  Experience,
  Project,
  Skill,
  Testimonial,
  Timeline,
} from "../types";

export const projects: Project[] = [
  {
    title: "Resumind: AI Resume Analyzer",
    description:
      "Resumind is an AI-powered resume analyzer that helps job seekers optimize their resumes for applicant tracking systems (ATS).",
    tech: [
      "React",
      "TypeScript",
      "CSS",
      "React Router V7",
      "Putter",
    ],
    image: "/resumind.png",
    color: "from-purple-500 to-pink-500",
    live: "https://sv-resume-analyzer.netlify.app/",
    github: "https://github.com/shivam-vishvakarma/resume-analyzer",
  },
  {
    title: "Newsy Website",
    description:
      "Newsy is a news website where you can read news from around the world. It is a demo website.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Edge Functions",
      "Netlify",
    ],
    image: "/newsy.png",
    color: "from-purple-500 to-pink-500",
    live: "https://newsy-shivam.netlify.app",
    github: "https://github.com/shivam-vishvakarma/newsy",
  },
  {
    title: "Animated Music School Website",
    description:
      "Animated website for a music school with unique design and interactions. Built with React and Framer Motion.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Netlify"],
    image: "/music-school.png",
    color: "from-purple-500 to-pink-500",
    live: "https://music-website-shivam.netlify.app/",
    github: "https://github.com/shivam-vishvakarma/musicwebsite",
  },
  {
    title: "Service Spot",
    description:
      "Service Spot is a platform where you can find financial tools for your business.",
    tech: ["Bootstrap", "HTML", "CSS", "JavaScript", "Netlify"],
    image: "/service-spot.png",
    color: "from-purple-500 to-pink-500",
    live: "https://servicespot.netlify.app/",
    github: "https://github.com/shivam-vishvakarma/",
  },
  {
    title: "Darkbit X Landing Page",
    description:
      "Landing page for a analytics platform with dark mode and smooth animations with moving elements using GSAP.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP", "Tailwind CSS", "Netlify"],
    image: "/darkbit-x.png",
    color: "from-purple-500 to-pink-500",
    live: "https://darkbit-x.netlify.app/",
    github: "https://github.com/shivam-vishvakarma/darkbit-x-landing-page",
  },
  {
    title: "Dance X Website",
    description:
      "A modern frontend for a dance studio with a clean design and smooth animations.",
    tech: ["NextJS", "TypeScript", "Tailwind CSS", "Framer Motion", "Netlify"],
    image: "/dancex.png",
    color: "from-purple-500 to-pink-500",
    live: "https://dance-x-web-client.netlify.app/",
    github: "https://github.com/shivam-vishvakarma/dance-x",
  },
];

export const skills: Skill[] = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "React Query",
      "Chakra UI",
      "Material-UI",
    ],
    icon: "🎨",
  },
  {
    title: "Backend & API",
    skills: [
      "Node.js",
      "GraphQL",
      "REST",
      "MongoDB",
      "Firebase",
      "Appwrite",
      "NestJS",
      "Express",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Socket.io",
      "Deno",
      "Python",
      "Django",
      "Django REST Framework",
    ],
    icon: "⚡",
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS",
      "Netlify",
      "Vercel",
      "Docker",
      "Kubernetes",
      "Serverless",
      "DigitalOcean",
      "Edge Functions",
      "Google Cloud",
      "Azure",
    ],
    icon: "☁️",
  },
  {
    title: "Android & iOS",
    skills: [
      "React Native",
      "Expo",
      "React Navigation",
      "Redux",
      "Redux Persist",
      "Firebase",
      "Appwrite",
      "Lottie",
      "React Query",
    ],
    icon: "📱",
  },
  {
    title: "3D & Animation",
    skills: ["Three.js", "GSAP", "Framer Motion", "Lottie", "Animatable"],
    icon: "🎮",
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "Hugging Face",
      "Langchain",
      "Ollama",
      "ChatGPT",
      "Deepseek",
      "Llama",
      "Claude",
      "V0",
    ],
    icon: "🤖",
  },
];

export const experiences: Experience[] = [
  {
    company: "Alpine Technologies",
    role: "Frontend Developer",
    period: "June 2024 - May 2025",
    description:
      "Developed and maintained web applications for enterprise clients using Next and TypeScript",
    achievements: [
      "Implemented a new design system with Tailwind CSS",
      "Optimized performance and SEO for high traffic",
      "Integrated with third-party APIs for payment and analytics",
      "Developed 4-5 client projects for clients using React.js, Next.js, TypeScript.",
      "Worked on a hotel booking platform integrated payment method using Razorpay and developed offer management.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST API",
      "Redux",
      "React Query",
      "Chakra UI",
      "Material-UI",
      "Firebase",
      "AWS",
      "Netlify",
      "Vercel",
    ],
  },
  {
    company: "Astrotel",
    role: "Web Developer",
    period: "April 2024 - June 2024",
    description: "Managed a team of developers to build an e-commerce platform",
    achievements: [
      "Increased conversion rate by 30%",
      "Integrated with third-party APIs for payment and shipping",
      "Developed data visualization tools for analytics",
      "Optimized SEO and performance",
    ],
    tech: [
      "React",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Google Cloud",
      "Express",
    ],
  },
];

export const awards: Award[] = [
  //   {
  //     title: "Best Web Application",
  //     organization: "WebTech Awards 2023",
  //     date: "2023",
  //     description:
  //       "Recognized for innovative use of WebGL and performance optimization",
  //   },
  //   {
  //     title: "Developer of the Year",
  //     organization: "TechCommunity",
  //     date: "2022",
  //     description:
  //       "Awarded for contributions to open-source projects and community leadership",
  //   },
];

export const testimonials: Testimonial[] = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "Product Manager at TechCorp",
  //     content:
  //       "John's ability to transform complex requirements into elegant solutions is remarkable. His attention to detail and user experience is outstanding.",
  //     image: "",
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "CTO at StartupX",
  //     content:
  //       "Working with John was a game-changer for our project. His technical expertise and problem-solving skills are exceptional.",
  //     image: "",
  //   },
  //   {
  //     name: "Emily Taylor",
  //     role: "Design Director",
  //     content:
  //       "John has a rare combination of technical skill and design sensibility. He consistently delivers beautiful and functional solutions.",
  //     image: "",
  //   },
];

export const blogPosts: Blog[] = [
  //   {
  //     title: "Building Scalable React Applications",
  //     date: "Feb 1, 2024",
  //     category: "Development",
  //     preview:
  //       "Learn about architecture patterns and best practices for large-scale React applications.",
  //     readTime: "8 min read",
  //   },
  //   {
  //     title: "The Future of Web Animation",
  //     date: "Jan 15, 2024",
  //     category: "Design",
  //     preview:
  //       "Exploring new possibilities with WebGL, Three.js, and CSS animations.",
  //     readTime: "6 min read",
  //   },
  //   {
  //     title: "Performance Optimization Techniques",
  //     date: "Jan 5, 2024",
  //     category: "Performance",
  //     preview: "Advanced strategies for improving web application performance.",
  //     readTime: "10 min read",
  //   },
];

export const timeLineData: Timeline[] = [
  {
    company: "Alpine Technologies",
    title: "Frontend Developer",
    year: "June 2024 - May 2025",
    description:
      "Developed and maintained web applications for enterprise clients using Next and TypeScript",
  },
  {
    company: "Astrotel",
    title: "Web Developer",
    year: "April 2024 - June 2024",
    description: "Managed a team of developers to build an e-commerce platform",
  },
];
