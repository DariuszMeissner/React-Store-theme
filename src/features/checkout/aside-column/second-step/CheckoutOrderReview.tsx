import React, { FC } from 'react'
import CheckoutCartReview from '../../main-column/first-step/CheckoutCartReview'
import CheckoutPriceSubtotal from '../CheckoutPriceSubtotal'
import CheckoutOrderReviewTitle from './CheckoutOrderReviewTitle'

const style = {
  wrapper: {
    background: '#F6F6F6',
    padding: 25
  },
  priceSubtotal: {
    marginTop: 20
  }
}

const CheckoutOrderReview: FC = () => {
  return (
    <div style={style.wrapper}>
      <CheckoutOrderReviewTitle />
      <CheckoutCartReview />
      <div style={style.priceSubtotal}>
        <CheckoutPriceSubtotal />
      </div>
    </div>
  )
}

export default CheckoutOrderReview
