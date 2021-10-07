import { InputHTMLAttributes, useState, ChangeEvent } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value
    setValue(newValue)
  }
  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type="text" value={value} onChange={onChange} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
