import React, { FC } from 'react'

interface IProps {
  title: string
}

const style = {
  titleContainer: {
    fontSize: '22px',
    marginTop: '15px'
  }
} as const

const ProductTitle: FC<IProps> = ({ title }) => {
  return (
    <div style={style.titleContainer}>
      <span>{title || 'no title'}</span>
    </div>
  )
}

export default ProductTitle
