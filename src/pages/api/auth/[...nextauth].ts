/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

type AuthorizeProps = {
  email: string
  password: string
}

const options = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({ email, password }: AuthorizeProps) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async (session: any, user: any) => {
      session.jwt = user.jwt
      session.id = user.id

      return Promise.resolve(session)
    },
    jwt: async (token: any, user: any) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username as string
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    }
  }
}

const Auth = (req: any, res: any) => NextAuth(req, res, options)

export default Auth
