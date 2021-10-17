import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import gamesMock from 'components/CardGameSlider/mock'
import sidebarMock from 'components/ExploreSidebar/mock'

export default function Game(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: sidebarMock
    }
  }
}
