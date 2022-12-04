import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { useSizeScreen } from '../../../hooks'
import CheckoutCartReview from './first-step/CheckoutCartReview'
import CheckoutProgressBar from './CheckoutProgressBar'
import CheckoutConfirmationStep from './second-step/CheckoutConfirmationStep'
import { selectIsStep } from '../../../api/feature/checkout/checkoutSlice'

const CheckoutMain: FC = () => {
  const screen = useSizeScreen()
  const isStep = useSelector(selectIsStep)

  const style = {
    main: {
      width: '100%',
      maxWidth: screen.isX || screen.isL ? '66.666%' : undefined,
      marginBottom: 48
    }
  }

  return (
    <div className="checkout-main" style={style.main}>
      <CheckoutProgressBar />

      {/* step 1 */}
      {isStep.cart && <CheckoutCartReview />}

      {/* step 2 */}
      {isStep.confirmation && <CheckoutConfirmationStep />}
    </div>
  )
}

export default CheckoutMain
