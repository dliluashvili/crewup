import { ValidationError } from 'elysia'

type MappedError = Record<string, Array<string>>

const errorMessages = {
    string: 'The :key must be a string.',
    min_length: 'The :key must be at least :min characters.',
    max_length: 'The :key must not be greater than :max characters.',
    email: 'The :key must be a valid email address.',
}

export const errorMapping = (errorEntries: ValidationError): MappedError => {
    const mappedError: MappedError = {}

    const keys = Object.keys(errorEntries)

    keys.forEach((key) => {
        const errorItem = errorEntries[key]
        mappedError[key] = []

        for (const pipeItem of errorItem?.pipe) {
            let message = ''
            console.log(pipeItem.type)
            switch (pipeItem.type) {
                case 'string':
                    message = errorMessages[pipeItem.type].replace(':key', key)
                    break
                case 'email':
                    message = errorMessages[pipeItem.type].replace(':key', key)
                    break
                case 'min_length':
                    message = errorMessages[pipeItem.type]
                        .replace(':key', key)
                        .replace(':min', pipeItem.requirement)
                    break
                case 'max_length':
                    message = errorMessages[pipeItem.type]
                        .replace(':key', key)
                        .replace(':max', pipeItem.requirement)
                    break
                default:
                    message = 'invalid value'
                    break
            }

            mappedError[key].push(message)
        }
    })

    return mappedError
}
