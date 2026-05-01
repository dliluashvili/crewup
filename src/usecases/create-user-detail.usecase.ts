import type { ResumeService, SessionService } from '../services'
import type {
    UserSkillsRepo,
    UserLanguagesRepo,
    UserSocialNetworksRepo,
    UserWorkExperiencesRepo,
    UserProfessionalLinksRepo,
} from '../repo'
import { SessionUser } from '../types'

interface Providers {
    resumeService: ResumeService
    userSkillsRepo: UserSkillsRepo
    userLanguagesRepo: UserLanguagesRepo
    userSocialNetworksRepo: UserSocialNetworksRepo
    userWorkExperiencesRepo: UserWorkExperiencesRepo
    userProfessionalLinksRepo: UserProfessionalLinksRepo
}

export class CreateUserDetailUseCase {
    constructor(private readonly providers: Providers) {}

    // Should be file or actual data
    execute({ id: userId }: SessionUser, data: unknown) {
        return this.providers.resumeService.parse({
            filePath: `/Users/dliluash/Documents/Projects/tech-network/crewup/resume.pdf`,
            mocked: true,
        })
    }
}
