import { UserSkill } from '@prisma/client'

import { prisma } from '../prisma/client'
import { CreateUserSkillsInput } from '../inputs/user.input'

export class UserSkillsRepo {
    async create(data: CreateUserSkillsInput): Promise<UserSkill> {
        return prisma.userSkill.create({ data })
    }

    async findByUserId(userId: string): Promise<UserSkill[]> {
        return prisma.userSkill.findMany({ where: { userId } })
    }
}
