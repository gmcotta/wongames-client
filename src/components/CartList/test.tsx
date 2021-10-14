import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import cartListMock from './mock'

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="GameItem mock"></div>
    }
  }
})

describe('<CartList />', () => {
  it('should render the cart list', () => {
    renderWithTheme(<CartList items={cartListMock} total="R$ 430,00" />)
    expect(screen.getAllByTestId(/gameitem mock/i)).toHaveLength(2)
    expect(screen.getByText(/total/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 430,00/i)).toBeInTheDocument()
  })
})
