import { Email } from '@styled-icons/material-outlined'
import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'utils/testUtils'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    render(<TextField label="label" name="field" />)

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<TextField name="field" placeholder="example" />)

    expect(screen.getByPlaceholderText(/example/i)).toBeInTheDocument()
  })

  it('should change values when typing', async () => {
    const onInput = jest.fn()
    render(<TextField label="label" name="field" onInput={onInput} />)
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
    render(<TextField label="label" name="field" />)
    expect(document.body).toHaveFocus()
    const input = screen.getByLabelText(/label/i)
    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should render with icon on left side', () => {
    render(
      <TextField
        label="label"
        name="field"
        icon={<Email data-testid="icon" />}
      />
    )
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with icon on right side', () => {
    render(
      <TextField
        label="label"
        name="field"
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
    const { container } = render(
      <TextField label="label" name="field" disabled />
    )
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not change value when it is disabled', async () => {
    const onInput = jest.fn()
    render(<TextField label="label" name="field" disabled onInput={onInput} />)
    const input = screen.getByLabelText(/label/i)
    const text = 'hey you'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
      expect(onInput).not.toHaveBeenCalled()
    })
  })

  it('should not be accessible by tab when it is disabled', () => {
    render(<TextField label="label" name="field" disabled />)
    expect(document.body).toHaveFocus()
    const input = screen.getByLabelText(/label/i)
    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should render the error message', () => {
    const { container } = render(
      <TextField label="label" name="field" errorMessage="Error message" />
    )
    expect(screen.getByText(/error message/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
