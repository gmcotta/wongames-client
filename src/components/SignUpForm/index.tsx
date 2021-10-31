import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { useMutation } from '@apollo/client'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLink, FormLoading, FormWrapper } from 'components/Form'

const SignUpForm = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })
  const { push } = useRouter()
  const [createUser, { loading, error }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => console.error(err),
    onCompleted: async () => {
      if (!error) {
        const result = await signIn('credentials', {
          redirect: false,
          callbackUrl: '/',
          email: values.email,
          password: values.password
        })
        if (result?.url) {
          return push(result?.url)
        }
      }
    }
  })
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }
  const handleInputChange = (field: string, value: string) => {
    setValues((oldValues) => ({ ...oldValues, [field]: value }))
  }
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          icon={<AccountCircle />}
          onInputChange={(value) => handleInputChange('username', value)}
        />
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
        <TextField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          icon={<Lock />}
          onInputChange={(value) => handleInputChange('confirmPassword', value)}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>
        <FormLink>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default SignUpForm
