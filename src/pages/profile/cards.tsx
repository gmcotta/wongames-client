import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protectedRoutes'

import Profile from 'templates/Profile'

import CardsList, { CardsListProps } from 'components/CardsList'
import cardsMock from 'components/PaymentOptions/mock'

export default function Cards(props: CardsListProps) {
  return (
    <Profile>
      <CardsList {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: {
      cards: cardsMock,
      session
    }
  }
}
