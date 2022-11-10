import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  width?: string
}

const Logo: FC<IProps> = ({ width }) => {
  const style = {
    img: {
      height: 'auto',
      width
    }
  }

  return (
    <Link to="/">
      <img src="/" alt="logo" style={style.img} />
    </Link>
  )
}
Logo.defaultProps = {
  width: '100px'
}

export default Logo
