import React, { FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllProductsCart,
  totalPrice
} from '../../../api/feature/cart-slice/cartSlice'
import { registerModal } from '../../../api/feature/modal-slice/modalSlice'
import { Button, Headline2 } from '../../../components'
import { useDisableScroll } from '../../../hooks'
import CartItem from './CartItem'
import CountLabel from './CountLabel'
import Subtotal from './Subtotal'

interface IProps {
  closeOnClick: () => void
}

const style = {
  container: {
    padding: 20
  },
  cartTop: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
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
    marginBottom: 20
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
    <div className="cart-modal">
      <div style={style.cartTop}>
        <Button
          type="button"
          label="icon-close"
          icon={IoCloseOutline}
          onClick={closeOnClick}
          styleCss={style.iconButtonClose}
        />
      </div>
      <Headline2 styleCss={style.headline2}>Shopping Bag</Headline2>

      {/* show products */}
      {cartList.length > 0 && (
        <>
          {/* cart info */}
          <div style={style.cartInfo}>
            <CountLabel count={cartList.length} />
            <Subtotal subtotal={cartTotal} />
          </div>

          {/* listing products */}
          <div style={style.cartList}>{cartList}</div>

          {/* go to checkout button */}
          <Button
            type="button-link"
            text="Procced to purchase"
            path="/checkout"
            onClick={closeOnClick}
            variant="white"
            styleCss={{
              width: '250px',
              marginLeft: '0',
              color: 'black',
              border: '1px solid'
            }}
          />
        </>
      )}

      {/* no item in cart */}
      <ul style={style.cartList}>
        {cartList.length === 0 && <p>no item in cart</p>}
      </ul>
    </div>
  )
}

export default Cart
