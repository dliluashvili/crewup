import * as v from 'valibot'

export const SignUpDto = v.object({
    firstname: v.pipe(v.string(), v.minLength(2), v.maxLength(50)),
    lastname: v.pipe(v.string(), v.minLength(2), v.maxLength(50)),
    email: v.pipe(v.string(), v.email()),
    password: v.pipe(v.string(), v.minLength(8), v.maxLength(128)),
})

export type SignUpDtoType = v.InferInput<typeof SignUpDto>

export const SignInDto = v.object({
    email: v.pipe(v.string(), v.email()),
    password: v.pipe(v.string(), v.minLength(8), v.maxLength(128)),
})

export type SignInDtoType = v.InferInput<typeof SignInDto>
