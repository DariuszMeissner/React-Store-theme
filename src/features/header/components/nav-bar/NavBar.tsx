import React, { FC } from 'react'
import ButtonLink from '../../../../components/button-link/ButtonLink'
import MENU_ITEM from '../../utils/mainMenu.config'
import './NavBar.scss'

const NavBar: FC = () => {
  const generateMenuDesktopItem = () => {
    return MENU_ITEM.map((item) => {
      return (
        <li key={item}>
          <ButtonLink text={item} variant="underline" path={`/${item}`} />
        </li>
      )
    })
  }

  const menuListNavBar = generateMenuDesktopItem()

  return (
    <nav className="nav wrap">
      <ul>{menuListNavBar}</ul>
    </nav>
  )
}

export default NavBar
