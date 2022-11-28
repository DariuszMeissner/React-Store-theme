import React, { FC } from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import {
  registerMenu,
  registerModal
} from '../../../../api/feature/modal-slice/modalSlice'
import { Button, Headline2 } from '../../../../components'
import { useDisableScroll } from '../../../../hooks'

interface IProps {
  isOpen: boolean
  categories: ICategory[]
  title: string
}

interface ICategory {
  title: string
  path: string
}

const MenuMobileLevel: FC<IProps> = ({ isOpen, categories, title }) => {
  const dispatch = useDispatch()

  const { unlockScroll } = useDisableScroll()

  const style = {
    container: {
      background: 'white',
      position: 'absolute',
      top: 0,
      height: '100%',
      width: '100%',
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 700ms',
      padding: 15
    },
    menuTop: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    menuPath: {
      display: 'flex',
      alignItems: 'center'
    },
    menuTitle: { marginLeft: 15 },
    iconButton: {
      color: 'black',
      margin: 0
    }
  } as const

  const closeLevel = (menuId: number | null, levelId: number) => {
    dispatch(registerMenu({ register: menuId, level: levelId }))
  }

  const closeMenu = () => {
    dispatch(registerModal(null))
    unlockScroll()
  }

  return (
    <div className="menu-mobile-level" style={style.container}>
      {isOpen && (
        <>
          {/* top */}
          <div style={style.menuTop}>
            <div style={style.menuPath}>
              <Button
                type="button"
                label="icon-back"
                icon={HiArrowLongLeft}
                onClick={() => closeLevel(null, 1)}
                styleCss={style.iconButton}
              />
              <Headline2 styleCss={style.menuTitle}>{title}</Headline2>
            </div>
            <Button
              type="button"
              label="icon-close"
              icon={IoCloseOutline}
              onClick={closeMenu}
              styleCss={style.iconButton}
            />
          </div>

          {/* menu links */}
          <div>
            {categories.map((item) => {
              return (
                <li key={item.title}>
                  <Button
                    type="button-link"
                    text={item.title}
                    path={`/products/${item.path}`}
                    variant="underline"
                    onClick={closeMenu}
                    styleCss={{
                      color: 'black',
                      padding: '10px 0',
                      lineHeight: '20px',
                      marginLeft: 0,
                      marginRight: 0
                    }}
                  />
                </li>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default MenuMobileLevel
