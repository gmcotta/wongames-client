import { ReactNode } from 'react'
import { Session } from 'next-auth/client'

import { CartContextDefaultValues, CartContextData } from 'hooks/use-cart'

import { render, screen, waitFor } from 'utils/testUtils'
import * as stripeMethods from 'utils/stripe/methods'

import itemsMock from 'components/CartList/mock'

import PaymentForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  push: jest.fn()
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: ReactNode }) {
    return <div>{children}</div>
  }
}))

jest.mock('@stripe/react-stripe-js', () => ({
  CardElement: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="CardElement Mock">{children}</div>
  },
  Elements: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Elements Mock">{children}</div>
  },
  useStripe: jest.fn().mockReturnValue({
    confirmCardPayment: jest.fn().mockReturnValue({
      paymentMethod: {
        card: 'card'
      }
    })
  }),
  useElements: jest.fn().mockReturnValue({
    getElement: jest.fn()
  })
}))

const createPaymentIntent = jest.spyOn(stripeMethods, 'createPaymentIntent')

describe('<PaymentForm />', () => {
  let session: Session
  let cartProviderProps: CartContextData
  beforeEach(() => {
    session = {
      jwt: 'token',
      user: {
        email: 'won@games.com'
      },
      expires: 'date'
    }
    cartProviderProps = {
      ...CartContextDefaultValues,
      items: itemsMock
    }
  })
  it('should render the component', () => {
    render(<PaymentForm session={session} />)
    expect(
      screen.getByRole('heading', { name: /payment/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/CardElement Mock/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buy now/i })).toBeDisabled()
  })

  it('should call createPaymentIntent and render only free games text', async () => {
    createPaymentIntent.mockResolvedValueOnce({ freeGames: true })
    render(<PaymentForm session={session} />, { cartProviderProps })
    expect(createPaymentIntent).toHaveBeenCalled()
    await waitFor(() => {
      expect(
        screen.getByText(/Just click to buy now and enjoy!/i)
      ).toBeInTheDocument()
    })
  })

  it('should call createPaymentIntent and render error if has any issue', async () => {
    createPaymentIntent.mockResolvedValueOnce({ error: 'some error' })
    render(<PaymentForm session={session} />, { cartProviderProps })
    expect(createPaymentIntent).toHaveBeenCalled()
    await waitFor(() => {
      expect(screen.getByText(/some error/i)).toBeInTheDocument()
    })
  })
})
