import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

const ProductPage: FC = () => {
  const { id } = useParams()
  return <div>{id}</div>
}

export default ProductPage
