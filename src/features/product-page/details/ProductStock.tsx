import React, { FC } from 'react'

interface IProps {
  stock: number | string
}

const style = {
  stockContainer: {
    marginTop: 50
  }
} as const

const ProductStock: FC<IProps> = ({ stock }) => {
  return (
    <div style={style.stockContainer}>
      <span>Stock:</span>&nbsp;
      <span>{stock || 'no stock'}</span>
    </div>
  )
}

export default ProductStock
