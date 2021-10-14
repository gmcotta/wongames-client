import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('should select card when click on the label', async () => {
    renderWithTheme(<PaymentOptions {...props} />)
    userEvent.click(screen.getByLabelText(/4325/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })

  it('should not call handlePayment if buy now button is disabled', () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment if credit card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )
    userEvent.click(screen.getByLabelText(/4325/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    await waitFor(() => expect(handlePayment).toHaveBeenCalled())
  })
})
