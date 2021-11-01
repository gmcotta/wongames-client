import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

import Button from 'components/Button'
import TextField from 'components/TextField'
import {
  FormLink,
  FormLoading,
  FormWrapper,
  FormErrorMessage
} from 'components/Form'
import { FieldErrors, signInValidate } from 'utils/validations'

import * as S from './styles'

export type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>

const SignInForm = () => {
  const [values, setValues] = useState<SignInValues>({
    email: '',
    password: ''
  })
  const [fieldError, setFieldError] = useState<FieldErrors>()
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { push, query } = router
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    const errors = signInValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }
    setFieldError({})
    const result = await signIn('credentials', {
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`,
      ...values
    })
    if (result?.url) {
      return push(result?.url)
    }
    setLoading(false)
    setFormError('Username or password is invalid')
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
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          errorMessage={fieldError?.password}
          onInputChange={(value) => handleInputChange('password', value)}
        />
        <Link href="/forgot-password" passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>
        <FormLink>
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default SignInForm
