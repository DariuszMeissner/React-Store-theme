import React, { FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  selectAllProductsCart,
  totalPrice
} from '../../../api/feature/cart-slice/cartSlice'
import { Button, Headline2 } from '../../../components'
import CartItem from './CartItem'
import CountLabel from './CountLabel'
import CartSubtotal from './CartSubtotal'

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
    maxHeight: '45vh',
    height: '100%',
    overflow: 'auto'
  },
  cartInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  procced: {
    width: '250px',
    marginTop: 40
  }
} as const

const Cart: FC<IProps> = ({ closeOnClick }) => {
  const navigate = useNavigate()
  const allProductsCart = useSelector(selectAllProductsCart)
  const cartTotal = useSelector(totalPrice)

  const generateCartList = () => {
    return allProductsCart.map((product) => (
      <CartItem product={product} key={product.id} />
    ))
  }

  const cartList = generateCartList()

  const navToCheckoutAndClose = () => {
    navigate('/checkout/cart')
    closeOnClick()
  }

  return (
    <div className="cart">
      <div style={style.cartTop}>
        <Button
          label="icon-close"
          icon={IoCloseOutline}
          onClick={closeOnClick}
          styleCss={style.iconButtonClose}
        />
      </div>
      <Headline2>Shopping Bag</Headline2>

      {/* show products */}
      {cartList.length > 0 && (
        <>
          {/* cart info */}
          <div style={style.cartInfo}>
            <CountLabel count={cartList.length} />
            <CartSubtotal subtotal={cartTotal} />
          </div>

          {/* listing products */}
          <div style={style.cartList}>{cartList}</div>

          {/* go to checkout */}
          <Button
            text="Procced to purchase"
            onClick={navToCheckoutAndClose}
            variant="white"
            styleCss={style.procced}
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
