import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as EmptyStyles from 'components/Empty/styles'

export const LoaderWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    min-width: 56rem;
    svg {
      height: 10rem;
      width: 10rem;
    }
  `}
`

type WrapperProps = {
  isEmpty: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;

    ${isEmpty &&
    css`
      ${EmptyStyles.Wrapper} {
        padding-bottom: ${theme.spacings.medium};
      }

      ${EmptyStyles.Image} {
        max-width: 20rem;
      }

      ${EmptyStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }

      ${EmptyStyles.Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      padding: ${theme.spacings.small};
    `}
  `}
`

export const Total = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const GamesList = styled.div`
  max-height: 40rem;
  overflow-y: auto;
`
