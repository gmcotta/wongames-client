import 'match-media-fake'
import { screen, render } from 'utils/testUtils'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cartListMock from 'components/CartList/mock'

import Cart, { CartTemplateProps } from '.'

const props: CartTemplateProps = {
  recommendedTitle: 'Title',
  recommendedGames: gamesMock.slice(0, 2),
  recommendedHighlight: highlightMock,
  items: cartListMock,
  total: '$ 430.00'
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Base mock">{children}</div>
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

jest.mock('components/CartList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="CartList mock"></div>
    }
  }
})

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="PaymentOptions mock"></div>
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

describe('<Cart />', () => {
  it('should render the heading', () => {
    render(<Cart {...props} />)
    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/Showcase mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/CartList mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/PaymentOptions mock/i)).toBeInTheDocument()
  })

  it('should render Empty component if tempate has no items', () => {
    render(<Cart {...props} items={[]} />)
    expect(screen.getByTestId(/Empty mock/i)).toBeInTheDocument()
  })
})
