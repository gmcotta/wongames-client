import CartTemplate, { CartTemplateProps } from 'templates/Cart'
import cartListMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function Cart(props: CartTemplateProps) {
  return <CartTemplate {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      items: cartListMock,
      total: '$ 430.00',
      cards: cardsMock
    }
  }
}
