import { render, screen } from 'utils/testUtils'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Success, { SuccessTemplateProps } from '.'
// import userEvent from '@testing-library/user-event'

const props: SuccessTemplateProps = {
  recommendedGames: gamesMock.slice(0, 2),
  recommendedHighlight: highlightMock,
  recommendedTitle: 'You also will like these games'
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base Mock">{children}</div>
  }
}))

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Showcase mock"></div>
    }
  }
})

describe('<Success />', () => {
  it('should render the template', () => {
    render(<Success {...props} />)
    expect(
      screen.getByRole('heading', { name: /your purchase was successful!/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/wait for your payment details by email./i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /orders list/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/base mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/showcase mock/i)).toBeInTheDocument()
  })

  // it('should call to orders page', () => {
  //   render(<Success {...props} />)
  //   userEvent.click(screen.getByRole('link', { name: /orders list/i }))
  //   expect
  // })
})
