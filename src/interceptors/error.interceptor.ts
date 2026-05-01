import type { ErrorHandler, ValidationError } from 'elysia'
import { ConflictException } from '../exceptions/conflict.exception'
import { UnauthorizedException } from '../exceptions/unauthorized.exception'
import { errorMapping } from '../utils/error.utils'

export const errorInterceptor: ErrorHandler = ({ error, code }) => {
    if (code === 'VALIDATION') {
        const errorEntries = (error.validator as any)?.schema?.entries

        const mappedErrors = errorMapping(errorEntries)

        return Response.json(
            {
                message: 'Validation failed',
                details: {
                    ...mappedErrors,
                },
            },
            { status: 422 },
        )
    }

    if (
        error instanceof ConflictException ||
        error instanceof UnauthorizedException
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
