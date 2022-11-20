import React, { FC } from 'react'

interface IProps {
  price: number | string
  currency: '€' | '$' | '£' | 'zl'
}

const style = {
  priceContainer: {
    fontSize: '22px',
    marginTop: '30px'
  }
} as const

const ProductPrice: FC<IProps> = ({ price, currency }) => {
  return (
    <div style={style.priceContainer}>
      <span>{price ? currency : ''}</span>&nbsp;
      <span>{price || 'no price'}</span>
    </div>
  )
}

export default ProductPrice
