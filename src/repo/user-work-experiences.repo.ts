import { CreateUserWorkExperiencesInput } from '../inputs/user.input'
import { prisma } from '../prisma/client'
import { UserWorkExperience } from '@prisma/client'

export class UserWorkExperiencesRepo {
    async create(data: CreateUserWorkExperiencesInput): Promise<UserWorkExperience> {
        return prisma.userWorkExperience.create({ data })
    }

    async findByUserId(userId: string): Promise<UserWorkExperience[]> {
        return prisma.userWorkExperience.findMany({ where: { userId } })
    }
}
