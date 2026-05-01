import type { ErrorHandler } from 'elysia'

import { ErrorValidator } from '../types'
import { errorMapping } from '../utils/error.utils'
import {
    ConflictException,
    ForbiddenException,
    UnauthorizedException,
} from '../exceptions'

export const errorHook: ErrorHandler = async ({ error, code }) => {
    if (code === 'VALIDATION') {
        const proto = Object.getPrototypeOf(error)
        const response = proto.toResponse?.call(error)
        const body = (await response.json()) as ErrorValidator

        const mappedErrors = errorMapping(body.errors)

        return Response.json(
            {
                message: 'Validation failed',
                data: mappedErrors,
            },
            { status: 422 },
        )
    }

    if (
        error instanceof ConflictException ||
        error instanceof UnauthorizedException ||
        error instanceof ForbiddenException
    ) {
        return Response.json(
            {
                message: error.message,
            },
            { status: error.status },
        )
    }

    const message =
        error instanceof Error ? error.message : 'Internal server error'

    return Response.json(
        {
            message,
        },
        { status: 500 },
    )
}
