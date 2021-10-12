import 'match-media-fake'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import galleryMock from 'components/Gallery/mock'

import Game, { GameTemplateProps } from '.'

const props: GameTemplateProps = {
  coverSrc:
    'https://images.gog-statics.com/9717921d3268d2cad294b626756400a3a1f3e46bf153330c5581f91a5c50446a_bg_crop_1366x655.jpg',
  gameInfo: {
    title: 'Cyberpunk 2077',
    price: '59.00',
    description:
      'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
  },
  gallery: galleryMock
}

describe('<Game />', () => {
  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)
    const cover = screen.getByRole('image', { name: /cover/i })
    expect(cover).toBeInTheDocument()
    expect(cover).toHaveStyle({ backgroundImage: `url(${props.coverSrc})` })
  })
})
