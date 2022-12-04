import React, { FC } from 'react'
import CheckoutOrderSummary from './CheckoutOrderSummary'

const style = {
  background: '#F6F6F6',
  padding: 25
}

const CheckoutSubtotal: FC = () => {
  return (
    <div style={style}>
      <CheckoutOrderSummary />
    </div>
  )
}

export default CheckoutSubtotal
