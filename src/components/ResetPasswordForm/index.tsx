import { useState, FormEvent } from 'react'
import { Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper, FormErrorMessage } from 'components/Form'
import { FieldErrors, resetPasswordValidate } from 'utils/validations'

export type ResetPasswordValues = Pick<
  UsersPermissionsRegisterInput,
  'password'
> & { confirmPassword: string }

const ResetPasswordForm = () => {
  const [values, setValues] = useState<ResetPasswordValues>({
    password: '',
    confirmPassword: ''
  })
  const [fieldError, setFieldError] = useState<FieldErrors>()
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const errors = resetPasswordValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }
    setFieldError({})
    setFormError('')
    setLoading(false)
    console.log(values)
  }
  const handleInputChange = (field: string, value: string) => {
    setValues((oldValues) => ({ ...oldValues, [field]: value }))
  }
  return (
    <FormWrapper>
      {!!formError && (
        <FormErrorMessage>
          <ErrorOutline />
          {formError}
        </FormErrorMessage>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          errorMessage={fieldError?.password}
          onInputChange={(value) => handleInputChange('password', value)}
        />
        <TextField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          icon={<Lock />}
          errorMessage={fieldError?.confirmPassword}
          onInputChange={(value) => handleInputChange('confirmPassword', value)}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset password</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default ResetPasswordForm
