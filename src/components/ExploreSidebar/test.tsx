import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'

import sidebarMock from './mock'
import ExploreSidebar from '.'
import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar items={sidebarMock} onFilter={jest.fn} />)
    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
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

  // it('should render the filter button', () => {
  //   renderWithTheme(<ExploreSidebar items={sidebarMock} onFilter={jest.fn} />)
  //   expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  // })

  it('should check initial values', () => {
    renderWithTheme(
      <ExploreSidebar
        items={sidebarMock}
        initialValues={{ platforms: ['windows'], sort_by: 'high-to-low' }}
        onFilter={jest.fn}
      />
    )
    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /high to low/i })).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()
    const initialValues = { platforms: ['windows'], sort_by: 'high-to-low' }
    renderWithTheme(
      <ExploreSidebar
        items={sidebarMock}
        initialValues={initialValues}
        onFilter={onFilter}
      />
    )
    expect(onFilter).toHaveBeenCalledWith(initialValues)
  })

  it('should filter with selected values', () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar items={sidebarMock} onFilter={onFilter} />)
    userEvent.click(screen.getByLabelText(/free/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/indie/i))
    expect(onFilter).toHaveBeenCalledTimes(5)
    expect(onFilter).toHaveBeenCalledWith({
      price: ['free'],
      platforms: ['linux'],
      sort_by: 'low-to-high',
      genre: ['indie']
    })
  })

  it('should alternate between radio fields', () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar items={sidebarMock} onFilter={onFilter} />)
    userEvent.click(screen.getByLabelText(/high to low/i))
    userEvent.click(screen.getByLabelText(/low to high/i))
    expect(onFilter).toHaveBeenCalledWith({
      sort_by: 'low-to-high'
    })
  })

  it('should open/close sidebar when filtering on mobile ', () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={sidebarMock} onFilter={jest.fn} />
    )
    const mobileOptions = {
      media: '(max-width:768px)',
      modifier: String(
        css`
          ${Overlay}
        `
      )
    }
    const overlay = container.firstChild
    expect(overlay).not.toHaveStyleRule('opacity', '1', mobileOptions)
    userEvent.click(screen.getByLabelText(/open filters/i))
    expect(overlay).toHaveStyleRule('opacity', '1', mobileOptions)
    userEvent.click(screen.getByLabelText(/close filters/i))
    expect(overlay).not.toHaveStyleRule('opacity', '1', mobileOptions)
    userEvent.click(screen.getByLabelText(/open filters/i))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(overlay).not.toHaveStyleRule('opacity', '1', mobileOptions)
  })
})
