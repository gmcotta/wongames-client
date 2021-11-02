import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { useMutation } from '@apollo/client'
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

import Button from 'components/Button'
import TextField from 'components/TextField'
import {
  FormErrorMessage,
  FormLink,
  FormLoading,
  FormWrapper
} from 'components/Form'
import { FieldErrors, signUpValidate } from 'utils/validations'

export type SignUpValues = UsersPermissionsRegisterInput

const SignUpForm = () => {
  const [values, setValues] = useState<SignUpValues>({
    username: '',
    email: '',
    password: ''
  })
  const [fieldError, setFieldError] = useState<FieldErrors>()
  const [formError, setFormError] = useState('')
  const { push } = useRouter()
  const [createUser, { loading, error }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => {
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      )
    },
    onCompleted: async () => {
      if (!error) {
        setFieldError({})
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
    const errors = signUpValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }
    setFieldError({})
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
      {!!formError && (
        <FormErrorMessage>
          <ErrorOutline />
          {formError}
        </FormErrorMessage>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          icon={<AccountCircle />}
          errorMessage={fieldError?.username}
          onInputChange={(value) => handleInputChange('username', value)}
        />
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
        <TextField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          icon={<Lock />}
          errorMessage={fieldError?.confirmPassword}
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
