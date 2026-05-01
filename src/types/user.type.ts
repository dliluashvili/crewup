import { User } from '@prisma/client'

export interface SessionUser extends Omit<
    User,
    'password' | 'created_at' | 'updated_at'
> {}
