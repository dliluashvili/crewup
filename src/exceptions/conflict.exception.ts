export class ConflictException extends Error {
    status = 409

    constructor(public message: string) {
        super(message)
    }
}
