import { User } from '@prisma/client'

import { prisma } from '../prisma/client'
import { CreateUserInput } from '../inputs/user.input'

export class UserRepo {
    async create(data: CreateUserInput): Promise<User> {
        return prisma.user.create({ data })
    }

    async findByEmail(email: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { email } })
    }
}
