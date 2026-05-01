import { Skill } from '@prisma/client'

import { prisma } from '../prisma/client'

export class SkillRepo {
    async findById(id: string): Promise<Skill | null> {
        return prisma.skill.findUnique({ where: { id } })
    }
}
