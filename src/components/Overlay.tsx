import React, { CSSProperties, FC } from 'react'

interface IProps {
  styleCss?: CSSProperties
}

const Overlay: FC<IProps> = ({ styleCss }) => {
  const style = {
    overlay: {
      position: 'fixed',
      zIndex: 3,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'black',
      opacity: 0.5,
      ...styleCss
    }
  } as const

  return <div className="overlay" style={style.overlay} />
}

Overlay.defaultProps = {
  styleCss: {}
}

export default Overlay
