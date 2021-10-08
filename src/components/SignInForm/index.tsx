import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'

const SignInForm = () => (
  <S.Wrapper>
    <form>
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
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <S.SignUpText>
        Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
      </S.SignUpText>
    </form>
  </S.Wrapper>
)

export default SignInForm
