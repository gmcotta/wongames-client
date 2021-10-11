import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mock from './mock'

import TextContent from '.'

const props = mock

describe('<TextContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
  })
})
