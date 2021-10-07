import styled, { css, DefaultTheme } from 'styled-components'
import { IconPositionOptions } from '.'

type WrapperProps = {
  disabled?: boolean
}

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${InputWrapper},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.grayDisabled};
      svg {
        color: ${theme.colors.grayDisabled};
      }
      &::placeholder {
        color: ${theme.colors.grayDisabled};
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: inline-flex;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
    padding-bottom: calc(${theme.spacings.xxsmall} / 2);
  `}
`

type InputWrapperProps = {
  hasIcon?: boolean
  iconPosition?: IconPositionOptions
  disabled?: boolean
}

const inputWrapperModifiers = {
  hasIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2.4rem;
      color: ${theme.colors.darkGray};
    }
  `,
  iconPosition: (theme: DefaultTheme, iconPosition: IconPositionOptions) => css`
    svg {
      ${iconPosition === 'left' &&
      css`
        margin-right: ${theme.spacings.xsmall};
      `}
      ${iconPosition === 'right' &&
      css`
        margin-left: ${theme.spacings.xsmall};
      `}
    }
  `
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, hasIcon, iconPosition }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.lightGray};
    ${hasIcon && inputWrapperModifiers.hasIcon(theme)}
    ${iconPosition && inputWrapperModifiers.iconPosition(theme, iconPosition)}

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
