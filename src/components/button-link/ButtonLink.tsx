import React, { CSSProperties, FC } from 'react'
import { NavLink } from 'react-router-dom'
import './ButtonLink.scss'

interface IProps {
  text: string
  variant?: 'underline' | 'white' | 'black' | ''
  path: string
  styleCss?: CSSProperties
}

const ButtonLink: FC<IProps> = ({ text, path, variant, styleCss }) => {
  return (
    <NavLink to={path}>
      <span className={`link link-${variant}`} style={styleCss}>
        {text}
      </span>
    </NavLink>
  )
}

ButtonLink.defaultProps = {
  variant: '',
  styleCss: { color: 'inherite' }
}

export default ButtonLink
