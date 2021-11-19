import { screen, render } from 'utils/testUtils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the auth template', () => {
    render(
      <Auth title="Auth template">
        <form>
          <input type="text" />
        </form>
      </Auth>
    )
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(3)
    expect(
      screen.getByRole('img', { name: 'Won Games Auth Page' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /auth template/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Won Games 2020 © Todos os Direitos Reservados/i)
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
