import 'match-media-fake'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/CardGameSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cartListMock from 'components/CartList/mock'

import Cart, { CartTemplateProps } from '.'

const props: CartTemplateProps = {
  recommendedGames: gamesMock.slice(0, 2),
  recommendedHighlight: highlightMock,
  items: cartListMock,
  total: 'R$ 430,00'
}

describe('<Cart />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
  })
})
