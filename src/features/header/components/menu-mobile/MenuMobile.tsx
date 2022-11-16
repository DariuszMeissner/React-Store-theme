/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { Button } from '../../../../components'
import { useSizeScreen } from '../../../../hooks'
import MENU_ITEM from '../../utils/mainMenu.config'

interface IProps {
  closeOnClick: () => void
}

const MenuMobile: FC<IProps> = ({ closeOnClick }) => {
  const screen = useSizeScreen()

  const style = {
    linkItem: { marginBottom: '20px' },
    textLink: {
      color: 'black',
      fontSize: '1rem',
      marginLeft: 0,
      marginRight: 0
    },
    menuTop: {
      display: 'flex',
      justifyContent: screen.isS ? 'center' : 'space-between',
      marginBottom: '50px',
      position: 'relative'
    },
    menuBreadcrumb: { fontSize: '1.5rem' },
    menuList: { textAlign: screen.isS ? 'center' : undefined },
    iconButtonClose: {
      color: 'black',
      position: screen.isS ? 'absolute' : undefined,
      top: 0,
      right: 0
    }
  } as const

  const generateMenuMobileItem = () => {
    return MENU_ITEM.map((item) => {
      return (
        <li id={item} style={style.linkItem} key={item} onClick={closeOnClick}>
          <Button
            text={item}
            variant="underline"
            path={`/${item}`}
            styleCss={style.textLink}
          />
        </li>
      )
    })
  }
  const menuList = generateMenuMobileItem()

  return (
    <>
      <div style={style.menuTop}>
        <div style={style.menuBreadcrumb}>Menu</div>
        <Button
          label="icon-close"
          icon={IoCloseOutline}
          onClick={closeOnClick}
          styleCss={style.iconButtonClose}
        />
      </div>
      <ul style={style.menuList}>{menuList}</ul>
    </>
  )
}

export default MenuMobile
