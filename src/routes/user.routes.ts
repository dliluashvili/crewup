import { Elysia } from 'elysia'
import { authMiddleware } from '../middlewares'
import { SessionService } from '../services/session.service'
import { CreateUserDetailUseCase } from '../usecases/create-user-detail.usecase'

interface UserRouteParams {
    createUserDetailUseCase: CreateUserDetailUseCase
    sessionService: SessionService
}

export const userRoutes = ({
    createUserDetailUseCase,
    sessionService,
}: UserRouteParams) =>
    new Elysia({ prefix: '/users' })
        .use(authMiddleware(sessionService))
        .post('/details', ({ body }) => createUserDetailUseCase.execute(body))
