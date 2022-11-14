import React, { FC } from 'react'

interface IProps {
  code: number | undefined
}

const style = {
  codeContainer: {
    marginTop: '10px'
  }
} as const

const ProductCode: FC<IProps> = ({ code }) => {
  return (
    <div style={style.codeContainer}>
      <span>Product code:</span>&nbsp;
      <span>{code || 'no code'}</span>
    </div>
  )
}

export default ProductCode
