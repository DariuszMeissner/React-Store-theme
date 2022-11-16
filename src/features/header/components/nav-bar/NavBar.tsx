import React, { FC } from 'react'
import Button from '../../../../components/button/Button'
import MENU_ITEM from '../../utils/mainMenu.config'
import './NavBar.scss'

const NavBar: FC = () => {
  const generateMenuDesktopItem = () => {
    return MENU_ITEM.map((item) => {
      return (
        <li key={item}>
          <Button text={item} variant="underline" path={`/${item}`} />
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
