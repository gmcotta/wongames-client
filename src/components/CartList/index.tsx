import Link from 'next/link'
import Button from 'components/Button'
import GameItem from 'components/GameItem'
import * as S from './styles'
import Empty from 'components/Empty'
import { useCart } from 'hooks/use-cart'
import Loader from 'components/Loader'

export type CartListProps = {
  hasFooterButton?: boolean
}

const CartList = ({ hasFooterButton = false }: CartListProps) => {
  const { total, items, loading } = useCart()
  if (loading) {
    return (
      <S.LoaderWrapper>
        <Loader />
      </S.LoaderWrapper>
    )
  }
  return (
    <S.Wrapper isEmpty={!items?.length} data-cy="cart-list">
      {items?.length ? (
        <>
          <S.GamesList>
            {items.map((item) => (
              <GameItem key={item.title} {...item} />
            ))}
          </S.GamesList>
          <S.Footer>
            {!hasFooterButton && <span>Total: </span>}
            {!!total && <S.Total>{total}</S.Total>}
            {hasFooterButton && (
              <Link href="/cart" passHref>
                <Button as="a">Buy now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store"
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
