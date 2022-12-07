import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectAllShippingMethods } from '../../../../api/feature/checkout/checkoutSlice'
import { Button } from '../../../../components'
import CheckoutPriceSubtotal from '../CheckoutPriceSubtotal'

const style = {
  shipping: {
    wrapper: {},
    label: {
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: 10
    },
    method: {
      lineHeight: '25px',
      fontWeight: 300
    }
  },
  procced: {
    width: '100%',
    marginLeft: '0',
    border: '1px solid',
    padding: 10
  }
} as const

const CheckoutOrderSummary: FC = () => {
  const shippingMethods = useSelector(selectAllShippingMethods)

  return (
    <div className="checkout-order-summary">
      {/* subtotal */}
      <CheckoutPriceSubtotal />

      {/* shipping method */}
      <div style={style.shipping.wrapper}>
        <p style={style.shipping.label}>Shipping method:&nbsp;</p>
        {shippingMethods.map((method) => (
          <div style={style.shipping.method}>{method}</div>
        ))}
      </div>

      {/* proceed to purchase */}
      <Button
        type="button-link"
        text="Procced to purchase"
        path="/checkout/confirmation"
        variant="black"
        styleCss={style.procced}
      />
    </div>
  )
}

export default CheckoutOrderSummary
