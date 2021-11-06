import { useState } from 'react'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { CardElement } from '@stripe/react-stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import * as S from './styles'

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setError(event.error?.message)
  }
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>
        <CardElement
          options={{ hidePostalCode: true }}
          onChange={handleChange}
        />
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
        <Button icon={<ShoppingCart size={16} />} fullWidth>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
