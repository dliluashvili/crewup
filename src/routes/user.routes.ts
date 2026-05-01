import { Elysia } from 'elysia'
import { CreateUserDetailUseCase } from '../usecases/create-user-detail.usecase'

interface UseCases {
    createUserDetailUseCase: CreateUserDetailUseCase
}

export const userRoutes = (useCases: UseCases) => {
    const { createUserDetailUseCase } = useCases

    return new Elysia({ prefix: '/users' }).post('/details', ({ body }) =>
        createUserDetailUseCase.execute(body),
    )
}
