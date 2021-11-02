import { useState, FormEvent } from 'react'
import { signIn } from 'next-auth/client'
import { Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper, FormErrorMessage } from 'components/Form'
import { FieldErrors, resetPasswordValidate } from 'utils/validations'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const { query } = router
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const errors = resetPasswordValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }
    setFieldError({})
    setFormError('')
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: values.password,
          passwordConfirmation: values.confirmPassword,
          code: query.code
        })
      }
    )
    const data = await response.json()
    setLoading(false)
    if (data.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      console.log(data)
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/'
      })
    }
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
