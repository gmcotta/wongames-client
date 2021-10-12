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
        'https://images.gog-statics.com/9717921d3268d2cad294b626756400a3a1f3e46bf153330c5581f91a5c50446a_bg_crop_1366x655.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
      }
    }
  }
}
