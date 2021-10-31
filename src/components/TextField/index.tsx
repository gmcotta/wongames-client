import { InputHTMLAttributes, useState, ChangeEvent, ReactNode } from 'react'
import * as S from './styles'

export type IconPositionOptions = 'left' | 'right'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: ReactNode
  iconPosition?: IconPositionOptions
  disabled?: boolean
  errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInputChange,
  label,
  initialValue = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  errorMessage = '',
  name,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }
  return (
    <S.Wrapper disabled={disabled} hasError={!!errorMessage}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper hasIcon={!!icon} iconPosition={iconPosition}>
        {iconPosition === 'left' && icon}
        <S.Input
          type="text"
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
        {iconPosition === 'right' && icon}
      </S.InputWrapper>
      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Wrapper>
  )
}

export default TextField
