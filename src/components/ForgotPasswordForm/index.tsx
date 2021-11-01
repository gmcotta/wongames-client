import { useState, FormEvent } from 'react'
import { Email, ErrorOutline } from '@styled-icons/material-outlined'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper, FormErrorMessage } from 'components/Form'
import { FieldErrors, forgotPasswordValidate } from 'utils/validations'

export type ForgotPasswordValues = Pick<UsersPermissionsRegisterInput, 'email'>

const ForgotPasswordForm = () => {
  const [values, setValues] = useState<ForgotPasswordValues>({
    email: ''
  })
  const [fieldError, setFieldError] = useState<FieldErrors>()
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const errors = forgotPasswordValidate(values)
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
          name="email"
          placeholder="Email"
          type="text"
          icon={<Email />}
          errorMessage={fieldError?.email}
          onInputChange={(value) => handleInputChange('email', value)}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Send email</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default ForgotPasswordForm
