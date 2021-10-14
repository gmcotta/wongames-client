import { Add, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
  <S.Wrapper>
    <S.Body>
      <Heading color="black" size="small" lineBottom>
        Payment
      </Heading>
      <S.CardList>
        {cards?.map((card) => (
          <S.CardItem key={card.number}>
            <S.CardInfo>
              <img src={card.img} alt={card.flag} />
              <span>{card.number}</span>
            </S.CardInfo>
            <Radio
              name="credit-card"
              value={card.number}
              id={card.number}
              // onCheck={() => {}}
            />
          </S.CardItem>
        ))}
        <S.AddCard role="button">
          <Add size={14} /> Add a new credit card
        </S.AddCard>
      </S.CardList>
    </S.Body>
    <S.Footer>
      <Button as="a" fullWidth minimal>
        Keep shopping
      </Button>
      <Button
        icon={<ShoppingCart size={16} />}
        fullWidth
        onClick={handlePayment}
      >
        Buy now
      </Button>
    </S.Footer>
  </S.Wrapper>
)

export default PaymentOptions
