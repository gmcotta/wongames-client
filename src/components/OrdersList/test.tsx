import { ReactNode } from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

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
    renderWithTheme(<OrdersList items={mock} />)
    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock gameitem/i)).toHaveLength(2)
  })

  it('should render the component with empty component', () => {
    renderWithTheme(<OrdersList />)
    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/mock empty/i)).toBeInTheDocument()
  })
})
