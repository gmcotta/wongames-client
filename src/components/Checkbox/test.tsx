import { render, screen } from '@testing-library/react'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    render(<Checkbox />)

    expect(
      screen.getByRole('heading', { name: /Checkbox/i })
    ).toBeInTheDocument()
  })
})
