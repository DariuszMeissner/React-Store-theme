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
  activeCss?: CSSProperties
  icon?: React.ElementType | undefined
  disabled?: boolean
  iconSize?: number
  onClick?: ((e: React.MouseEvent) => void) | undefined
  children?: React.ReactNode
}

const Button: FC<IProps> = ({
  label,
  text,
  type,
  path,
  variant,
  styleCss,
  activeCss,
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
      lineHeight: '28px',
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
      width: `${iconSize}px`,
      marginRight: '5px'
    },
    activeLink: {
      ...activeCss
    }
  } as const

  return (
    <>
      {type === 'link' && (
        <NavLink
          to={`${path}`}
          style={({ isActive }) => (isActive ? style.activeLink : undefined)}>
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
  activeCss: {},
  iconSize: 25,
  disabled: false,
  path: null,
  icon: undefined,
  onClick: undefined,
  children: null
}

export default Button
