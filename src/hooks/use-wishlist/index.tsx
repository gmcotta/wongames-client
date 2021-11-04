import { createContext, useContext, ReactNode } from 'react'

import { GameCardProps } from 'components/GameCard'

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
  const loading = false
  const items = [] as GameCardProps[]
  const isInWishlist = () => false
  const addToWishlist = () => null
  const removeFromWishlist = () => null
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
