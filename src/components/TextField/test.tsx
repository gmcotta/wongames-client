import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="label" labelFor="field" id="field" />)

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField id="field" />)

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField id="field" placeholder="example" />)

    expect(screen.getByPlaceholderText(/example/i)).toBeInTheDocument()
  })

  it('should change values when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField label="label" labelFor="field" id="field" onInput={onInput} />
    )
    const input = screen.getByLabelText(/label/i)
    const text = 'hey you'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })
})
