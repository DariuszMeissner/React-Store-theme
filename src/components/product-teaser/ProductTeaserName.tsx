import React, { FC } from 'react'

interface IProps {
  name: string | undefined
}

const ProductTeaserName: FC<IProps> = ({ name }) => {
  return <div>{name}</div>
}

export default ProductTeaserName
