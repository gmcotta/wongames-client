import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protectedRoutes'
import { initializeApollo } from 'utils/apollo'

import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import {
  queryProfileMe,
  queryProfileMeVariables
} from 'graphql/generated/queryProfileMe'

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
  if (!session) {
    return { props: {} }
  }
  const apolloClient = initializeApollo(null, session)
  const { data } = await apolloClient.query<
    queryProfileMe,
    queryProfileMeVariables
  >({
    query: QUERY_PROFILE_ME,
    variables: {
      identifier: session?.id
    }
  })
  return {
    props: {
      session,
      username: data.user?.username,
      email: data.user?.email
    }
  }
}
