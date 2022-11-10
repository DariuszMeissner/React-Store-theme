import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

const CategoryPage: FC = () => {
  const { category } = useParams()
  return <div>{category}</div>
}

export default CategoryPage
