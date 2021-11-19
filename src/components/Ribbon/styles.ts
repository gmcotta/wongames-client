import styled, { DefaultTheme, css } from 'styled-components'

import { RibbonColors, RibbonProps } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
    &::after {
      color: ${theme.colors[color]};
      filter: brightness(0.44);
    }
  `,
  normal: (theme: DefaultTheme) => css`
    right: -2rem;
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
    padding: 0.6rem 4rem;
    &::after {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    right: -1.5rem;
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: 0.4rem 2.8rem;
    &::after {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!size && wrapperModifiers[size](theme)}
    position: absolute;
    top: ${theme.spacings.xsmall};
    z-index: ${theme.layers.base};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
  `}

  &::after {
    content: '';
    position: absolute;
    right: 0;
    border-style: solid;
    border-left-width: 0rem;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-bottom-width: 1rem;
  }
`
