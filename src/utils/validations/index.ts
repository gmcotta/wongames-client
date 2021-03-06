import joi from 'joi'

import { SignInValues } from 'components/SignInForm'
import { ForgotPasswordValues } from 'components/ForgotPasswordForm'
import { SignUpValues } from 'components/SignUpForm'
import { ResetPasswordValues } from 'components/ResetPasswordForm'

const fieldValidations = {
  username: joi.string().min(5).required(),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  password: joi.string().required(),
  confirmPassword: joi.string().valid(joi.ref('password')).required().messages({
    'any.only': 'confirm password does not match with password'
  })
}
export type FieldErrors = {
  [key: string]: string
}
function getFieldErrors(objError: joi.ValidationResult) {
  const errors: FieldErrors = {}
  if (objError.error) {
    objError.error.details.forEach((error) => {
      errors[error.path.join('.')] = error.message
    })
  }
  return errors
}

export function signInValidate(values: SignInValues) {
  const { email, password } = fieldValidations
  const schema = joi.object({ email, password })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function signUpValidate(values: SignUpValues) {
  const schema = joi.object(fieldValidations)
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function forgotPasswordValidate(values: ForgotPasswordValues) {
  const { email } = fieldValidations
  const schema = joi.object({ email })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function resetPasswordValidate(values: ResetPasswordValues) {
  const { password, confirmPassword } = fieldValidations
  const schema = joi.object({ password, confirmPassword })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
