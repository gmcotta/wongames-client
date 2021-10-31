import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protectedRoutes'

import Profile from 'templates/Profile'

import ordersMock from 'components/OrdersList/mock'
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
  return {
    props: {
      items: ordersMock,
      session
    }
  }
}
