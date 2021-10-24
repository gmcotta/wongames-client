import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'

import sidebarMock from 'components/ExploreSidebar/mock'

import Games from '.'
import { fetchMoreMock, gamesMock } from './mock'
import userEvent from '@testing-library/user-event'
import apolloCache from 'utils/apolloCache'

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Base mock">{children}</div>
    }
  }
})

jest.mock('components/Grid', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Grid mock">{children}</div>
    }
  }
})

describe('<Games />', () => {
  it('should render the template', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={sidebarMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    expect(await screen.findByTestId(/base mock/i)).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render the loading', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={sidebarMock} />
      </MockedProvider>
    )
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('should show more games if button is pressed', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={sidebarMock} />
      </MockedProvider>
    )
    expect(await screen.findByText(/sample game/i)).toBeInTheDocument()
    userEvent.click(await screen.findByRole('button', { name: /show more/i }))
    expect(await screen.findByText(/fetch more game/i)).toBeInTheDocument()
  })
})
