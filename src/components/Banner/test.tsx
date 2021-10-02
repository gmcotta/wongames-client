import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const bannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the banner', () => {
    const { container } = renderWithTheme(<Banner {...bannerProps} />)
    // screen.logTestingPlaygroundURL()
    expect(screen.getByRole('img')).toHaveAttribute('src', bannerProps.img)
    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/play the new season/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the banner with ribbon', () => {
    renderWithTheme(
      <Banner
        ribbonText="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
        {...bannerProps}
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      'background-color': '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      'font-size': '1.2rem'
    })
  })
})
