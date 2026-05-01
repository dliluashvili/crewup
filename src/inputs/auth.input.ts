import { SignInDtoType, SignUpDtoType } from '../dtos/auth.dto'

export interface SignUpUseCaseInput extends SignUpDtoType {}

export interface SignInUseCaseInput extends SignInDtoType {}
