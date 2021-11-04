import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { useSession } from 'next-auth/client'
import { useWishlist } from 'hooks/use-wishlist'
import Button, { ButtonProps } from 'components/Button'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const { isInWishlist, removeFromWishlist, addToWishlist } = useWishlist()
  const [session] = useSession()
  if (!session) return null

  const buttonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  const handleToggleFavorite = () => {
    isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }
  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label={buttonText} />
        ) : (
          <FavoriteBorder aria-label={buttonText} />
        )
      }
      minimal
      size={size}
      onClick={handleToggleFavorite}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
