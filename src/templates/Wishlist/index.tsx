import { Container } from 'components/Container'
import Divider from 'components/Divider'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import Grid from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Loader from 'components/Loader'
import Showcase from 'components/Showcase'
import { useWishlist } from 'hooks/use-wishlist'
import Base from 'templates/Base'
import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle: string
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        {loading && (
          <S.LoaderWrapper>
            <Loader />
          </S.LoaderWrapper>
        )}
        {!loading && !items?.length ? (
          <Empty
            title={recommendedTitle}
            description="Games added to your wishlist will appear here"
            hasLink
          />
        ) : (
          <Grid>
            {items?.map((game: GameCardProps, index) => (
              <GameCard key={`wishlist-game-${index + 1}`} {...game} />
            ))}
          </Grid>
        )}

        <Divider />
      </Container>
      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Wishlist
