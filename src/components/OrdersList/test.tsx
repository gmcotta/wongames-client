import { ReactNode } from 'react'

import { screen, render } from 'utils/testUtils'

import OrdersList from '.'
import mock from './mock'

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: ReactNode }) {
      return <div data-testid="Mock GameItem">{children}</div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<OrdersList />', () => {
  it('should render the component with game items', () => {
    render(<OrdersList items={mock} />)
    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock gameitem/i)).toHaveLength(2)
  })

  it('should render the component with empty component', () => {
    render(<OrdersList />)
    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/mock empty/i)).toBeInTheDocument()
  })
})
