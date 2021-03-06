import { Session as DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    /** This is an example. You can find me in types/next-auth.d.ts */
    id?: string
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
    }
    expires?: string
  }
}
