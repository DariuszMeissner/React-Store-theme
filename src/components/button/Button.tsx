import React, { CSSProperties, FC } from 'react'
import { NavLink } from 'react-router-dom'
import './Button.scss'

interface IProps {
  label?: string
  text?: string
  variant?: 'underline' | 'white' | 'black' | undefined
  path?: string | null
  styleCss?: CSSProperties
  icon?: React.ElementType | undefined
  disabled?: boolean
  iconSize?: number
  onClick?: ((e: React.MouseEvent) => void) | undefined
  children?: React.ReactNode
}

const Button: FC<IProps> = ({
  text,
  path,
  variant,
  styleCss,
  icon,
  label,
  iconSize,
  disabled,
  onClick,
  children
}) => {
  const Icon = icon ?? 'i'

  const style = {
    button: {
      background: variant ? undefined : 'transparent',
      color: '#fff',
      margin: '0 16px',
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      height: `${iconSize}px`,
      width: `${iconSize}px`,
      marginRight: '5px'
    }
  }

  return (
    <>
      {path && (
        <NavLink to={`${path}`}>
          <span className={`link link-${variant}`} style={styleCss}>
            {text}
          </span>
          {icon && <Icon style={style.icon} />}
        </NavLink>
      )}

      {onClick && (
        <button
          type="button"
          className={`link link-${variant}`}
          disabled={disabled}
          style={{ ...style.button, ...styleCss }}
          data-label={label}
          onClick={onClick}>
          {icon && <Icon style={style.icon} />}
          {text || children}
        </button>
      )}
    </>
  )
}

Button.defaultProps = {
  label: '',
  text: '',
  variant: undefined,
  styleCss: {},
  iconSize: 25,
  disabled: false,
  path: null,
  icon: undefined,
  onClick: undefined,
  children: null
}

export default Button
