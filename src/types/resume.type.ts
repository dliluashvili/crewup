export interface ParsedResumeSkill {
    name: string
    years: number | null
}

export type ParsedResumeSkills = Array<ParsedResumeSkill>

export interface ParsedResumeExperience {
    company: string
    role: string
    duration: string
    description: string
}

export type ParsedResumeExperiences = Array<ParsedResumeExperience>

export interface ParsedResumeEducation {
    institution: string
    degree: string
    year: string
}

export type ParsedResumeEducations = Array<ParsedResumeEducation>

export interface ParsedResumeSocialLinks {
    facebook: string
    instagram: string
    x: string
    tiktok: string
    youtube: string
    discord: string
    viber: string
    whatsapp: string
    telegram: string
}

export interface ParsedResumeProfessionalLinks {
    linkedin: string
    github: string
    leetcode: string
    stack_overflow: string
    medium: string
    codepen: string
    devto: string
    behance: string
    dribbble: string
    notion: string
    portfolio_website: string
    artstation: string
}

export class ParsedResumeLanguage {
    name: string
    level: string
}

export type ParsedResumeLanguages = Array<ParsedResumeLanguage>

export class ParsedResume {
    name: string
    email: string
    phone: string
    country: string
    city: string
    summary: string
    role_type: string
    skills: ParsedResumeSkills
    experiences: ParsedResumeExperiences
    education: ParsedResumeEducations
    languages: ParsedResumeLanguages
    social_network_links: ParsedResumeSocialLinks
    professional_links: ParsedResumeProfessionalLinks
}
