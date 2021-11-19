import { ReactNode } from 'react'
import { useSession } from 'next-auth/client'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import * as S from './styles'

export type BaseProps = {
  children: ReactNode
}

const Base = ({ children }: BaseProps) => {
  const [session, loading] = useSession()
  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} loading={loading} />
      </Container>
      <S.Content>{children}</S.Content>
      <S.FooterSection>
        <Container>
          <Footer />
        </Container>
      </S.FooterSection>
    </S.Wrapper>
  )
}

export default Base
