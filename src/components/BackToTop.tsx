import React, { FC } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import ButtonIcon from './ButtonIcon'

const BackToTop: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <ButtonIcon
      label="icon-back-to-top"
      icon={AiOutlineArrowUp}
      onClick={scrollToTop}
      text="BACK TO TOP"
      styleCss={{
        color: '#181818',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: '0',
        padding: '24px',
        borderTop: '1px solid lightgray'
      }}
    />
  )
}

export default BackToTop
