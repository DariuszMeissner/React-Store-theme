import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAllShippingMethods } from '../../../../api/feature/checkout/checkoutSlice'
import { Button } from '../../../../components'
import Lists from '../../../../components/Lists'
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
  const navigate = useNavigate()
  const shippingMethods = useSelector(selectAllShippingMethods)

  const renderListElement = (method: string) => {
    return <div style={style.shipping.method}>{method}</div>
  }

  return (
    <div className="checkout-order-summary" style={style.wrapper}>
      {/* subtotal */}
      <CheckoutPriceSubtotal />

      {/* shipping method */}
      <p style={style.shipping.label}>Shipping method&nbsp;</p>

      {/* available shipping methods */}
      <Lists data={shippingMethods} renderItem={renderListElement} />

      {/* proceed to purchase */}
      <Button
        text="Procced to purchase"
        onClick={() => navigate('/checkout/confirmation')}
        variant="black"
        styleCss={style.procced}
      />
    </div>
  )
}

export default CheckoutSubtotal
