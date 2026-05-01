import { ConflictException } from '../exceptions'
import { SignUpUseCaseInput } from '../inputs/auth.input'
import { UserRepo } from '../repo/user.repo'
import { SessionService } from '../services/session.service'
import { UserService } from '../services/user.service'

interface Providers {
    userService: UserService
    userRepo: UserRepo
    sessionService: SessionService
}

export class SignUpUseCase {
    constructor(private readonly providers: Providers) {}

    async execute(input: SignUpUseCaseInput) {
        const exists = await this.providers.userRepo.findByEmail(input.email)

        if (exists) {
            throw new ConflictException('email already exists')
        }

        const user = await this.providers.userService.create(input)

        delete user['password']
        delete user['createdAt']
        delete user['updatedAt']

        const session = this.providers.sessionService.generate()

        await this.providers.sessionService.generateAndSave(user)

        return {
            session,
            user,
        }
    }
}
