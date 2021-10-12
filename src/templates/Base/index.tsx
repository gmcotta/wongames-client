import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { ReactNode } from 'react'

import * as S from './styles'

export type BaseProps = {
  children: ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    <S.Content>{children}</S.Content>
    <S.FooterSection>
      <Container>
        <Footer />
      </Container>
    </S.FooterSection>
  </S.Wrapper>
)

export default Base
