/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import React from 'react'

interface IProps<T> {
  data: T[]
  renderItem: (item: T) => JSX.Element
}

const Lists = <T extends unknown>({ data, renderItem }: IProps<T>) => {
  return <>{data?.map((item) => renderItem(item))}</>
}

export default Lists
