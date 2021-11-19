import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter()
  const handleSignOut = async () => {
    const data = (await signOut({
      redirect: false,
      callbackUrl: '/'
    })) as unknown as { url: string }
    push(data.url)
  }
  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <FormatListBulleted size={24} />
          <span>My orders</span>
        </S.Link>
      </Link>

      <S.Link title="Sign out" role="button" onClick={handleSignOut}>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
