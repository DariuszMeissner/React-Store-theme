import React, { FC } from 'react'

interface IProps {
  price: number
}

const style = {
  marginTop: '20px'
}

const ItemPrice: FC<IProps> = ({ price }) => {
  return (
    <div className="price-label" style={style}>
      <span>£&nbsp;</span>
      <span>{price}</span>
    </div>
  )
}

export default ItemPrice
