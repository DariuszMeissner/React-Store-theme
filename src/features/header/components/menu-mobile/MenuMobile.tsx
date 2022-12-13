import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoCloseOutline } from 'react-icons/io5'
import { HiArrowLongRight } from 'react-icons/hi2'
import { Button, Headline2 } from '../../../../components'
import MENU_ITEM from '../../utils/mainMenu.config'
import { RootState } from '../../../../api/feature/store'
import MenuMobileLevel from './MenuMobileLevel'
import { registerMenu } from '../../../../api/feature/modal-slice/modalSlice'

interface IProps {
  closeOnClick: () => void
}

const style = {
  container: {
    padding: 15
  },
  itemLink: {
    width: '100%'
  },
  button: {
    color: 'black',
    fontSize: '1rem',
    marginLeft: 0,
    marginRight: 0,
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  menuTop: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end'
  },
  title: {
    display: 'flex'
  },
  iconButtonClose: {
    position: 'absolute',
    top: 15,
    right: 10,
    color: 'black',
    margin: 0
  },
  iconArrow: {
    height: 25,
    width: 25
  }
} as const

const MenuMobile: FC<IProps> = ({ closeOnClick }) => {
  const dispatch = useDispatch()

  // get active modal
  const activeMenu = useSelector(
    (state: RootState) => state.modal.mobileMenu.registered
  )

  const openLevel = (menuId: number, levelId: number) => {
    dispatch(registerMenu({ register: menuId, level: levelId }))
  }

  return (
    <>
      <div className="menu-mobile" style={style.container}>
        {/* close button */}
        <div style={style.menuTop}>
          <Button
            label="icon-close"
            icon={IoCloseOutline}
            onClick={closeOnClick}
            styleCss={style.iconButtonClose}
          />
        </div>

        {/* title */}
        <div style={style.title}>
          <Headline2>Menu</Headline2>
        </div>

        {/* menu level 0 */}
        <ul>
          {MENU_ITEM.map((item) => {
            return (
              <li id={`${item.id}`} key={item.id} style={style.itemLink}>
                <Button
                  text={item.label}
                  variant="underline"
                  onClick={() => openLevel(item.id, 1)}
                  styleCss={style.button}>
                  <HiArrowLongRight style={style.iconArrow} />
                </Button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* menu level 1 */}
      {MENU_ITEM.map((item) => {
        return (
          <MenuMobileLevel
            isOpen={activeMenu === item.id}
            categories={item.categories}
            title={item.label}
            key={item.id}
          />
        )
      })}
    </>
  )
}

export default MenuMobile
