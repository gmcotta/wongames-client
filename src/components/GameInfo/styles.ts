import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${HeadingStyles.Wrapper} {
      max-width: 72%;

      ${media.greaterThan('medium')`
        max-width: 78%;
      `}
    }

    ${RibbonStyles.Wrapper} {
      right: -1rem;

      &::after {
        border-right-width: 1rem;
      }

      ${media.greaterThan('medium')`
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
        &::after {
          border: none;
        }
      `}
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;

      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`
