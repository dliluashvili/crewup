import { CreateUserSocialNetworksInput } from '../inputs/user.input'
import { prisma } from '../prisma/client'
import { UserSocialNetworkLink } from '@prisma/client'

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
