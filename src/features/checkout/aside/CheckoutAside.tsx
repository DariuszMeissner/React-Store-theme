import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectIsStep } from '../../../api/feature/checkout/checkoutSlice'
import { useSizeScreen } from '../../../hooks'
import CheckoutSubtotal from './first-step/CheckoutSubtotal'
import CheckoutOrderReview from './second-step/CheckoutOrderReview'

const CheckoutAside: FC = () => {
  const screen = useSizeScreen()
  const isStep = useSelector(selectIsStep)

  const style = {
    aside: {
      width: '100%',
      maxWidth: screen.isX || screen.isL ? '33.333%' : undefined,
      marginLeft: screen.isX || screen.isL ? 32 : undefined
    }
  }

  return (
    <div className="checkout-aside" style={style.aside}>
      {/* step 1 */}
      {isStep.cart && <CheckoutSubtotal />}

      {/* step 2 */}
      {isStep.confirmation && <CheckoutOrderReview />}
    </div>
  )
}

export default CheckoutAside
