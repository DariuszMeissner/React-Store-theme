import React, { FC } from 'react'

interface IProps {
  subtotal: number
}

const CartSubtotal: FC<IProps> = ({ subtotal }) => {
  return (
    <div className="subtotal-label">
      <span>Subtotal:&nbsp;</span>
      <span>£&nbsp;</span>
      <span>{subtotal}</span>
    </div>
  )
}

export default CartSubtotal
