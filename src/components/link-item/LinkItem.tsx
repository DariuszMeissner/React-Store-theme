import React, { CSSProperties, FC } from 'react'
import { NavLink } from 'react-router-dom'
import './LinkItem.scss'

interface IProps {
  text: string
  variant?: 'underline' | 'white' | 'transparent' | ''
  path: string
  styleCss?: CSSProperties
}

const LinkItem: FC<IProps> = ({ text, path, variant, styleCss }) => {
  return (
    <NavLink to={path}>
      <span className={`link link-${variant}`} style={styleCss}>
        {text}
      </span>
    </NavLink>
  )
}

LinkItem.defaultProps = {
  variant: '',
  styleCss: { color: 'inherite' }
}

export default LinkItem
