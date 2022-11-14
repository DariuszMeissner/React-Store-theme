import React, { CSSProperties, FC } from 'react'
import { IconType } from 'react-icons/lib'

interface IProps {
  label: string
  onClick: () => void
  icon: IconType
  text?: string
  disabled?: boolean
  iconSize?: number
  styleCss?: CSSProperties
}

const ButtonIcon: FC<IProps> = ({
  label,
  icon,
  onClick,
  text,
  disabled,
  iconSize,
  styleCss
}) => {
  const Icon = icon

  const style = {
    button: {
      background: 'transparent',
      color: '#fff',
      margin: '0 16px',
      border: 'none'
    },
    icon: {
      height: `${iconSize}px`,
      width: `${iconSize}px`
    }
  }

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...style.button, ...styleCss }}
      data-label={label}
      onClick={onClick}>
      <Icon style={style.icon} />
      {text}
    </button>
  )
}

ButtonIcon.defaultProps = {
  text: '',
  iconSize: 25,
  disabled: false,
  styleCss: { color: 'white' }
}

export default ButtonIcon
