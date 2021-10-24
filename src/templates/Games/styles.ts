import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as ExploreSidebarStyles from 'components/ExploreSidebar/styles'
import GridStyles from 'components/Grid/index'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 28rem 1fr;
    grid-gap: ${theme.grid.gutter};

    ${GridStyles} {
      margin-top: 0;
    }

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;

      ${ExploreSidebarStyles.Wrapper} {
        align-self: flex-end
      }
    `}
  `}
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GridSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    cursor: pointer;
    width: 17rem;
    align-self: center;
    > svg {
      color: ${theme.colors.primary};
    }
    > p {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
