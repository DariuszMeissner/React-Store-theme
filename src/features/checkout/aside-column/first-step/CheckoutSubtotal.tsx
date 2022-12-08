import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectAllShippingMethods } from '../../../../api/feature/checkout/checkoutSlice'
import { Button } from '../../../../components'
import CheckoutPriceSubtotal from '../CheckoutPriceSubtotal'

const style = {
  wrapper: {
    background: '#F6F6F6',
    padding: 25
  },
  shipping: {
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
    border: '1px solid'
  }
} as const

const CheckoutSubtotal: FC = () => {
  const shippingMethods = useSelector(selectAllShippingMethods)

  return (
    <div className="checkout-order-summary" style={style.wrapper}>
      {/* subtotal */}
      <CheckoutPriceSubtotal />

      {/* shipping method */}
      <p style={style.shipping.label}>Shipping method&nbsp;</p>
      {shippingMethods.map((method) => (
        <div style={style.shipping.method}>{method}</div>
      ))}

      {/* proceed to purchase */}
      <Button
        type="link"
        text="Procced to purchase"
        path="/checkout/confirmation"
        variant="black"
        styleCss={style.procced}
      />
    </div>
  )
}

export default CheckoutSubtotal
