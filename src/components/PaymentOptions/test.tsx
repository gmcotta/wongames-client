import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions, { PaymentOptionsProps } from '.'
import cardsMock from './mock'

const props: PaymentOptionsProps = {
  cards: cardsMock,
  handlePayment: jest.fn()
}

describe('<PaymentOptions />', () => {
  it('should render the component', () => {
    renderWithTheme(<PaymentOptions {...props} />)
    expect(
      screen.getByRole('heading', { name: /payment/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /visa/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mastercard/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add a new credit card/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/keep shopping/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
  })
})
