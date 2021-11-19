import { screen, render } from 'utils/testUtils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer with 4 columns', () => {
    const { container } = render(<Footer />)
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /localization/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
