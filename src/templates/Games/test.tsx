import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/CardGameSlider/mock'
import sidebarMock from 'components/ExploreSidebar/mock'

import Games from '.'

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Base mock">{children}</div>
    }
  }
})

jest.mock('components/Grid', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Grid mock">{children}</div>
    }
  }
})

jest.mock('components/ExploreSidebar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="ExploreSidebar mock"></div>
    }
  }
})

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<Games />', () => {
  it('should render the template', () => {
    renderWithTheme(<Games games={gamesMock} filterItems={sidebarMock} />)
    expect(screen.getByTestId(/base mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/exploresidebar mock/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should not render the show more button if no games were found', () => {
    renderWithTheme(<Games filterItems={sidebarMock} />)
    expect(
      screen.queryByRole('button', { name: /show more/i })
    ).not.toBeInTheDocument()
  })
})
