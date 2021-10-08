import styled, { css } from 'styled-components'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;
    &:hover {
      color: ${theme.colors.gray};
    }
  `}
`
