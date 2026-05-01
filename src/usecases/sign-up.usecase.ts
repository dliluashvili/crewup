import type { UserRepo } from '../repo'
import { ConflictException } from '../exceptions'
import type { UserService, SessionService } from '../services'
import type { SignUpUseCaseInput } from '../inputs/auth.input'

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

        const session =
            await this.providers.sessionService.generateAndSave(user)

        return { session }
    }
}
