import { CreateUserLanguagesInput } from '../inputs/user.input'
import { prisma } from '../prisma/client'
import { UserLanguage } from '@prisma/client'

export class UserLanguagesRepo {
    async create(data: CreateUserLanguagesInput): Promise<UserLanguage> {
        return prisma.userLanguage.create({ data })
    }

    async findByUserId(userId: string): Promise<UserLanguage[]> {
        return prisma.userLanguage.findMany({ where: { userId } })
    }
}
