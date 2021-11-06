import { GetServerSidePropsContext } from 'next'

import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protectedRoutes'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

import CartTemplate, { CartTemplateProps } from 'templates/Cart'

import cartListMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function Cart(props: CartTemplateProps) {
  return <CartTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      session,
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
