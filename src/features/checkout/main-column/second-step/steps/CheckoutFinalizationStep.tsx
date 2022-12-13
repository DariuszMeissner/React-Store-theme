import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  clearCart,
  selectAllProductsCart,
  totalPrice
} from '../../../../../api/feature/cart-slice/cartSlice'
import {
  saveOrder,
  selectPaymentDeliveryShipping
} from '../../../../../api/feature/checkout/checkoutSlice'
import CheckoutButtonPurchase from '../../../CheckoutButtonPurchase'

interface IProps {
  id: string
  activeStep: string | undefined
}

const style = {
  wrapper: {
    backgroundColor: '#f6f6f6',
    padding: 20,
    margin: 25
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    marginBottom: 25
  },
  acceptConditions: {
    marginBottom: 15,
    fontWeight: 300
  },
  checkData: {
    marginBottom: 15,
    fontWeight: 300
  },
  buttonWrapper: {
    textAlign: 'center'
  }
} as const

const CheckoutFinalizationStep: FC<IProps> = ({ id, activeStep }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productsCart = useSelector(selectAllProductsCart)
  const userDetails = useSelector(selectPaymentDeliveryShipping)
  const cartTotal = useSelector(totalPrice)

  const modifyStep = activeStep === id

  function orderNumber(): string {
    let now = Date.now().toString()
    now += now + Math.floor(Math.random() * 10)

    return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
  }

  function navToThankYouPage(): void {
    navigate('/thank-you')
  }

  function clearCartProducts(): void {
    dispatch(clearCart())
  }

  function saveUserOrder(): void {
    dispatch(
      saveOrder({
        number: orderNumber(),
        email: userDetails.email,
        subtotal: cartTotal,
        products: productsCart,
        shippingAddress: { ...userDetails.shippingAddress },
        delivery: userDetails.delivery,
        payment: userDetails.payment
      })
    )
  }

  const placeOrder = () => {
    saveUserOrder()
    navToThankYouPage()
    clearCartProducts()
  }

  return modifyStep ? (
    <div className="finalizationStep" style={style.wrapper}>
      <h2 style={style.title}>
        Summary of the main terms and conditions of sale
      </h2>
      <p style={style.acceptConditions}>
        General Terms and Conditions of Sale are applied to your orders. By
        concluding your order, you agree that payment will be taken and that you
        accept these conditions.
      </p>
      <p style={style.checkData}>
        Verify all details of your purchase before completing the order.
      </p>

      <div style={style.buttonWrapper}>
        <CheckoutButtonPurchase
          text="Buy"
          onClick={placeOrder}
          styleCss={{ width: 140 }}
        />
      </div>
    </div>
  ) : null
}

export default CheckoutFinalizationStep
