import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const ProfileForm = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />
      <TextField
        name="email"
        placeholder="E-mail"
        label="E-mail"
        type="E-Mail"
        initialValue="John.doe@email.com"
        disabled
      />
      <TextField
        name="currentpassword"
        placeholder="Your current password"
        label="Current password"
        type="password"
      />
      <TextField
        name="newpassword"
        placeholder="New password"
        label="New password"
        type="password"
      />
      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default ProfileForm
