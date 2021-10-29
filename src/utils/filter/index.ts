import { ItemProps } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

export type FilterItemProps = Pick<ItemProps, 'name' | 'type'>

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: FilterItemProps[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}
  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)
      const isNotCheckbox = item?.type !== 'checkbox'
      obj[key] = isNotCheckbox
        ? queryString[key]
        : { name_contains: queryString[key] }
    })
  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}
  Object.keys(queryString).forEach((key) => {
    const item = filterItems.find((item) => item.name === key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])
    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })
  return obj
}
