export class ForbiddenException extends Error {
    status = 403

    constructor(public message: string = 'forbidden') {
        super(message)
    }
}
