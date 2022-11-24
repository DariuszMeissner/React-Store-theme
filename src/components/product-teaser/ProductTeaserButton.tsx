import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  path: string
}

const style = {
  display: 'inline-block',
  fontWeight: 300,
  color: '#181818',
  marginTop: '20px',
  paddingBottom: '5px',
  borderBottom: '1px solid #181818'
}

const ProductTeaserButton: FC<IProps> = ({ path }) => {
  return (
    <Link to={path} style={style}>
      Shop now
    </Link>
  )
}

export default ProductTeaserButton
