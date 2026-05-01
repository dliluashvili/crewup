import { CreateUserInput } from '../inputs/user.input'
import { prisma } from '../prisma/client'
import { User } from '@prisma/client'

export class UserRepo {
    async create(data: CreateUserInput): Promise<User> {
        return prisma.user.create({ data })
    }

    async findByEmail(email: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { email } })
    }
}
