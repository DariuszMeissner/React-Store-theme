import React, { FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import {
  selectAllProductsCart,
  totalPrice
} from '../../../api/feature/cart-slice/cartSlice'
import { Button, Headline2 } from '../../../components'
import CartItem from './CartItem'
import CountLabel from './CountLabel'
import Subtotal from './Subtotal'

interface IProps {
  closeOnClick: () => void
}

const style = {
  cartTop: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    position: 'relative'
  },
  iconButtonClose: {
    color: 'black',
    position: 'absolute',
    marginRight: 0,
    top: 0,
    right: 0
  },
  cartList: {
    height: '45vh',
    overflow: 'auto'
  },
  cartInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  headline2: {
    textAlign: 'left'
  }
} as const

const Cart: FC<IProps> = ({ closeOnClick }) => {
  const allProductsCart = useSelector(selectAllProductsCart)
  const cartTotal = useSelector(totalPrice)

  const generateCartList = () => {
    return allProductsCart.map((product) => (
      <CartItem product={product} key={product.id} />
    ))
  }

  const cartList = generateCartList()

  return (
    <>
      <div style={style.cartTop}>
        <Button
          label="icon-close"
          icon={IoCloseOutline}
          onClick={closeOnClick}
          styleCss={style.iconButtonClose}
        />
      </div>
      <Headline2 styleCss={style.headline2}>Shopping Bag</Headline2>

      {cartList.length > 0 && (
        <div style={style.cartInfo}>
          <CountLabel count={cartList.length} />
          <Subtotal subtotal={cartTotal} />
        </div>
      )}
      <ul style={style.cartList}>
        {cartList.length === 0 ? <p>no item in cart</p> : cartList}
      </ul>
      <Button
        text="Procced to purchase"
        path="/checkout"
        variant="white"
        styleCss={{ width: '250px', marginLeft: '0' }}
      />
    </>
  )
}

export default Cart
