import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Loading...'
}))`
  width: 4rem;
`

export const FormSuccess = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-align: center;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    line-height: 1.6rem;
    svg {
      color: ${theme.colors.secondary};
      width: 2.4rem;
      margin-right: 0.8rem;
    }
  `}
`

export const FormErrorMessage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};
    line-height: 1.6rem;
    svg {
      width: 1.6rem;
      margin-right: 0.8rem;
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;
    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};
      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`
