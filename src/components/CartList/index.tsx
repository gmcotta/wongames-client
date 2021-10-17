import Link from 'next/link'
import Button from 'components/Button'
import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
  hasFooterButton?: boolean
}

const CartList = ({ items, total, hasFooterButton = false }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}
    <S.Footer>
      {!hasFooterButton && <span>Total: </span>}
      <S.Total>{total}</S.Total>
      {hasFooterButton && (
        <Link href="/cart" passHref>
          <Button as="a">Buy now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList
