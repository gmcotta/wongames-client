import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode
} from 'react'
import { useSession } from 'next-auth/client'
import { useMutation } from '@apollo/client'

import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { useQueryWishlist } from 'graphql/queries/wishlist'

import { gamesMapper } from 'utils/mappers'

import { GameCardProps } from 'components/GameCard'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistId, setWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const { data, loading: queryLoading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  const [createList, { loading: createLoading }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.wishlist?.games || [])
        setWishlistId(data?.createWishlist?.wishlist?.id)
      }
    }
  )

  const [updateList, { loading: updateLoading }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.games || [])
      }
    }
  )

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
    setWishlistId(data?.wishlists[0]?.id)
  }, [data])

  const wishlistGameIds = useMemo(
    () => wishlistItems.map((game) => game.id),
    [wishlistItems]
  )

  const isInWishlist = (id: string) => {
    return !!wishlistItems.find((game) => game.id === id)
  }

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createList({
        variables: { input: { data: { games: [...wishlistGameIds, id] } } }
      })
    }
    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { games: [...wishlistGameIds, id] }
        }
      }
    })
  }

  const removeFromWishlist = (id: string) => {
    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { games: wishlistGameIds.filter((gameId) => gameId !== id) }
        }
      }
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        loading: queryLoading || createLoading || updateLoading,
        isInWishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
