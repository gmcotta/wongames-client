import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: 1rem 3.2rem;
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: 1.2rem 5.2rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  hasIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    cursor: pointer;
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    ${!!size && wrapperModifiers[size](theme)};
    ${fullWidth && wrapperModifiers.fullWidth()};
    ${hasIcon && wrapperModifiers.hasIcon(theme)};
    ${minimal && wrapperModifiers.minimal(theme)};

    &:hover {
      background: ${minimal
        ? 'none'
        : 'linear-gradient(180deg, #e35565 0%, #d958a6 50%)'};
      ${minimal &&
      css`
        filter: brightness(0.9);
      `}
    }
  `}
`
