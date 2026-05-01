import { CreateUserProfessionalLinksInput } from '../inputs/user.input'
import { prisma } from '../prisma/client'
import { UserProfessionalLink } from '@prisma/client'

export class UserProfessionalLinksRepo {
    async create(data: CreateUserProfessionalLinksInput): Promise<UserProfessionalLink> {
        return prisma.userProfessionalLink.create({ data })
    }

    async findByUserId(userId: string): Promise<UserProfessionalLink[]> {
        return prisma.userProfessionalLink.findMany({ where: { userId } })
    }
}
