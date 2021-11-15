import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protectedRoutes'
import { initializeApollo } from 'utils/apollo'
import { ordersMapper } from 'utils/mappers'

import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'

import Profile from 'templates/Profile'

import OrdersList, { OrdersListProps } from 'components/OrdersList'

export default function Orders(props: OrdersListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  if (!session) {
    return { props: {} }
  }
  const apolloClient = initializeApollo(null, session)
  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id as string
    },
    fetchPolicy: 'no-cache'
  })
  return {
    props: {
      items: ordersMapper(data.orders),
      session
    }
  }
}
