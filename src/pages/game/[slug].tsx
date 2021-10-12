import Game, { GameTemplateProps } from 'templates/Game'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'cyberpunk-2077'
        }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      coverSrc:
        'https://images.gog-statics.com/9717921d3268d2cad294b626756400a3a1f3e46bf153330c5581f91a5c50446a_bg_crop_1366x655.jpg'
    }
  }
}
