import React, { CSSProperties, FC, useState } from 'react'
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
  onClick?: (() => void) | undefined
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
  onClick
}) => {
  const Icon = icon ?? 'i'

  const style = {
    button: {
      background: variant ? undefined : 'transparent',
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
          {text}
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
  onClick: undefined
}

export default Button
