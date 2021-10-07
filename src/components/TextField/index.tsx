import { InputHTMLAttributes, useState, ChangeEvent, ReactNode } from 'react'
import * as S from './styles'

export type IconPositionOptions = 'left' | 'right'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: ReactNode
  iconPosition?: IconPositionOptions
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }
  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper hasIcon={!!icon} iconPosition={iconPosition}>
        {iconPosition === 'left' && icon}
        <S.Input
          type="text"
          value={value}
          onChange={onChange}
          {...props}
          disabled={disabled}
        />
        {iconPosition === 'right' && icon}
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
