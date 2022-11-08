/* eslint-disable react/jsx-no-useless-fragment */
import React, { CSSProperties, FC } from 'react'
import useOutClick from '../../hooks/useOutClick'
import useSizeScreen from '../../hooks/useSizeScreen'

interface IProps {
  children: React.ReactNode
  closeOnClick: () => void
  styleCss?: CSSProperties
  modalPosition: 'left' | 'right'
}

const Modal: FC<IProps> = ({
  children,
  closeOnClick,
  styleCss,
  modalPosition
}) => {
  const screen = useSizeScreen()
  const modalRef = useOutClick(closeOnClick)

  const style = {
    modal: {
      position: 'absolute',
      left: modalPosition === 'left' ? 0 : undefined,
      right: modalPosition === 'right' ? 0 : undefined,
      top: 0,
      background: 'white',
      width: screen.isS ? '100vw' : '400px',
      height: '100vh',
      marginTop: screen.isL ? '40px' : undefined,
      padding: '30px 20px',
      zIndex: 5,
      overflowY: 'hidden',
      ...styleCss
    }
  } as const

  return (
    <div className="modal__wrap" style={style.modal} ref={modalRef}>
      <div className="modal__content">{children}</div>
    </div>
  )
}

Modal.defaultProps = {
  styleCss: {}
}

export default Modal
