import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined'

import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

const settings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />,
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export type CardGameSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const CardGameSlider = ({ items, color }: CardGameSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item) => (
        <GameCard key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default CardGameSlider
