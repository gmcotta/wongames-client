import { render } from 'utils/testUtils'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          A simple <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  font-size: 1.4rem;
  color: #030517;
  text-align: center;
}

.c0 a {
  color: #3CD3C1;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-bottom: 0.1rem solid #3CD3C1;
  -webkit-transition: color,border,0.1s ease-in-out;
  transition: color,border,0.1s ease-in-out;
}

.c0 a:hover {
  -webkit-filter: brightness(0.9);
  filter: brightness(0.9);
}

<div
  class=""
>
  <div
    class="c0"
  >
    A simple 
    <a
      href="#"
    >
      link
    </a>
  </div>
</div>
`)
  })
})
