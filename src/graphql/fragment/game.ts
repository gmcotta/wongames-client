import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    id
    name
    slug
    developers {
      name
    }
    cover {
      url
    }
    price
  }
`
export const HighlightFragment = gql`
  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLabel
    buttonLink
    contentAlignment
  }
`
