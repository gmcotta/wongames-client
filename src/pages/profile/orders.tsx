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

export async function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}
