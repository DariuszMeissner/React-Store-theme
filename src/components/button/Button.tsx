import React, { CSSProperties, FC } from 'react'
import { NavLink } from 'react-router-dom'
import './Button.scss'

interface IProps {
  label?: string
  text?: string
  type: 'link' | 'button' | 'button-link' | 'skeleton'
  variant?: 'underline' | 'white' | 'black' | null
  path?: string | null
  styleCss?: CSSProperties
  icon?: React.ElementType | undefined
  iconSize?: number
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
  children?: React.ReactNode
}

const Button: FC<IProps> = ({
  label,
  text,
  type,
  path,
  variant,
  styleCss,
  icon,
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
      lineHeight: '20px',
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    skeleton: {
      width: 100,
      textAlign: 'center'
    },
    icon: {
      height: `${iconSize}px`,
      width: `${iconSize}px`
    }
  } as const

  return (
    <>
      {type === 'link' && (
        <NavLink to={`${path}`}>
          <span className={`link link-${variant}`} style={styleCss}>
            {text}
          </span>
          {icon && <Icon style={style.icon} />}
        </NavLink>
      )}

      {type === 'button' && (
        <button
          type="button"
          className={`link link-${variant}`}
          disabled={disabled}
          style={{ ...style.button, ...styleCss }}
          data-label={label}
          onClick={onClick}>
          {icon && <Icon style={style.icon} />}
          {text}
          {children}
        </button>
      )}

      {type === 'button-link' && (
        <NavLink
          to={`${path}`}
          style={styleCss}
          className={`link link-${variant}`}
          onClick={onClick}>
          <span style={{ lineHeight: '30px' }}>{text}</span>
        </NavLink>
      )}

      {type === 'skeleton' && (
        <button type="button" style={style.button}>
          {React.Children.map(children, (child) => (
            <div style={style.skeleton}>{child}</div>
          ))}
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
