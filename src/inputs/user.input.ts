import {
    User,
    UserLanguage,
    UserProfessionalLink,
    UserSkill,
    UserSocialNetworkLink,
    UserWorkExperience,
} from '@prisma/client'

export interface CreateUserInput extends Omit<
    User,
    'id' | 'createdAt' | 'updatedAt'
> {}

export interface CreateUserSkillsInput extends Omit<UserSkill, 'id'> {}

export interface CreateUserLanguagesInput extends Omit<UserLanguage, 'id'> {}

export interface CreateUserSocialNetworksInput extends Omit<
    UserSocialNetworkLink,
    'id'
> {}

export interface CreateUserProfessionalLinksInput extends Omit<
    UserProfessionalLink,
    'id'
> {}

export interface CreateUserWorkExperiencesInput extends Omit<
    UserWorkExperience,
    'id'
> {}
