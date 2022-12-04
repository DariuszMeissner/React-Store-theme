import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { totalPrice } from '../../../api/feature/cart-slice/cartSlice'

const style = {
  subtotal: {
    wrapper: {
      textTransform: 'uppercase',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 40
    },
    label: {
      fontWeight: 500
    },
    price: {
      fontWeight: 300
    }
  }
} as const

const CheckoutPriceSubtotal: FC = () => {
  const cartTotal = useSelector(totalPrice)

  return (
    <div style={style.subtotal.wrapper}>
      <p style={style.subtotal.label}>Subtotal:&nbsp;</p>
      <div style={style.subtotal.price}>
        <span>£&nbsp;</span>
        <span>{cartTotal}</span>
      </div>
    </div>
  )
}

export default CheckoutPriceSubtotal
