import { prisma } from '../prisma/client'
import { ProfessionalLink } from '@prisma/client'

export class ProfessionalLinkRepo {
    async findById(id: string): Promise<ProfessionalLink | null> {
        return prisma.professionalLink.findUnique({ where: { id } })
    }
}
