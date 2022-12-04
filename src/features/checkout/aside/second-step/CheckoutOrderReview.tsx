import React, { FC } from 'react'
import CheckoutCartReview from '../../main/first-step/CheckoutCartReview'
import CheckoutPriceSubtotal from '../CheckoutPriceSubtotal'

const style = {
  background: '#F6F6F6',
  padding: 25
}

const CheckoutOrderReview: FC = () => {
  return (
    <div style={style}>
      <CheckoutCartReview />
      <CheckoutPriceSubtotal />
    </div>
  )
}

export default CheckoutOrderReview
