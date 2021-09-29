import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Logo from 'components/Logo'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsMenuOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideLabelOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isMenuOpen} isMenuOpen={isMenuOpen}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsMenuOpen(false)}
        />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
