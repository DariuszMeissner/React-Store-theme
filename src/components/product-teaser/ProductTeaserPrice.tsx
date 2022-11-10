import React, { FC } from 'react'

interface IProps {
  price: number | undefined
}

const ProductTeaserPrice: FC<IProps> = ({ price }) => {
  return <div>{price}</div>
}

export default ProductTeaserPrice
