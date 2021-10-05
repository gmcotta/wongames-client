import 'match-media-fake'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/CardGameSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)
    const menu = screen.getByLabelText(/open menu/i)
    expect(menu).toBeInTheDocument()
    const footerHeading = screen.getByRole('heading', { name: /contato/i })
    expect(footerHeading).toBeInTheDocument()
    const logos = screen.getAllByRole('img', { name: /won games/i })
    expect(logos).toHaveLength(2)
    const newsSectionHeading = screen.getByRole('heading', { name: /news/i })
    expect(newsSectionHeading).toBeInTheDocument()
    const mostPopularSectionHeading = screen.getByRole('heading', {
      name: /most popular/i
    })
    expect(mostPopularSectionHeading).toBeInTheDocument()
    const upcomingSectionHeading = screen.getByRole('heading', {
      name: /upcoming/i
    })
    expect(upcomingSectionHeading).toBeInTheDocument()
    const freeGamesSectionHeading = screen.getByRole('heading', {
      name: /free games/i
    })
    expect(freeGamesSectionHeading).toBeInTheDocument()
    const banner1 = screen.getAllByText(/defy death 1/i)
    expect(banner1).toHaveLength(1)
    const allGames = screen.getAllByText(/population zero/i)
    expect(allGames).toHaveLength(5)
    const allHighlights = screen.getAllByText(/red dead is back/i)
    expect(allHighlights).toHaveLength(3)
  })
})
