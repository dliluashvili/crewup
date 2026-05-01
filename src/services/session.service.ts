import { randomBytes } from 'crypto'
import { createClient } from 'redis'

import { SessionUser } from '../types'

type RedisClient = ReturnType<typeof createClient>

export class SessionService {
    constructor(private redisClient: RedisClient) {}

    generate(): string {
        return randomBytes(32).toString('hex')
    }

    async getBySessionId(sessionId: string): Promise<SessionUser | null> {
        const data = await this.redisClient.get(sessionId)

        return data ? (JSON.parse(data.toString()) as SessionUser) : null
    }

    async save(user: SessionUser, sessionId: string): Promise<void> {
        await Promise.all([
            this.redisClient.set(sessionId, JSON.stringify(user)),
            this.redisClient.set(user.id, sessionId),
        ])
    }

    async generateAndSave(user: SessionUser): Promise<string> {
        const sessionId = this.generate()

        await this.save(user, sessionId)

        return sessionId
    }
}
