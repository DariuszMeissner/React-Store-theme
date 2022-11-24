/* eslint-disable react/jsx-no-useless-fragment */
import React, { CSSProperties, FC } from 'react'
import useOutClick from '../hooks/useOutClick'
import useSizeScreen from '../hooks/useSizeScreen'

interface IProps {
  id: number | null
  children: React.ReactNode
  closeOnClick: () => void
  styleCss?: CSSProperties
  modalPosition: 'left' | 'right'
}

const Modal: FC<IProps> = ({
  id,
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
      zIndex: 7,
      top: 0,
      left: modalPosition === 'left' ? 0 : undefined,
      right: modalPosition === 'right' ? 0 : undefined,
      background: 'white',
      width: screen.isS ? '100vw' : '500px',
      height: '100vh',
      padding: '30px 20px',
      overflowY: 'hidden',
      ...styleCss
    },
    modalContent: {
      width: '100%'
    }
  } as const

  return (
    <div
      className="modal__wrap"
      id={`modal-${id}`}
      style={style.modal}
      ref={modalRef}>
      <div className="modal__content" style={style.modalContent}>
        {children}
      </div>
    </div>
  )
}

Modal.defaultProps = {
  styleCss: {}
}

export default Modal
