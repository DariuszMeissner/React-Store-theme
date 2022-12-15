import React, { FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { registerModal } from '../../../../api/feature/modal-slice/modalSlice'
import { Button, Overlay } from '../../../../components'
import Lists from '../../../../components/Lists'
import { useDisableScroll } from '../../../../hooks'
import Section from '../../../../layout/Section'
import NavBarButtonLink from '../nav-bar/NavBarButtonLink'

interface IProps {
  isOpen: boolean
  categories: ICategory[]
}

interface ICategory {
  title: string
  path: string
}

const MegaNav: FC<IProps> = ({ isOpen, categories }) => {
  const style = {
    meganav: {
      position: 'absolute',
      zIndex: 5,
      transform: isOpen ? 'translateY(0)' : 'translateY(-110%)',
      transition: 'transform 500ms',
      background: 'white',
      width: '100%'
    },
    section: {
      display: 'flex',
      justifyContent: 'center'
    },
    iconButtonClose: {
      position: 'absolute',
      top: 40,
      right: 100
    }
  } as const

  // const location = useLocation()
  const dispatch = useDispatch()
  const { unlockScroll } = useDisableScroll()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const closeOnClick = () => {
    dispatch(registerModal(null))
    unlockScroll()
  }

  const gotoOnClick = () => {
    dispatch(registerModal(null))
    scrollToTop()
    unlockScroll()
  }

  const renderMenuLinks = (item: ICategory) => {
    return (
      <li key={item.title}>
        <NavBarButtonLink
          title={item.title}
          id={item.title}
          onClick={gotoOnClick}
          color="black"
          path={`/products/${item.path}`}
        />
      </li>
    )
  }

  return (
    <>
      <div className="meganav" style={style.meganav}>
        <Section>
          {/* button close */}
          <div style={style.iconButtonClose}>
            <Button
              type="button"
              label="icon-close"
              icon={IoCloseOutline}
              onClick={closeOnClick}
              styleCss={{ color: 'black' }}
            />
          </div>

          {/* list of links */}
          <ul style={style.section}>
            <Lists data={categories} renderItem={renderMenuLinks} />
          </ul>
        </Section>
      </div>
      {/* overlay */}
      {isOpen && <Overlay styleCss={{ zIndex: 2, height: '200vh' }} />}
    </>
  )
}

export default MegaNav
