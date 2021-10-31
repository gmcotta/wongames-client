import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import CartIcon from 'components/CartIcon'
import CartDropdown from 'components/CartDropdown'
import UserDropdown from 'components/UserDropdown'

export type MenuProps = {
  username?: string | null
  loading?: boolean
}

const Menu = ({ username, loading = false }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsMenuOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideLabelOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>
      {!loading && (
        <>
          <S.MenuGroup>
            <S.IconWrapper>
              <SearchIcon aria-label="Search" />
            </S.IconWrapper>
            <S.IconWrapper>
              <MediaMatch greaterThan="medium">
                <CartDropdown />
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <Link href="/cart" passHref>
                  <a>
                    <CartIcon />
                  </a>
                </Link>
              </MediaMatch>
            </S.IconWrapper>

            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link href="/sign-in" passHref>
                  <Button as="a">Sign In</Button>
                </Link>
              ) : (
                <S.Profile>
                  <UserDropdown username={username} />
                </S.Profile>
              )}
            </MediaMatch>
          </S.MenuGroup>
          <S.MenuFull aria-hidden={!isMenuOpen} isMenuOpen={isMenuOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setIsMenuOpen(false)}
            />
            <S.MenuNav>
              <Link href="/" passHref>
                <S.MenuLink>Home</S.MenuLink>
              </Link>
              <Link href="/games" passHref>
                <S.MenuLink>Explore</S.MenuLink>
              </Link>
              {!!username && (
                <>
                  <Link href="/profile/me" passHref>
                    <S.MenuLink>My profile</S.MenuLink>
                  </Link>
                  <Link href="/wishlist" passHref>
                    <S.MenuLink>Wishlist</S.MenuLink>
                  </Link>
                </>
              )}
            </S.MenuNav>
            {!username && (
              <S.RegisterBox>
                <Link href="/sign-in" passHref>
                  <Button as="a" fullWidth size="large">
                    Login now
                  </Button>
                </Link>
                <span>or</span>
                <Link href="/sign-up" passHref>
                  <S.CreateAccount href="#" title="Sign Up">
                    Sign Up
                  </S.CreateAccount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
