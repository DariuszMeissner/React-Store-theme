import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerModal } from '../../../../api/feature/modal-slice/modalSlice'
import { RootState } from '../../../../api/feature/store'
import { useDisableScroll } from '../../../../hooks'
import MENU_ITEM from '../../utils/mainMenu.config'
import MegaNav from '../mega-nav/MegaNav'
import NavBarButton from './NavBarButton'

const style = {
  container: {
    position: 'relative'
  },
  nav: {
    background: 'black',
    position: 'relative',
    top: 0,
    zIndex: 6,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'position 500ms'
  },
  navItems: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemLink: {
    color: 'white',
    lineHeight: '36px'
  },
  activeLink: {
    borderBottom: '2px solid red'
  }
} as const

const NavBar: FC = () => {
  const dispatch = useDispatch()
  const { lockScroll, unlockScroll } = useDisableScroll()

  // get active modal
  const activeModal = useSelector((state: RootState) => state.modal.registered)

  const openMegaNav = (modalId: number) => {
    if (activeModal === modalId) {
      dispatch(registerModal(null))
      unlockScroll()
    } else {
      lockScroll()
      dispatch(registerModal(modalId))
    }
  }

  const generateMenuDesktopItem = (): JSX.Element[] => {
    return MENU_ITEM.map((item) => {
      return (
        <li key={item.id}>
          <NavBarButton
            title={item.label}
            id={item.id}
            onClick={() => openMegaNav(item.id)}
          />
        </li>
      )
    })
  }

  const menuListNavBar = generateMenuDesktopItem()

  return (
    <div className="nav-container" style={style.container}>
      <nav className="nav wrap" style={style.nav}>
        <ul style={style.navItems}>{menuListNavBar}</ul>
      </nav>

      {MENU_ITEM.map((item) => {
        return (
          <MegaNav
            isOpen={activeModal === item.id}
            categories={item.categories}
            key={item.id}
          />
        )
      })}
    </div>
  )
}

export default NavBar
