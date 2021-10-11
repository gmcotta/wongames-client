import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameDetails from '.'
import mock from './mock'

const props = mock

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)
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
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render the formatted date', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render free when rating is BR0', () => {
    renderWithTheme(<GameDetails {...props} rating="BR0" />)
    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 16+ when rating is BR16', () => {
    renderWithTheme(<GameDetails {...props} rating="BR16" />)
    expect(screen.getByText('16+')).toBeInTheDocument()
  })

  it('should render the genres list', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('Role-playing / Action')).toBeInTheDocument()
  })
})
