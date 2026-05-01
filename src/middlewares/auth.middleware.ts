import Elysia from 'elysia'

import { ForbiddenException } from '../exceptions'
import { type SessionService } from '../services'

export const authMiddleware = (sessionService: SessionService) => {
    return new Elysia().derive({ as: 'scoped' }, async ({ headers }) => {
        const authorization = headers['authorization']

        if (!authorization?.startsWith('Bearer ')) {
            throw new ForbiddenException()
        }

        const sessionId = authorization.slice(7)

        const user = await sessionService.getBySessionId(sessionId)

        if (!user) {
            throw new ForbiddenException()
        }

        return { authed: true }
    })
}
