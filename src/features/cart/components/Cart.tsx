import React, { FC, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import {
  cartActions,
  selectAllProductsCart
} from '../../../api/feature/cart-slice/cartSlice'
import ButtonIcon from '../../../components/ButtonIcon'
import useSizeScreen from '../../../hooks/useSizeScreen'

interface IProps {
  closeOnClick: () => void
}

const Cart: FC<IProps> = ({ closeOnClick }) => {
  const dispatch = useDispatch()
  const cartAll = useSelector(selectAllProductsCart)
  const screen = useSizeScreen()

  const style = {
    cartTop: {
      display: 'flex',
      justifyContent: screen.isS ? 'center' : 'space-between',
      marginBottom: '50px',
      position: 'relative'
    },
    menuBreadcrumb: { fontSize: '1.5rem' },
    iconButtonClose: {
      color: 'black',
      position: screen.isS ? 'absolute' : undefined,
      top: 0,
      right: 0
    }
  } as const

  const generateCartList = () => {
    return cartAll.map((item) => <li>{item.title}</li>)
  }

  const cartList = generateCartList()

  const onClickClearCart = () => {
    dispatch(cartActions.clearCart())
  }
  return (
    <>
      <div style={style.cartTop}>
        <div style={style.menuBreadcrumb}>Menu</div>
        <ButtonIcon
          label="icon-close"
          icon={IoCloseOutline}
          onClick={closeOnClick}
          styleCss={style.iconButtonClose}
        />
      </div>
      <ul>{cartList.length === 0 ? <p>no item in cart</p> : cartList}</ul>
    </>
  )
}

export default Cart
