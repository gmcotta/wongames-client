import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import sidebarMock from './mock'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar items={sidebarMock} />)
    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render the inputs', () => {
    renderWithTheme(<ExploreSidebar items={sidebarMock} />)
    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('checkbox', { name: /windows/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('checkbox', { name: /action/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={sidebarMock} />)
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })
})
