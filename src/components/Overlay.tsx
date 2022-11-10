import React, { FC } from 'react'

const style = {
  overlay: {
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'black',
    opacity: 0.7,
    transition: 'opacity 500ms ease-in'
  }
} as const

const Overlay: FC = () => {
  return <div style={style.overlay} />
}

export default Overlay
