import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { useQueryGames } from 'graphql/queries/games'

import Base from 'templates/Base'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Grid from 'components/Grid'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Wrapper>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <S.GridSection>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover!.url}`}
                  price={game.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </S.GridSection>
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Games
