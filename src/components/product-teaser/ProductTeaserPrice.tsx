import React, { FC } from 'react'

interface IProps {
  price: number | undefined
  currency: '€' | '$' | '£' | 'zl'
}

const style = {
  priceContainer: {
    marginTop: '10px'
  }
} as const

const ProductTeaserPrice: FC<IProps> = ({ price, currency }) => {
  return (
    <div style={style.priceContainer}>
      <span>{price ? currency : ''}</span>&nbsp;
      <span>{price || 'no price'}</span>
    </div>
  )
}

export default ProductTeaserPrice
