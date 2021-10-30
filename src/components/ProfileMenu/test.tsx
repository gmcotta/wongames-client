import { screen, render } from 'utils/testUtils'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the component', () => {
    render(<ProfileMenu />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })

  it('should render the menu with an active link', () => {
    render(<ProfileMenu activeLink="/profile/me" />)
    expect(screen.getByRole('link', { name: /my profile/i })).toHaveStyle({
      color: '#FAFAFA',
      'background-color': '#F231A5'
    })
  })
})
