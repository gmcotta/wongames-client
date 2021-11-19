import { screen, render } from 'utils/testUtils'

import TextContent, { TextContentProps } from '.'

const props: TextContentProps = {
  title: 'Description',
  content: `<h1>Test content</h1>`
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    render(<TextContent {...props} />)
    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /test content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    render(<TextContent content={props.content} />)
    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /test content/i })
    ).toBeInTheDocument()
  })

  it('should render the text colors properly', () => {
    render(<TextContent {...props} />)
    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement
    expect(wrapper).toHaveStyle({ color: '#FAFAFA' })
    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
