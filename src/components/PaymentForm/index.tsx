import { useState, useEffect, FormEvent } from 'react'
import { Session } from 'next-auth/client'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { CardElement } from '@stripe/react-stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'

import { useCart } from 'hooks/use-cart'

import { createPaymentIntent } from 'utils/stripe/methods'

import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'
import { FormLoading } from 'components/Form'

export type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const [error, setError] = useState<string | undefined>()
  const [disabled, setDisabled] = useState(true)
  const [freeGames, setFreeGames] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(false)
  console.log(clientSecret)

  useEffect(() => {
    async function setPaymentMode() {
      if (items?.length) {
        const data = await createPaymentIntent({ items, token: session.jwt })
        if (data.freeGames) {
          setClientSecret('')
          setFreeGames(true)
          console.log(data.freeGames)
          return
        }
        if (data.error) {
          setError(data.error)
          return
        }
        setFreeGames(false)
        setClientSecret(data.client_secret)
        console.log(data.client_secret)
      }
      setFreeGames(false)
      setClientSecret('')
    }
    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error?.message)
  }
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Payment
          </Heading>
          {freeGames ? (
            <S.FreeGamesMessage>
              Just click to buy now and enjoy!
            </S.FreeGamesMessage>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: { base: { fontSize: '16px' } }
              }}
              onChange={handleChange}
            />
          )}
          {!!error && (
            <S.ErrorMessage>
              <ErrorOutline size={24} />
              {error}
            </S.ErrorMessage>
          )}
        </S.Body>
        <S.Footer>
          <Button as="a" fullWidth minimal>
            Keep shopping
          </Button>
          <Button
            type="submit"
            icon={loading ? <FormLoading /> : <ShoppingCart size={16} />}
            fullWidth
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
