import { UserProfessionalLink } from '@prisma/client'

import { prisma } from '../prisma/client'
import { CreateUserProfessionalLinksInput } from '../inputs/user.input'

export class UserProfessionalLinksRepo {
    async create(
        data: CreateUserProfessionalLinksInput,
    ): Promise<UserProfessionalLink> {
        return prisma.userProfessionalLink.create({ data })
    }

    async findByUserId(userId: string): Promise<UserProfessionalLink[]> {
        return prisma.userProfessionalLink.findMany({ where: { userId } })
    }
}
