import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'

const SignUpForm = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Full Name"
        type="text"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        icon={<Lock />}
      />
      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <S.SignInText>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </S.SignInText>
    </form>
  </S.Wrapper>
)

export default SignUpForm
