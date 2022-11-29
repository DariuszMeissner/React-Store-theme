/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { IoCartOutline, IoCloseOutline } from 'react-icons/io5'
// import { HiSearch } from 'react-icons/hi'
import { AiOutlineMenu } from 'react-icons/ai'
import { useSizeScreen } from '../../../../hooks'
import { Button, Logo } from '../../../../components'
import { RootState } from '../../../../api/feature/store'
import { selectAllProductsCart } from '../../../../api/feature/cart-slice/cartSlice'
import MODALS from '../../../../util/modalsID'

interface IProps {
  onClick: (id: number) => void
}

const HeaderTop: FC<IProps> = ({ onClick }) => {
  const screen = useSizeScreen()
  const allProductsCart = useSelector(selectAllProductsCart)
  const activeModal = useSelector((state: RootState) => state.modal.registered)

  const style = {
    headerTop: {
      position: 'relative',
      zIndex: 6,
      height: '100%',
      width: '100%',
      color: 'white',
      background: 'black',
      display: 'flex',
      alignItems: 'center'
    },
    w50: { width: '50%' },
    alignEnd: { display: 'flex', justifyContent: 'end' },
    cartIcon: {
      base: {
        position: 'relative'
      },
      active: {
        borderBottom:
          activeModal === MODALS.CART_ID
            ? '1px solid #da291c'
            : '1px solid transparent',
        transition: '300ms ease-in'
      }
    },
    itemNumbers: {
      position: 'absolute',
      bottom: 8,
      right: 8,
      height: 20,
      width: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      fontSize: 12,
      background: '#da291c'
    }
  } as const

  return (
    <div className="header-top wrap" style={style.headerTop}>
      <div style={style.w50}>
        {screen.isX ? (
          <div />
        ) : (
          // <Button text="Contact us" path="/" />
          <Button
            type="button"
            label="hamburger-menu"
            onClick={() => onClick(MODALS.MENU_ID)}
            icon={
              activeModal === MODALS.MENU_ID ? IoCloseOutline : AiOutlineMenu
            }
          />
        )}
      </div>

      <Logo />

      <div style={{ ...style.w50, ...style.alignEnd }}>
        {/* search button */}
        {/* <Button label="search" onClick={() => {}} icon={HiSearch} /> */}

        <div style={style.cartIcon.base}>
          <Button
            type="button"
            label="cart"
            onClick={() => onClick(MODALS.CART_ID)}
            icon={IoCartOutline}
            styleCss={style.cartIcon.active}>
            {/* count products badge */}
            {allProductsCart.length !== 0 && (
              <span style={style.itemNumbers}>{allProductsCart.length}</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
