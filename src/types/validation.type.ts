export interface ErrorValidatorErrorItemPath {
    type: string
    origin: string
    input: Record<string, unknown>
    key: string
    value: string
}

export type ErrorValidatorErrorItemPathes = Array<ErrorValidatorErrorItemPath>

export interface ErrorValidatorErrorItem {
    kind: string
    type: string
    input: string
    expected: string | null
    received: string
    message: string
    requirement: Record<string, unknown>
    path: ErrorValidatorErrorItemPathes
}

export type ErrorValidatorErrorItems = Array<ErrorValidatorErrorItem>

export interface ErrorValidator {
    type: string
    on: string
    property: {
        type: string
        origin: string
        input: Record<string, unknown>
        key: string
        value: string
    }
    message: string
    found: Record<string, unknown>
    errors: ErrorValidatorErrorItems
}
