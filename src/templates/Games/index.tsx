import { KeyboardArrowDown } from '@styled-icons/material-outlined'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Grid from 'components/Grid'
import Base from 'templates/Base'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => ({})
  const handleShowMore = () => ({})
  return (
    <Base>
      <S.Wrapper>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        {!!games.length && (
          <S.GridSection>
            <Grid>
              {games.map((game, index) => (
                <GameCard key={`${game.title}-${index}`} {...game} />
              ))}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <KeyboardArrowDown size={32} />
            </S.ShowMore>
          </S.GridSection>
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Games
