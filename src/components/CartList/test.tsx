import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import cartListMock from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={[cartListMock[0]]} total="R$ 430,00" />
    )
    expect(screen.getAllByRole('heading')).toHaveLength(1)
    expect(screen.getByText(/total/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 430,00/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the footer button', () => {
    renderWithTheme(
      <CartList items={[cartListMock[0]]} total="R$ 430,00" hasFooterButton />
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })
})
