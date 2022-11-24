import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerModal } from '../../../../api/feature/modal-slice/modalSlice'
import { RootState } from '../../../../api/feature/store'
import { Overlay } from '../../../../components'
import Button from '../../../../components/button/Button'
import { useDisableScroll } from '../../../../hooks'
import MODALS from '../../../../util/modalsID'
import MENU_ITEM from '../../utils/mainMenu.config'
import MegaNav from '../mega-nav/MegaNav'

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
    height: '60px',
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
    color: 'white'
  },
  activeLink: {
    borderBottom: '2px solid black'
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
          <Button
            text={item.label}
            variant="underline"
            onClick={() => openMegaNav(item.id)}
            styleCss={style.itemLink}
            activeCss={style.activeLink}
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
          />
        )
      })}
    </div>
  )
}

export default NavBar
