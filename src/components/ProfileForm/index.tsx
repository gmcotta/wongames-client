import Link from 'next/link'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

export type ProfileFormProps = {
  username?: string
  email?: string
}

const ProfileForm = ({ username, email }: ProfileFormProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />
      <TextField
        name="email"
        placeholder="E-mail"
        label="E-mail"
        type="E-Mail"
        initialValue={email}
        disabled
      />
      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button as="a" minimal size="medium">
            Forgot password?
          </Button>
        </Link>
        <Button size="large">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </S.Wrapper>
)

export default ProfileForm
