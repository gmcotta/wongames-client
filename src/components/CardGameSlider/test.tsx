import { render, screen } from '@testing-library/react'

import CardGameSlider from '.'

describe('<CardGameSlider />', () => {
  it('should render the heading', () => {
    render(<CardGameSlider />)

    expect(
      screen.getByRole('heading', { name: /CardGameSlider/i })
    ).toBeInTheDocument()
  })
})
