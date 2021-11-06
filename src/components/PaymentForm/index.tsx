import { ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import * as S from './styles'

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentForm = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>
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
