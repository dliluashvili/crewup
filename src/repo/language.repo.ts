import { Language } from '@prisma/client'

import { prisma } from '../prisma/client'

export class LanguageRepo {
    async findById(id: string): Promise<Language | null> {
        return prisma.language.findUnique({ where: { id } })
    }
}
