import { render, screen } from '@testing-library/react'

import BannerSlider from '.'

describe('<BannerSlider />', () => {
  it('should render the heading', () => {
    render(<BannerSlider />)

    expect(
      screen.getByRole('heading', { name: /BannerSlider/i })
    ).toBeInTheDocument()
  })
})
