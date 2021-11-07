import { PaymentIntent } from '@stripe/stripe-js'
import { CartItem } from 'hooks/use-cart'

type PaymentIntentParams = {
  items: CartItem[] | undefined
  token: string
}

type HTTPPostRequestParams = {
  url: string
  body: string
  token: string
}

type CreatePaymentParams = {
  items: CartItem[]
  paymentIntent?: PaymentIntent
  token: string
}

const httpPostRequest = async ({ url, body, token }: HTTPPostRequestParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body
  })
  return await response.json()
}

export const createPaymentIntent = async ({
  items,
  token
}: PaymentIntentParams) => {
  return httpPostRequest({
    url: '/orders/create-payment-intent',
    body: JSON.stringify({ cart: items }),
    token
  })
}

export const createPayment = async ({
  items,
  paymentIntent,
  token
}: CreatePaymentParams) => {
  return httpPostRequest({
    url: '/orders',
    body: JSON.stringify({
      cart: items,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method
    }),
    token
  })
}
