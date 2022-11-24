import React, { FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
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
          <div style={style.iconButtonClose}>
            <Button
              label="icon-close"
              icon={IoCloseOutline}
              onClick={closeOnClick}
              styleCss={{ color: 'black' }}
            />
          </div>
          <ul style={style.section}>{links}</ul>
        </Section>
      </div>
      {/* overlay */}
      {isOpen && <Overlay styleCss={{ zIndex: 2, height: '100vh' }} />}
    </>
  )
}

export default MegaNav
