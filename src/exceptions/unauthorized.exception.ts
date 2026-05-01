export class UnauthorizedException extends Error {
    status = 401

    constructor(public message: string = 'invalid credentials') {
        super(message)
    }
}
