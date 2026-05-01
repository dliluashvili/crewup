import { Elysia } from 'elysia'

import { type SessionService } from '../services'
import { authMiddleware } from '../middlewares'
import { type CreateUserDetailUseCase } from '../usecases'

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
        .post('/details', ({ body, user }) =>
            createUserDetailUseCase.execute(user, body),
        )
