import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions, { PaymentOptionsProps } from '.'
import cardsMock from './mock'

const props: PaymentOptionsProps = {
  cards: cardsMock,
  handlePayment: jest.fn()
}

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PaymentOptions {...props} />)
    expect(
      screen.getByRole('heading', { name: /payment/i })
    ).toBeInTheDocument()
  })
})
