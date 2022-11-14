/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoCartOutline } from 'react-icons/io5'
import { HiSearch } from 'react-icons/hi'
import { AiOutlineMenu } from 'react-icons/ai'
import './HeaderTop.scss'
import { useSizeScreen } from '../../../../hooks'
import {
  AnimationCss,
  ButtonIcon,
  ButtonLink,
  Logo,
  Modal,
  Overlay
} from '../../../../components'
import { modalActions } from '../../../../api/feature/modal-slice/modalSlice'
import MenuMobile from '../menu-mobile/MenuMobile'
import Cart from '../../../cart/components/Cart'
import { RootState } from '../../../../api/feature/store'

const HeaderTop: FC = () => {
  const dispatch = useDispatch()
  const screen = useSizeScreen()
  const isMountedMenuMobile = useSelector(
    (state: RootState) => state.modal.menuModal.isOpen
  )
  const isMountedCart = useSelector(
    (state: RootState) => state.modal.cartModal.isOpen
  )

  const showMenuOnClick = () => dispatch(modalActions.openMenuModal())

  const closeMenuOnClick = () => dispatch(modalActions.closeMenuModal())

  const showCartOnClick = () => dispatch(modalActions.openCartModal())

  const closeCartOnClick = () => dispatch(modalActions.closeCartModal())

  return (
    <>
      <div className="header-top wrap">
        <div style={style.w50}>
          {screen.isL ? (
            <ButtonLink text="Contact us" path="/" />
          ) : (
            <ButtonIcon
              label="hamburger-menu"
              onClick={showMenuOnClick}
              icon={AiOutlineMenu}
            />
          )}
        </div>

        <div className="header-logo">
          <Logo width="100px" />
        </div>
        <div style={{ ...style.w50, ...style.alignEnd }}>
          <ButtonIcon label="search" onClick={() => {}} icon={HiSearch} />
          <ButtonIcon
            label="cart"
            onClick={showCartOnClick}
            icon={IoCartOutline}
          />
        </div>
      </div>

      <AnimationCss isMounted={isMountedMenuMobile} variant="fadeLeft">
        <Modal closeOnClick={closeMenuOnClick} modalPosition="left">
          <MenuMobile closeOnClick={closeMenuOnClick} />
        </Modal>
      </AnimationCss>

      <AnimationCss isMounted={isMountedCart} variant="fadeRight">
        <Modal closeOnClick={closeCartOnClick} modalPosition="right">
          <Cart closeOnClick={closeCartOnClick} />
        </Modal>
      </AnimationCss>

      {isMountedMenuMobile ? <Overlay /> : undefined}
      {isMountedCart ? <Overlay /> : undefined}
    </>
  )
}

const style = {
  w50: { width: '50%' },
  alignEnd: { display: 'flex', justifyContent: 'end' }
}

export default HeaderTop
