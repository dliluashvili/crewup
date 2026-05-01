import { UserWorkExperience } from '@prisma/client'

import { prisma } from '../prisma/client'
import { CreateUserWorkExperiencesInput } from '../inputs/user.input'

export class UserWorkExperiencesRepo {
    async create(
        data: CreateUserWorkExperiencesInput,
    ): Promise<UserWorkExperience> {
        return prisma.userWorkExperience.create({ data })
    }

    async findByUserId(userId: string): Promise<UserWorkExperience[]> {
        return prisma.userWorkExperience.findMany({ where: { userId } })
    }
}
