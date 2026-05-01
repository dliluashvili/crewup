import { SocialNetworkLink } from '@prisma/client'

import { prisma } from '../prisma/client'

export class SocialNetworkLinkRepo {
    async findById(id: string): Promise<SocialNetworkLink | null> {
        return prisma.socialNetworkLink.findUnique({ where: { id } })
    }
}
