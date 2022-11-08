import React, { FC } from 'react'
import LinkItem from '../../../../components/link-item/LinkItem'
import MENU_ITEM from '../../utils/mainMenu.config'
import './NavBar.scss'

const NavBar: FC = () => {
  const generateMenuDesktopItem = () => {
    return MENU_ITEM.map((item) => {
      return (
        <li>
          <LinkItem
            text={item}
            variant="underline"
            path={`/${item}`}
            key={item}
          />
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
