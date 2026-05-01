import { Elysia } from 'elysia'
import { SignUpUseCase } from '../usecases/sign-up.usecase'
import {
    SignInDto,
    SignInDtoType,
    SignUpDto,
    SignUpDtoType,
} from '../dtos/auth.dto'
import { SignInUseCase } from '../usecases/sign-in.usecase'

interface AuthRouteParams {
    signUpUseCase: SignUpUseCase
    signInUseCase: SignInUseCase
}

export const authRoutes = (useCases: AuthRouteParams) => {
    const { signUpUseCase, signInUseCase } = useCases

    return new Elysia({ prefix: '/auth' })
        .post(
            '/sign-up',
            ({ body }) => signUpUseCase.execute(body as SignUpDtoType),
            { body: SignUpDto },
        )
        .post(
            '/sign-in',
            ({ body }) => signInUseCase.execute(body as SignInDtoType),
            { body: SignInDto },
        )
}
