import { gql } from '@apollo/client'
import { GameFragment, HighlightFragment } from 'graphql/fragment/game'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming($date: Date!) {
    upcomingGames: games(
      where: { release_date_gt: $date }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }
    sections: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }
  ${GameFragment}
  ${HighlightFragment}
`
