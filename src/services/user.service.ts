import { UserRepo } from '../repo'
import { CreateUserInput } from '../inputs/user.input'

export class UserService {
    constructor(private readonly userRepo: UserRepo) {}

    async create(input: CreateUserInput) {
        input.password = await Bun.password.hash(input.password)

        return this.userRepo.create(input)
    }
}
