import { Elysia } from 'elysia'
import { createClient } from 'redis'
import { authRoutes, userRoutes } from './routes'
import { afterHandleHook, errorHook } from './hooks'
import { UserService, ResumeService, SessionService } from './services'
import {
    SignInUseCase,
    SignUpUseCase,
    CreateUserDetailUseCase,
} from './usecases'
import {
    UserRepo,
    UserSkillsRepo,
    UserLanguagesRepo,
    UserSocialNetworksRepo,
    UserWorkExperiencesRepo,
    UserProfessionalLinksRepo,
} from './repo'

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

const _authRoutes = authRoutes({ signUpUseCase, signInUseCase })
const _userRoutes = userRoutes({ createUserDetailUseCase, sessionService })

const app = new Elysia({ prefix: 'api/v1' })
    .onError(errorHook)
    .onAfterHandle(afterHandleHook)
    .use(_authRoutes)
    .use(_userRoutes)
    .get('/', () => 'Hello Elysia')
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
