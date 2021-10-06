import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input``

type LabelProps = Pick<RadioProps, 'labelColor'>
export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
    line-height: 1;
    cursor: pointer;
  `}
`
