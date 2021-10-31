import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protectedRoutes'

import ProfileForm from 'components/ProfileForm'

import Profile from 'templates/Profile'

export default function Me() {
  return (
    <Profile>
      <ProfileForm />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: { session }
  }
}
