import { UserLanguage } from '@prisma/client'

import { prisma } from '../prisma/client'
import { CreateUserLanguagesInput } from '../inputs/user.input'

export class UserLanguagesRepo {
    async create(data: CreateUserLanguagesInput): Promise<UserLanguage> {
        return prisma.userLanguage.create({ data })
    }

    async findByUserId(userId: string): Promise<UserLanguage[]> {
        return prisma.userLanguage.findMany({ where: { userId } })
    }
}
