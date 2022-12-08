import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { totalQuantity } from '../../../../api/feature/cart-slice/cartSlice'
import { Button } from '../../../../components'
import CountLabel from '../../../cart/components/CountLabel'

const style = {
  orderReview: {
    wrapper: {
      marginBottom: 25
    },
    labelContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 10
    },
    label: {
      textTransform: 'uppercase',
      fontWeight: 500
    },
    modify: {
      color: 'black',
      fontWeight: 300,
      margin: 0,
      borderBottom: '1px solid black'
    }
  }
} as const

const CheckoutOrderReviewTitle: FC = () => {
  const productNumber = useSelector(totalQuantity)
  return (
    <div style={style.orderReview.wrapper}>
      {/* label */}
      <div style={style.orderReview.labelContainer}>
        <p style={style.orderReview.label}>Order Review&nbsp;</p>

        <Button
          type="link"
          path="/checkout/cart"
          text="Modify"
          styleCss={style.orderReview.modify}
        />
      </div>

      {/* items number */}
      <CountLabel count={productNumber} />
    </div>
  )
}

export default CheckoutOrderReviewTitle
