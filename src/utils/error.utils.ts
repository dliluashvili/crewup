import { ErrorValidatorErrorItems } from '../types'

type MappedError = Record<string, Array<string>>

const errorMessages = {
    string: 'The :key must be a string.',
    min_length: 'The :key must be at least :min characters.',
    max_length: 'The :key must not be greater than :max characters.',
    email: 'The :key must be a valid email address.',
}

export const errorMapping = (errors: ErrorValidatorErrorItems): MappedError => {
    const mappedError: MappedError = {}

    for (const error of errors) {
        let message = ''
        const key = error?.path?.[0].key
        const type = error?.type
        const requirement = error?.requirement

        mappedError[key] = []

        switch (error.type) {
            case 'string':
                message = errorMessages[type].replace(':key', key)
                break
            case 'email':
                message = errorMessages[type].replace(':key', key)
                break
            case 'min_length':
                message = errorMessages[type]
                    .replace(':key', key)
                    .replace(':min', requirement)
                break
            case 'max_length':
                message = errorMessages[type]
                    .replace(':key', key)
                    .replace(':max', requirement)
                break
            default:
                message = `The ${key} is required`
                break
        }

        mappedError[key].push(message)
    }

    return mappedError
}
