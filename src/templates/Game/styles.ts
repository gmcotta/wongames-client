import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Wrapper = styled.main`
  margin-top: 20rem;
  ${media.greaterThan('medium')`
    margin-top: 36rem;
  `}
`

export type CoverProps = {
  src: string
}
export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 39.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    ${media.greaterThan('medium')`
      height: 70rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`

export const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};

    ${media.greaterThan('medium')`
    margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`
export const GameInfoSection = styled(Section)``

export const GallerySection = styled(Section)`
  display: none;

  ${media.greaterThan('medium')`
  display: block;
  `}
`

export const DescriptionSection = styled(Section)`
  ${({ theme }) => css`
    .description__copyrights {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
      margin-top: ${theme.spacings.medium};
    }
  `}
`
export const GameDetailsSection = styled(Section)``
