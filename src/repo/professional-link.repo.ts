import { ProfessionalLink } from '@prisma/client'

import { prisma } from '../prisma/client'

export class ProfessionalLinkRepo {
    async findById(id: string): Promise<ProfessionalLink | null> {
        return prisma.professionalLink.findUnique({ where: { id } })
    }
}
