import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { ReactNode } from 'react'

import * as S from './styles'

export type BaseProps = {
  children: ReactNode
}

const Base = ({ children }: BaseProps) => (
  <section>
    <Container>
      <Menu />
    </Container>
    {children}
    <S.FooterSection>
      <Container>
        <Footer />
      </Container>
    </S.FooterSection>
  </section>
)

export default Base
