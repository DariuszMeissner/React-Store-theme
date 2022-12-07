import React, { FC } from 'react'
import CheckoutCheckMailStep from './steps/CheckoutCheckMailStep'

const CheckoutConfirmationStep: FC = () => {
  return (
    <div className="checkout-confirmation-steps">
      {/* step 1 of 4 */}
      <CheckoutCheckMailStep />
    </div>
  )
}

export default CheckoutConfirmationStep
