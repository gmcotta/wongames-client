import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextContent, { TextContentProps } from '.'

const props: TextContentProps = {
  title: 'Description',
  content: `<h1>Test content</h1>`
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)
    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /test content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)
    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /test content/i })
    ).toBeInTheDocument()
  })

  it('should render the text colors properly', () => {
    renderWithTheme(<TextContent {...props} />)
    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement
    expect(wrapper).toHaveStyle({ color: '#FAFAFA' })
    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
