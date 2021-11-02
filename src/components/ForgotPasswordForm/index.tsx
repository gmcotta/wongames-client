import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import {
  CheckCircle,
  Email,
  ErrorOutline
} from '@styled-icons/material-outlined'

import { FieldErrors, forgotPasswordValidate } from 'utils/validations'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

import Button from 'components/Button'
import TextField from 'components/TextField'
import {
  FormLoading,
  FormWrapper,
  FormErrorMessage,
  FormSuccess
} from 'components/Form'

export type ForgotPasswordValues = Pick<UsersPermissionsRegisterInput, 'email'>

const ForgotPasswordForm = () => {
  const { query } = useRouter()
  const [values, setValues] = useState<ForgotPasswordValues>({
    email: (query.email as string) || ''
  })
  const [fieldError, setFieldError] = useState<FieldErrors>()
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(false)
    const errors = forgotPasswordValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }
    setFieldError({})
    setFormError('')
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )
    const data = await response.json()
    setLoading(false)
    if (data.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      setSuccess(true)
    }
  }
  const handleInputChange = (field: string, value: string) => {
    setValues((oldValues) => ({ ...oldValues, [field]: value }))
  }
  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircle />
          Email sent! Please, check your inbox.
        </FormSuccess>
      ) : (
        <>
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
              initialValue={values.email}
            />
            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? <FormLoading /> : <span>Send email</span>}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default ForgotPasswordForm
