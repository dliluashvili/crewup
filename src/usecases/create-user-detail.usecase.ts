import { UserSkillsRepo } from '../repo/user-skills.repo'
import { UserLanguagesRepo } from '../repo/user-languages.repo'
import { UserProfessionalLinksRepo } from '../repo/user-professional-links.repo'
import { UserSocialNetworksRepo } from '../repo/user-social-networks.repo'
import { UserWorkExperiencesRepo } from '../repo/user-work-experiences.repo'
import { ResumeService } from '../services/resume.service'

interface Providers {
    resumeService: ResumeService
    userSkillsRepo: UserSkillsRepo
    userLanguagesRepo: UserLanguagesRepo
    userProfessionalLinksRepo: UserProfessionalLinksRepo
    userSocialNetworksRepo: UserSocialNetworksRepo
    userWorkExperiencesRepo: UserWorkExperiencesRepo
}

export class CreateUserDetailUseCase {
    constructor(private readonly providers: Providers) {}

    // Should be file or actual data
    execute(data: unknown) {
        console.log(data)
        return this.providers.resumeService.parse({
            filePath: `/Users/dliluash/Documents/Projects/tech-network/crewup/resume.pdf`,
            mocked: true,
        })
    }
}
