import { screen, render } from 'utils/testUtils'

import GameDetails from '.'
import mock from './mock'

const props = mock

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />)
    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render the platform icons', () => {
    render(<GameDetails {...props} />)
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    render(<GameDetails {...props} />)
    expect(screen.getByText('Walkabout')).toBeInTheDocument()
  })

  it('should render the developer', () => {
    render(<GameDetails {...props} />)
    expect(screen.getByText('Different Tales')).toBeInTheDocument()
  })

  it('should render the formatted date', () => {
    render(<GameDetails {...props} />)
    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render free when rating is BR0', () => {
    render(<GameDetails {...props} rating="BR0" />)
    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 16+ when rating is BR16', () => {
    render(<GameDetails {...props} rating="BR16" />)
    expect(screen.getByText('16+')).toBeInTheDocument()
  })

  it('should render the genres list', () => {
    render(<GameDetails {...props} />)
    expect(screen.getByText('Role-playing / Action')).toBeInTheDocument()
  })
})
