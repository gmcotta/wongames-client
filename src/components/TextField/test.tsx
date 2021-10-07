import { Email } from '@styled-icons/material-outlined'
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

  it('should be accessible by tab', () => {
    renderWithTheme(<TextField label="label" labelFor="field" id="field" />)
    expect(document.body).toHaveFocus()
    const input = screen.getByLabelText(/label/i)
    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should render with icon on left side', () => {
    renderWithTheme(
      <TextField
        label="label"
        labelFor="field"
        id="field"
        icon={<Email data-testid="icon" />}
      />
    )
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with icon on right side', () => {
    renderWithTheme(
      <TextField
        label="label"
        labelFor="field"
        id="field"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    )
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toHaveStyle({
      'margin-left': '1.6rem'
    })
  })

  it('should render with disabled property', () => {
    const { container } = renderWithTheme(
      <TextField label="label" labelFor="field" id="field" disabled />
    )
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not change value when it is disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        label="label"
        labelFor="field"
        id="field"
        disabled
        onInput={onInput}
      />
    )
    const input = screen.getByLabelText(/label/i)
    const text = 'hey you'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
      expect(onInput).not.toHaveBeenCalled()
    })
  })

  it('should not be accessible by tab when it is disabled', () => {
    renderWithTheme(
      <TextField label="label" labelFor="field" id="field" disabled />
    )
    expect(document.body).toHaveFocus()
    const input = screen.getByLabelText(/label/i)
    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
