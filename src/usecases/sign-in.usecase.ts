import { type UserRepo } from '../repo'
import { type SessionService } from '../services'
import { UnauthorizedException } from '../exceptions'
import { type SignInUseCaseInput } from '../inputs/auth.input'

interface Providers {
    userRepo: UserRepo
    sessionService: SessionService
}

export class SignInUseCase {
    constructor(private readonly providers: Providers) {}

    async execute(input: SignInUseCaseInput) {
        const user = await this.providers.userRepo.findByEmail(input.email)

        if (!user) {
            throw new UnauthorizedException()
        }

        const valid = await Bun.password.verify(input.password, user.password)

        if (!valid) {
            throw new UnauthorizedException()
        }

        delete user['password']
        delete user['createdAt']
        delete user['updatedAt']

        const session =
            await this.providers.sessionService.generateAndSave(user)

        return { session }
    }
}
