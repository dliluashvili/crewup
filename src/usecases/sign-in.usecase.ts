import { UnauthorizedException } from '../exceptions'
import { SignInUseCaseInput } from '../inputs/auth.input'
import { UserRepo } from '../repo/user.repo'
import { SessionService } from '../services/session.service'

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

        const session =
            await this.providers.sessionService.generateAndSave(user)

        delete user['password']
        delete user['createdAt']
        delete user['updatedAt']

        return { session, user }
    }
}
