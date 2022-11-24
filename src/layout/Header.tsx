import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerModal } from '../api/feature/modal-slice/modalSlice'
import { RootState } from '../api/feature/store'
import { AnimationCss, Modal, Overlay } from '../components'
import { Cart, MenuMobile } from '../features'
import HeaderTop from '../features/header/components/header-top/HeaderTop'
import NavBar from '../features/header/components/nav-bar/NavBar'
import { useDisableScroll, useSticky } from '../hooks'
import useSizeScreen from '../hooks/useSizeScreen'
import MODALS from '../util/modalsID'

const Header: FC = () => {
  const screen = useSizeScreen()
  const dispatch = useDispatch()

  const [isSticky, ref] = useSticky()

  const { lockScroll, unlockScroll } = useDisableScroll()

  const activeModal = useSelector((state: RootState) => state.modal.registered)

  const handleRegisterModal = (id: number | null) => {
    if (activeModal === id) {
      dispatch(registerModal(null))
      unlockScroll()
    } else {
      dispatch(registerModal(id))
      lockScroll()
    }
  }

  const positionSticky = isSticky ? 'translateY(-60px)' : 'translateY(0)'

  const style = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 6,
      transform: screen.isX ? positionSticky : undefined,
      transition: 'transform 300ms'
    },
    headerTop: {
      height: 60
    },
    modalCart: {
      padding: 36
    },
    modalMenu: {
      padding: 36
    }
  } as const

  return (
    <>
      <header style={style.header} ref={ref}>
        {/* header top */}
        <div style={style.headerTop}>
          <HeaderTop onClick={handleRegisterModal} />
        </div>
        {/* navbar */}
        {screen.isX && <NavBar />}

        {/* menu modal */}
        <AnimationCss
          isMounted={activeModal === MODALS.MENU_ID}
          variant="fadeLeft">
          <Modal
            id={MODALS.MENU_ID}
            closeOnClick={() => handleRegisterModal(MODALS.MENU_ID)}
            modalPosition="left"
            styleCss={style.modalMenu}>
            <MenuMobile
              closeOnClick={() => handleRegisterModal(MODALS.MENU_ID)}
            />
          </Modal>
        </AnimationCss>

        {/* cart modal */}
        <AnimationCss
          isMounted={activeModal === MODALS.CART_ID}
          variant="fadeRight">
          <Modal
            id={MODALS.CART_ID}
            closeOnClick={() => handleRegisterModal(MODALS.CART_ID)}
            modalPosition="right"
            styleCss={style.modalCart}>
            <Cart closeOnClick={() => handleRegisterModal(MODALS.CART_ID)} />
          </Modal>
        </AnimationCss>
      </header>
      {/* add overlay */}
      {activeModal === MODALS.CART_ID || activeModal === MODALS.MENU_ID ? (
        <Overlay />
      ) : undefined}
    </>
  )
}

export default Header
