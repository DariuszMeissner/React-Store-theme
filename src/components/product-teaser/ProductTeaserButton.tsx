import React, { FC } from 'react'

interface IProps {
  path: string | undefined
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
    <a href={path} type="button" style={style}>
      Shop now
    </a>
  )
}

export default ProductTeaserButton
