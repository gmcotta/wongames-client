import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          CONTATO
        </Heading>
        <a href="maito:sac@wongames.com">sac@wongames.com</a>
        <span>+11 94038-0290</span>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          NOS ACOMPANHE
        </Heading>
        <nav aria-labelledby="Social Media">
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
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          LINKS
        </Heading>
        <nav aria-labelledby="Footer Resources">
          <Link href="/">Loja</Link>
          <Link href="/explore">Explorar</Link>
          <Link href="/search">Buscar</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          LOCALIZAÇÃO
        </Heading>
        <span>Rua 7 de Maio</span>
        <span>527 - 89020330</span>
        <span>Rio de Janeiro, Brasil</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 © Todos os Direitos Reservados</S.Copyright>
  </S.Wrapper>
)

export default Footer
