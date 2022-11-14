import React, { FC } from 'react'

interface IProps {
  name: string | undefined
}

const style = {
  name: {
    lineHeight: '22px',
    marginTop: '10px'
  }
}

const ProductTeaserName: FC<IProps> = ({ name }) => {
  return <div style={style.name}>{name}</div>
}

export default ProductTeaserName
