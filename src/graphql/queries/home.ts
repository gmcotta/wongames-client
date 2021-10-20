import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragment/Banner'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }
  }
  ${BannerFragment}
`
