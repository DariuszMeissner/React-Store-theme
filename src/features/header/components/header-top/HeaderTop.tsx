import React, { FC, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { HiSearch } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'
import './HeaderTop.scss'
import IconButton from '../../../../components/IconButton'
import Logo from '../../../../components/Logo'
import useSizeScreen from '../../../../hooks/useSizeScreen'
import LinkItem from '../../../../components/link-item/LinkItem'
import Overlay from '../../../../components/Overlay'

const Cart = React.lazy(() => import('../../../cart/components/Cart'))
const Modal = React.lazy(() => import('../../../../components/Modal'))
const AnimationCss = React.lazy(
  () => import('../../../../components/animationCss/AnimationCss')
)
const MenuMobile = React.lazy(() => import('../menu-mobile/MenuMobile'))

const HeaderTop: FC = () => {
  const screen = useSizeScreen()
  const [isMountedMenuMobile, setIsMountedMenuMobile] = useState<boolean>(false)
  const [isMountedCart, setIsMountedCart] = useState<boolean>(false)

  const showModalOnClick = () => {
    setIsMountedMenuMobile((prev) => !prev)
    setIsMountedCart(false)
  }

  const closeModalOnClick = () => {
    setIsMountedMenuMobile(false)
  }

  const showCartOnClick = () => {
    setIsMountedCart((prev) => !prev)
    setIsMountedMenuMobile(false)
  }

  const closeCartOnClick = () => {
    setIsMountedCart(false)
  }

  return (
    <>
      <div className="header__top wrap">
        <div className="header__section w-50">
          {screen.isL ? (
            <LinkItem text="Contact us" path="/" />
          ) : (
            <IconButton
              label="hamburger-menu"
              onClick={showModalOnClick}
              icon={GiHamburgerMenu}
            />
          )}
        </div>

        <div className="header__logo">
          <Logo width="100px" />
        </div>
        <div className="header__section w-50 d-flex justify-content-end">
          <IconButton label="search" onClick={() => {}} icon={HiSearch} />
          <IconButton
            label="cart"
            onClick={showCartOnClick}
            icon={IoCartOutline}
          />
        </div>
      </div>

      <AnimationCss isMounted={isMountedMenuMobile} variant="fadeLeft">
        <Modal closeOnClick={closeModalOnClick} modalPosition="left">
          <MenuMobile closeOnClick={closeModalOnClick} />
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

export default HeaderTop
