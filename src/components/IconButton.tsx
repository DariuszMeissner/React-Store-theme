import React, { CSSProperties, FC } from 'react'
import { IconType } from 'react-icons/lib'
import useSizeScreen from '../hooks/useSizeScreen'

interface IProps {
  label: string
  icon: IconType
  text?: string
  onClick: () => void
  styleCss?: CSSProperties
}

const IconButton: FC<IProps> = ({ label, icon, onClick, text, styleCss }) => {
  const screen = useSizeScreen()
  const Icon = icon

  const style = {
    button: {
      background: 'transparent',
      color: '#fff',
      margin: '0 16px',
      border: 'none'
    },
    icon: {
      height: '25px',
      width: '25px'
    }
  }

  return (
    <button
      type="button"
      style={{ ...style.button, ...styleCss }}
      data-label={label}
      onClick={onClick}>
      <Icon style={style.icon} />
      {text}
    </button>
  )
}

IconButton.defaultProps = {
  text: '',
  styleCss: { color: 'white' }
}

export default IconButton
