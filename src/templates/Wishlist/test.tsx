import 'match-media-fake'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/CardGameSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Wishlist, { WishlistTemplateProps } from '.'

const props: WishlistTemplateProps = {
  recommendedGames: gamesMock.slice(0, 2),
  recommendedHighlight: highlightMock
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Menu mock"></div>
    }
  }
})
jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Footer mock"></div>
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

describe('<Wishlist />', () => {
  it('should render the template', () => {
    renderWithTheme(<Wishlist {...props} />)
    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/menu mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/footer mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/showcase mock/i)).toBeInTheDocument()
  })
})
