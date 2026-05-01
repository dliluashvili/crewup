import { CreateUserSkillsInput } from '../inputs/user.input'
import { prisma } from '../prisma/client'
import { UserSkill } from '@prisma/client'

export class UserSkillsRepo {
    async create(data: CreateUserSkillsInput): Promise<UserSkill> {
        return prisma.userSkill.create({ data })
    }

    async findByUserId(userId: string): Promise<UserSkill[]> {
        return prisma.userSkill.findMany({ where: { userId } })
    }
}