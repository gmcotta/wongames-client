import 'match-media-fake'
import { screen, render } from 'utils/testUtils'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home, { HomeTemplateProps } from '.'

const props: HomeTemplateProps = {
  banners: bannersMock,
  newGamesTitle: 'New Games',
  newGames: [gamesMock[0]],
  mostPopularTitle: 'Popular Games',
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGamesTitle: 'Upcoming Games',
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  freeGamesTitle: 'Free games',
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base Mock">{children}</div>
  }
}))

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="BannerSlider mock"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Showcase mock"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render home content', () => {
    render(<Home {...props} />)
    expect(screen.getByTestId(/base mock/i)).toBeInTheDocument()
    const banner = screen.getByTestId(/bannerslider mock/i)
    expect(banner).toBeInTheDocument
    const showcases = screen.getAllByTestId(/showcase mock/i)
    expect(showcases).toHaveLength(4)
  })
})
