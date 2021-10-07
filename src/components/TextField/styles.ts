import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
    padding-bottom: calc(${theme.spacings.xxsmall} / 2);
  `}
`

type InputWrapperProps = {
  hasIcon?: boolean
}

const inputWrapperModifiers = {
  hasIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2.4rem;
      color: ${theme.colors.darkGray};
      margin-right: ${theme.spacings.xsmall};
    }
  `
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, hasIcon }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.lightGray};
    ${hasIcon && inputWrapperModifiers.hasIcon(theme)}

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`
