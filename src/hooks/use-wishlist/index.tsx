import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState
} from 'react'

import { GameCardProps } from 'components/GameCard'
import { useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { gamesMapper } from 'utils/mappers'

export type WishlistContextData = {
  items: GameCardProps[]
  loading: boolean
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
}

export const wishlistContextDefaultValues = {
  items: [],
  loading: false,
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null
}

export const wishlistContext = createContext<WishlistContextData>(
  wishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const addToWishlist = () => null
  const removeFromWishlist = () => null
  const [session] = useSession()
  const [items, setItems] = useState<GameCardProps[]>([])

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    setItems(gamesMapper(data?.wishlists[0].games))
  }, [data])

  const isInWishlist = (id: string) => !!items.find((item) => item.id === id)

  return (
    <wishlistContext.Provider
      value={{
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading,
        items
      }}
    >
      {children}
    </wishlistContext.Provider>
  )
}

const useWishlist = () => useContext(wishlistContext)

export { WishlistProvider, useWishlist }
