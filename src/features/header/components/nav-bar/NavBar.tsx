import React, { FC } from 'react'
import Button from '../../../../components/button/Button'
import MENU_ITEM from '../../utils/mainMenu.config'

const NavBar: FC = () => {
  const style = {
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
      color: 'white',
      lineHeight: '2rem'
    }
  } as const

  const generateMenuDesktopItem = () => {
    return MENU_ITEM.map((item) => {
      return (
        <li key={item}>
          <Button
            text={item}
            variant="underline"
            path={`/${item}`}
            styleCss={style.itemLink}
          />
        </li>
      )
    })
  }

  const menuListNavBar = generateMenuDesktopItem()

  return (
    <nav className="nav wrap" style={style.nav}>
      <ul style={style.navItems}>
        <Button
          text="furniture"
          variant="underline"
          path="/products/furniture"
          styleCss={style.itemLink}
        />
        {menuListNavBar}
      </ul>
    </nav>
  )
}

export default NavBar
