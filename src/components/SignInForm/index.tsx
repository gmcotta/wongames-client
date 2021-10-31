import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { Email, Lock } from '@styled-icons/material-outlined'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLink, FormLoading, FormWrapper } from 'components/Form'

import * as S from './styles'

export type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>

const SignInForm = () => {
  const [values, setValues] = useState<SignInValues>({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    const result = await signIn('credentials', {
      redirect: false,
      callbackUrl: '/',
      ...values
    })
    if (result?.url) {
      return push(result?.url)
    }
    setLoading(false)
  }
  const handleInputChange = (field: string, value: string) => {
    setValues((oldValues) => ({ ...oldValues, [field]: value }))
  }
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          onInputChange={(value) => handleInputChange('email', value)}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          onInputChange={(value) => handleInputChange('password', value)}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
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
