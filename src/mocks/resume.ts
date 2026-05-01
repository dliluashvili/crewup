import { ParsedResume } from '../types/resume.type'

export const Resume = {
    name: 'David Liluashvili',
    email: 'david.liluashvili7@gmail.com',
    phone: '+(995) 557565031',
    country: 'Georgia',
    city: 'Tbilisi',
    summary:
        "I am a software developer who enjoys building reliable and scalable systems. I have strong problem-solving skills and experience developing backend services using Golang and Node.js. I focus on writing clean, maintainable, and well-documented code. I enjoy coding and learning new technologies, and I'm comfortable working both in a team and independently to deliver high-quality solutions.",
    role_type: 'Software Engineer',
    skills: [
        { name: 'JavaScript', years: null },
        { name: 'Golang', years: null },
        { name: 'Php', years: null },
        { name: 'Elixir', years: null },
        { name: 'Solidity', years: null },
        { name: 'Nodejs', years: null },
        { name: 'Typescript', years: null },
        { name: 'Expressjs', years: null },
        { name: 'Nestjs', years: null },
        { name: 'Gin', years: null },
        { name: 'Chi', years: null },
        { name: 'gRPC', years: null },
        { name: 'Protocol Buffers', years: null },
        { name: 'Microservices', years: null },
        { name: 'Event-Driven Architecture', years: null },
        { name: 'AWS Web Services', years: null },
        { name: 'CI/CD', years: null },
        { name: 'Redis', years: null },
        { name: 'RabbitMQ', years: null },
        { name: 'Graphql', years: null },
        { name: 'Socket.io', years: null },
        { name: 'WebRTC', years: null },
        { name: 'Laravel', years: null },
        { name: 'Phoenix', years: null },
        { name: 'Docker', years: null },
        { name: 'Kubernetes', years: null },
        { name: 'PostgreSQL', years: null },
        { name: 'MongoDB', years: null },
        { name: 'Mysql', years: null },
        { name: 'DynamoDB', years: null },
    ],
    experiences: [
        {
            company: 'Cargo Shipments Platform',
            role: 'Software Engineer',
            duration: '2022 Sep - 2025 Apr',
            description:
                'Designed and developed the cargo shipments platform from scratch. Implemented shipment lifecycle management including creation, scheduling, tracking, and delivery workflows. Implemented role-based access control (RBAC) to support different employee roles and permissions. Ensured reliability and fault tolerance across services handling transportation operations.',
        },
        {
            company: 'Nexus',
            role: 'Software Engineer',
            duration: '2022 Sep - 2025 Apr',
            description:
                'Designed and implemented microservice architecture to support scalable and resilient applications. Utilized Amazon Web Services (AWS), including AWS State Machine and AWS SAM, to develop and deploy serverless solutions. Created fintech loan services from scratch with the team, building secure, efficient loan processing and payment integration systems.',
        },
        {
            company: 'Exadel',
            role: 'Software Engineer',
            duration: '2022 Jan - Sep',
            description:
                'Developed and implemented software solutions based on client requirements',
        },
        {
            company: 'Pulsar.ai',
            role: 'Software Engineer',
            duration: '2019 - 2021',
            description:
                'AI solutions for business. Developed and implemented software solutions based on client requirements. Modifies code to fix errors.',
        },
        {
            company: 'Inex / Inexphone',
            role: 'Fullstack Developer',
            duration: '2018 - 2019',
            description:
                'VOIP Service. Designed and created management tools for sales managers and operators.',
        },
        {
            company: 'Tesla Toys',
            role: 'Fullstack Developer',
            duration: '2016 - 2018',
            description:
                'School management software system. Test and refine software prior to rollout. Modifies code to fix errors.',
        },
        {
            company: 'Kings Georgia, Lithuania, Poland',
            role: 'Backend Developer',
            duration: '2017 - 2018',
            description:
                'Organizing both online and university-based Olympiads',
        },
        {
            company: 'Digital Design / Mobility',
            role: 'Backend Developer',
            duration: '2015 - 2017',
            description:
                'Developed and implemented software solutions based on client requirements. Checks feasibility of software prototypes.',
        },
    ],
    education: [
        {
            institution: 'Georgian Technical University',
            degree: 'Master of Science in Computer Science',
            year: '2020 - present',
        },
        {
            institution: 'Georgian Technical University',
            degree: 'Bachelor of Science in Computer Science',
            year: '2012 - 2016',
        },
    ],
    languages: [],
    social_network_links: {
        facebook: '',
        instagram: '',
        x: '',
        tiktok: '',
        youtube: '',
        discord: '',
        viber: '',
        whatsapp: '',
        telegram: 'imposter_7',
    },
    professional_links: {
        linkedin: 'https://www.linkedin.com/in/dliluashvili/',
        github: 'https://github.com/dliluashvili',
        leetcode: '',
        stack_overflow: '',
        medium: '',
        codepen: '',
        devto: '',
        behance: '',
        dribbble: '',
        notion: '',
        portfolio_website: '',
        artstation: '',
        other: [],
    },
} as ParsedResume
