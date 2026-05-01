import { Elysia } from 'elysia'
import { userRoutes, authRoutes } from './routes'
import { UserService } from './services/user.service'
import { SessionService } from './services/session.service'
import { SignUpUseCase } from './usecases/sign-up.usecase'
import { UserRepo } from './repo/user.repo'
import { errorHook } from './hooks'
import { ResumeService } from './services/resume.service'
import { CreateUserDetailUseCase } from './usecases/create-user-detail.usecase'
import { UserSkillsRepo } from './repo/user-skills.repo'
import { UserLanguagesRepo } from './repo/user-languages.repo'
import { UserProfessionalLinksRepo } from './repo/user-professional-links.repo'
import { UserSocialNetworksRepo } from './repo/user-social-networks.repo'
import { UserWorkExperiencesRepo } from './repo/user-work-experiences.repo'
import { createClient } from 'redis'
import { SignInUseCase } from './usecases/sign-in.usecase'

const redisClient = await createClient()
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()

const userRepo = new UserRepo()
const userService = new UserService(userRepo)
const sessionService = new SessionService(redisClient)

const resumeService = new ResumeService()
const userSkillsRepo = new UserSkillsRepo()
const userLanguagesRepo = new UserLanguagesRepo()
const userProfessionalLinksRepo = new UserProfessionalLinksRepo()
const userSocialNetworksRepo = new UserSocialNetworksRepo()
const userWorkExperiencesRepo = new UserWorkExperiencesRepo()

const signUpUseCase = new SignUpUseCase({
    userService,
    userRepo,
    sessionService,
})

const signInUseCase = new SignInUseCase({
    userRepo,
    sessionService,
})

const createUserDetailUseCase = new CreateUserDetailUseCase({
    resumeService,
    userSkillsRepo,
    userLanguagesRepo,
    userProfessionalLinksRepo,
    userSocialNetworksRepo,
    userWorkExperiencesRepo,
})

const _userRoutes = userRoutes({ createUserDetailUseCase })
const _authRoutes = authRoutes({ signUpUseCase, signInUseCase })

const app = new Elysia({ prefix: 'api/v1' })
    .onError(errorHook)
    .use(_authRoutes)
    .use(_userRoutes)
    .get('/', () => 'Hello Elysia')
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
