import { ReactNode } from 'react'

import * as S from './styles'

export type DropdownProps = {
  title: ReactNode
  children: ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Dropdown
