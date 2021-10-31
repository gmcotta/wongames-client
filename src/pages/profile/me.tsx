import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protectedRoutes'
import { initializeApollo } from 'utils/apollo'

import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { queryProfileMe } from 'graphql/generated/queryProfileMe'

import Profile from 'templates/Profile'

import ProfileForm, { ProfileFormProps } from 'components/ProfileForm'

export default function Me(props: ProfileFormProps) {
  return (
    <Profile>
      <ProfileForm {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)
  const { data } = await apolloClient.query<queryProfileMe>({
    query: QUERY_PROFILE_ME
  })
  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email
    }
  }
}
