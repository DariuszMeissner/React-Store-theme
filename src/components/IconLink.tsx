import React, { FC } from 'react'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'

interface IProps {
  label: string
  icon: IconType
  path: string
}

const style = {
  icon: {
    height: '25px',
    width: '25px'
  }
}

const IconLink: FC<IProps> = ({ label, icon, path }) => {
  const Icon = icon
  return (
    <Link to={path} data-label={label}>
      <Icon style={style.icon} />
    </Link>
  )
}

export default IconLink
