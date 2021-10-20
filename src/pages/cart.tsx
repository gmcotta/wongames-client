import CartTemplate, { CartTemplateProps } from 'templates/Cart'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cartListMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function Cart(props: CartTemplateProps) {
  return <CartTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: cartListMock,
      total: '$ 430.00',
      cards: cardsMock
    }
  }
}
