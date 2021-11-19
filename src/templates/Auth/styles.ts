import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`

export const BannerSection = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `}

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;

    a {
      height: fit-content;
      width: fit-content;
    }
  `}
`

export const BannerSubtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const BannerFooter = styled.footer`
  ${({ theme }) => css`
    align-self: end;
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const ContentSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${media.lessThan('medium')`
      width: 36rem;
    `}
  `}
`
