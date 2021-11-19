import 'match-media-fake'
import 'session.mock'

import { render, screen } from 'utils/testUtils'

import GameCardSlider from '.'
import itemsMock from './mock'

const items = itemsMock

describe('<GameCardSlider />', () => {
  it('should render with 4 items', () => {
    const { container } = render(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows', () => {
    render(<GameCardSlider items={items} color="white" />)
    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
