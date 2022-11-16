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
  Button,
  Logo,
  Modal,
  Overlay
} from '../../../../components'
import { modalActions } from '../../../../api/feature/modal-slice/modalSlice'
import MenuMobile from '../menu-mobile/MenuMobile'
import Cart from '../../../cart/components/Cart'
import { RootState } from '../../../../api/feature/store'
import MODALS from '../../../../util/modalsID'

const HeaderTop: FC = () => {
  const dispatch = useDispatch()
  const screen = useSizeScreen()
  const active = useSelector((state: RootState) => state.modal.registered)

  const registerModal = (id: number | null) => {
    if (active === id) {
      dispatch(modalActions.register(null))
    } else {
      dispatch(modalActions.register(id))
    }
  }

  return (
    <>
      <div className="header-top wrap">
        <div style={style.w50}>
          {screen.isX ? (
            <Button text="Contact us" path="/" />
          ) : (
            <Button
              label="hamburger-menu"
              onClick={() => registerModal(MODALS.MENU_ID)}
              icon={AiOutlineMenu}
            />
          )}
        </div>

        <div className="header-logo">
          <Logo />
        </div>
        <div style={{ ...style.w50, ...style.alignEnd }}>
          <Button label="search" onClick={() => {}} icon={HiSearch} />
          <Button
            label="cart"
            onClick={() => registerModal(MODALS.CART_ID)}
            icon={IoCartOutline}
          />
        </div>
      </div>

      <AnimationCss isMounted={active === MODALS.MENU_ID} variant="fadeLeft">
        <Modal
          id={MODALS.MENU_ID}
          closeOnClick={() => registerModal(null)}
          modalPosition="left">
          <MenuMobile closeOnClick={() => registerModal(null)} />
        </Modal>
      </AnimationCss>

      <AnimationCss isMounted={active === MODALS.CART_ID} variant="fadeRight">
        <Modal
          id={MODALS.CART_ID}
          closeOnClick={() => registerModal(null)}
          modalPosition="right">
          <Cart closeOnClick={() => registerModal(null)} />
        </Modal>
      </AnimationCss>

      {active ? <Overlay /> : undefined}
    </>
  )
}

const style = {
  w50: { width: '50%' },
  alignEnd: { display: 'flex', justifyContent: 'end' }
}

export default HeaderTop
