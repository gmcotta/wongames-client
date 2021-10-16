import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import sidebarMock from './mock'
import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar items={sidebarMock} onFilter={jest.fn} />)
    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render the inputs', () => {
    renderWithTheme(<ExploreSidebar items={sidebarMock} onFilter={jest.fn} />)
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
    renderWithTheme(<ExploreSidebar items={sidebarMock} onFilter={jest.fn} />)
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values', () => {
    renderWithTheme(
      <ExploreSidebar
        items={sidebarMock}
        initialValues={{ windows: true, sort_by: 'high-to-low' }}
        onFilter={jest.fn}
      />
    )
    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /high to low/i })).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()
    const initialValues = { windows: true, sort_by: 'high-to-low' }
    renderWithTheme(
      <ExploreSidebar
        items={sidebarMock}
        initialValues={initialValues}
        onFilter={onFilter}
      />
    )
    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(onFilter).toHaveBeenCalledWith(initialValues)
  })

  it('should filter with selected values', () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar items={sidebarMock} onFilter={onFilter} />)
    userEvent.click(screen.getByLabelText(/free/i))
    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/indie/i))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(onFilter).toHaveBeenCalledWith({
      free: true,
      windows: true,
      sort_by: 'low-to-high',
      indie: true
    })
  })

  it('should alternate between radio fields', () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar items={sidebarMock} onFilter={onFilter} />)
    userEvent.click(screen.getByLabelText(/high to low/i))
    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(onFilter).toHaveBeenCalledWith({
      sort_by: 'low-to-high'
    })
  })
})
