import { ReactNode } from 'react'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

export type AuthProps = {
  title: string
  children: ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerSection>
      <S.BannerContent>
        <Logo />
        <div>
          <Heading>All your favorite games in one place</Heading>
          <S.BannerSubtitle>
            <strong>WON</strong> is the best and most complete gaming platform
          </S.BannerSubtitle>
        </div>
        <S.BannerFooter>
          Won Games 2020 © Todos os Direitos Reservados
        </S.BannerFooter>
      </S.BannerContent>
    </S.BannerSection>
    <S.ContentSection>
      <S.ContentWrapper>
        <Logo color="black" size="large" />
        <Heading color="black" lineLeft lineColor="secondary">
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.ContentSection>
  </S.Wrapper>
)

export default Auth
