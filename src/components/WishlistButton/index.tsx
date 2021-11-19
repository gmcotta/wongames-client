import { useState } from 'react'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { useSession } from 'next-auth/client'
import { useWishlist } from 'hooks/use-wishlist'
import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const [loading, setLoading] = useState(false)
  const { isInWishlist, removeFromWishlist, addToWishlist } = useWishlist()
  const [session] = useSession()
  if (!session) return null

  const buttonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  const handleToggleFavorite = async () => {
    setLoading(true)
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }
  const FavoriteIcon = () =>
    isInWishlist(id) ? (
      <Favorite aria-label={buttonText} />
    ) : (
      <FavoriteBorder aria-label={buttonText} />
    )
  return (
    <Button
      icon={loading ? <Spinner /> : <FavoriteIcon />}
      minimal
      size={size}
      onClick={handleToggleFavorite}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
