import React, { FC, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { registerModal } from '../../../../api/feature/modal-slice/modalSlice'
import { Button, Overlay } from '../../../../components'
import { useDisableScroll } from '../../../../hooks'
import Section from '../../../../layout/Section'

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
    scrollToTop()
  }

  const generateLinks = (): JSX.Element[] => {
    return categories.map((item) => {
      return (
        <li key={item.title}>
          <Button
            type="button-link"
            text={item.title}
            path={`/products/${item.path}`}
            variant="underline"
            onClick={closeOnClick}
            styleCss={{ color: 'black', lineHeight: '20px' }}
          />
        </li>
      )
    })
  }

  const links = generateLinks()

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

          {/* links */}
          <ul style={style.section}>{links}</ul>
        </Section>
      </div>
      {/* overlay */}
      {isOpen && <Overlay styleCss={{ zIndex: 2, height: '200vh' }} />}
    </>
  )
}

export default MegaNav
