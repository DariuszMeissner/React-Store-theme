import React, { FC } from 'react'
import { useSizeScreen } from '../../hooks'
import CheckoutAside from './aside/CheckoutAside'
import CheckoutMain from './main/CheckoutMain'

const CheckoutColumnWrapper: FC = () => {
  const screen = useSizeScreen()

  const style = {
    wrapper: {
      display: screen.isX || screen.isL ? 'flex' : 'block'
    }
  }
  return (
    <div className="checkout-wrapper" style={style.wrapper}>
      <CheckoutMain />
      <CheckoutAside />
    </div>
  )
}

export default CheckoutColumnWrapper
