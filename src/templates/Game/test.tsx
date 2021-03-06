import 'match-media-fake'
import { screen, render } from 'utils/testUtils'

import galleryMock from 'components/Gallery/mock'
import textContentMock from 'components/TextContent/mock'
import gameInfoMock from 'components/GameInfo/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Game, { GameTemplateProps } from '.'

const props: GameTemplateProps = {
  coverSrc: 'image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock.slice(0, 2),
  description: textContentMock.content,
  details: gameDetailsMock,
  upcomingTitle: 'Title',
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedTitle: 'Title',
  recommendedGames: gamesMock,
  slug: 'slug'
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base Mock">{children}</div>
  }
}))

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="GameInfo mock"></div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Gallery mock"></div>
    }
  }
})

jest.mock('components/TextContent', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="TextContent mock"></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="GameDetails mock"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Showcase mock"></div>
    }
  }
})

describe('<Game />', () => {
  it('should render the components', () => {
    render(<Game {...props} />)
    expect(screen.getByTestId(/base mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/gameinfo mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/gallery mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/textcontent mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/gamedetails mock/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/showcase mock/i)).toHaveLength(2)
  })

  it('should render the cover image', () => {
    render(<Game {...props} />)
    const image = screen.getByRole('img', { name: /Borderland 3/i })
    const cover = image.parentElement
    expect(image).toHaveAttribute('src', props.coverSrc)
    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should not render the gallery section if no info was given', () => {
    render(<Game {...props} gallery={undefined} />)
    expect(screen.queryByTestId(/gallery mock/i)).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    render(<Game {...props} />)
    expect(screen.getByTestId(/gallery mock/i).parentElement).toHaveStyle({
      display: 'none'
    })
    expect(screen.getByTestId(/gallery mock/i).parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
