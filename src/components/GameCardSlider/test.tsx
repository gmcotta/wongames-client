import 'match-media-fake'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import GameCardSlider from '.'
import itemsMock from './mock'

const items = itemsMock

describe('<GameCardSlider />', () => {
  it('should render with 4 items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)
    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
