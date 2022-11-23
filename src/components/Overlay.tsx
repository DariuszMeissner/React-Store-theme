import React, { CSSProperties, FC } from 'react'

interface IProps {
  styleCss?: CSSProperties
}

const Overlay: FC<IProps> = ({ styleCss }) => {
  const style = {
    overlay: {
      position: 'fixed',
      zIndex: 2,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'black',
      opacity: 0.7,
      ...styleCss
    }
  } as const

  return <div style={style.overlay} />
}

Overlay.defaultProps = {
  styleCss: {}
}

export default Overlay
