import { gql } from '@apollo/client'

export const QUERY_PROFILE_ME = gql`
  query queryProfileMe {
    me {
      username
      email
    }
  }
`
