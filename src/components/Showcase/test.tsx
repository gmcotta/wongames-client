import 'match-media-fake'
import 'session.mock'
import { screen, render } from 'utils/testUtils'

import Showcase from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

describe('<Showcase />', () => {
  it('should render the full showcase', () => {
    render(
      <Showcase
        title="Title"
        highlight={highlightMock}
        games={[gamesMock[0]]}
      />
    )
    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()
    const allGames = screen.getAllByText(/population zero/i)
    expect(allGames).toHaveLength(1)
    const allHighlights = screen.getAllByText(/red dead is back/i)
    expect(allHighlights).toHaveLength(1)
  })

  it('should render the showcase without title', () => {
    render(<Showcase highlight={highlightMock} games={[gamesMock[0]]} />)
    expect(
      screen.queryByRole('heading', { name: /Title/i })
    ).not.toBeInTheDocument()
    const allGames = screen.getAllByText(/population zero/i)
    expect(allGames).toHaveLength(1)
    const allHighlights = screen.getAllByText(/red dead is back/i)
    expect(allHighlights).toHaveLength(1)
  })

  it('should render the showcase without games', () => {
    render(<Showcase title="Title" highlight={highlightMock} />)
    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()
    const allHighlights = screen.getAllByText(/red dead is back/i)
    expect(allHighlights).toHaveLength(1)
    const allGames = screen.queryAllByText(/population zero/i)
    expect(allGames).not.toHaveLength(1)
  })

  it('should render the showcase without highlight', () => {
    render(<Showcase title="Title" games={[gamesMock[0]]} />)
    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()
    const allGames = screen.getAllByText(/population zero/i)
    expect(allGames).toHaveLength(1)
    const allHighlights = screen.queryAllByText(/red dead is back/i)
    expect(allHighlights).not.toHaveLength(1)
  })
})
