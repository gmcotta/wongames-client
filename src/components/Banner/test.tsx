import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render the banner', () => {
    const img = 'https://source.unsplash.com/user/willianjusten/1042x580'
    const title = 'Defy death'
    const subtitle = '<p>Play the new <strong>CrashLands</strong> season'
    const buttonLabel = 'Buy now'
    const buttonLink = '/games/defy-death'
    renderWithTheme(
      <Banner
        img={img}
        title={title}
        subtitle={subtitle}
        buttonLabel={buttonLabel}
        buttonLink={buttonLink}
      />
    )
    // screen.logTestingPlaygroundURL()
    expect(screen.getByRole('img')).toHaveAttribute('src', img)
    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/play the new season/i)).toBeInTheDocument()
  })
})
