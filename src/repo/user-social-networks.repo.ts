import { UserSocialNetworkLink } from '@prisma/client'

import { prisma } from '../prisma/client'
import { CreateUserSocialNetworksInput } from '../inputs/user.input'

export class UserSocialNetworksRepo {
    async create(
        data: CreateUserSocialNetworksInput,
    ): Promise<UserSocialNetworkLink> {
        return prisma.userSocialNetworkLink.create({ data })
    }

    async findByUserId(userId: string): Promise<UserSocialNetworkLink[]> {
        return prisma.userSocialNetworkLink.findMany({ where: { userId } })
    }
}
