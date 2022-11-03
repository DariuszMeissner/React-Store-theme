import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../features/cart/CartItem'
import {
  cartActions,
  selectAllProductsCart
} from '../api/feature/cart-slice/cartSlice'

const Cart: FC = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectAllProductsCart)

  useEffect(() => {
    if (cart) {
      console.log(cart)
    }
  }, [cart])

  const onClickClearCart = () => {
    dispatch(cartActions.clearCart())
  }

  return (
    <div>
      <CartItem id={1} />
      <button type="button" onClick={onClickClearCart}>
        clear cart
      </button>
    </div>
  )
}

export default Cart
