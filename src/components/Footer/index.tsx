import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column aria-label="contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          CONTACT
        </Heading>
        <a href="maito:sac@wongames.com">sac@wongames.com</a>
        <span>+11 94038-0290</span>
      </S.Column>
      <S.Column aria-labelledby="social-media">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          FOLLOW US
        </Heading>
        <nav id="social-media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column aria-labelledby="footer-resources">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          LINKS
        </Heading>
        <nav id="footer-resources">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
        </nav>
      </S.Column>
      <S.Column aria-label="localization">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          LOCALIZATION
        </Heading>
        <span>Rua 7 de Maio</span>
        <span>527 - 89020330</span>
        <span>Rio de Janeiro, Brasil</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2021 © All Rights Reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
