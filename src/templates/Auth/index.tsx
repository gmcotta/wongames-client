import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
      <Image
        src="/img/auth-img.png"
        alt="Won Games Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/" passHref>
          <a>
            <Logo id="banner" />
          </a>
        </Link>
        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
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
        <Link href="/" passHref>
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineLeft lineColor="secondary">
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.ContentSection>
  </S.Wrapper>
)

export default Auth
