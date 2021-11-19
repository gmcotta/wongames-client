import 'match-media-fake'
import 'session.mock'
import { screen, render } from 'utils/testUtils'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Wishlist, { WishlistTemplateProps } from '.'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

const props: WishlistTemplateProps = {
  recommendedGames: gamesMock.slice(0, 2),
  recommendedHighlight: highlightMock,
  recommendedTitle: 'You also will like these games'
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base Mock">{children}</div>
  }
}))

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Showcase mock"></div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Empty mock"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render the template', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }
    render(<Wishlist {...props} />, { wishlistProviderProps })
    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/base mock/i)).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(1)
    expect(screen.getByTestId(/showcase mock/i)).toBeInTheDocument()
  })

  it('should render empty component if template has no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: []
    }
    render(
      <Wishlist
        recommendedTitle={props.recommendedTitle}
        recommendedGames={props.recommendedGames}
        recommendedHighlight={props.recommendedHighlight}
      />,
      { wishlistProviderProps }
    )
    expect(screen.getByTestId(/empty mock/i)).toBeInTheDocument()
    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
  })
})
