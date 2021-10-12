import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Game from '.'

const props = {
  coverSrc:
    'https://images.gog-statics.com/9717921d3268d2cad294b626756400a3a1f3e46bf153330c5581f91a5c50446a_bg_crop_1366x655.jpg'
}

describe('<Game />', () => {
  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)
    const cover = screen.getByRole('image', { name: /cover/i })
    expect(cover).toBeInTheDocument()
    expect(cover).toHaveStyle({ backgroundImage: `url(${props.coverSrc})` })
  })
})
