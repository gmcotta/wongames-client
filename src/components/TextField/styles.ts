import styled, { css, DefaultTheme } from 'styled-components'
import { IconPositionOptions } from '.'

type WrapperProps = {
  disabled?: boolean
  hasError?: boolean
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
  `,
  hasError: (theme: DefaultTheme) => css`
    ${Label},
    ${InputWrapper},
    ${Input} {
      color: ${theme.colors.red};
      svg {
        color: ${theme.colors.red};
      }
      &::placeholder {
        color: ${theme.colors.red};
      }
    }

    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, hasError }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${hasError && wrapperModifiers.hasError(theme)}
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
    height: 5rem;
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

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;
    }
  `}
`

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
