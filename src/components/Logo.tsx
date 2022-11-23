import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Logo: FC = () => {
  const style = {
    logo: {
      color: 'white',
      fontSize: '18px',
      textAlign: 'center'
    },
    simplePart: {
      textTransform: 'uppercase'
    },
    shopPart: {
      letterSpacing: '1px'
    }
  } as const

  return (
    <Link to="/">
      <div style={style.logo}>
        <p style={style.simplePart}>Simple</p>
        <p style={style.shopPart}>Shop</p>
      </div>
    </Link>
  )
}

export default Logo
