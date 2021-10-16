import { useState } from 'react'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

export type Field = {
  label: string
  name: string
}

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  fields: Field[]
}

export type CheckedValues = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: CheckedValues
  onFilter: (values: CheckedValues) => void
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const handleFilter = () => {
    onFilter(values)
  }
  const handleChange = (name: string, value: boolean | string) => {
    setValues((oldValues) => ({ ...oldValues, [name]: value }))
  }
  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading lineBottom lineColor="secondary" size="small">
            {item.title}
          </Heading>
          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                isChecked={!!values[field.name]}
                onCheck={(value) => handleChange(field.name, value)}
              />
            ))}
          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                key={field.name}
                id={field.name}
                value={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                defaultChecked={field.name === values[item.name]}
                onChange={() => handleChange(item.name, field.name)}
              />
            ))}
        </div>
      ))}
      <Button fullWidth size="medium" onClick={handleFilter}>
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar