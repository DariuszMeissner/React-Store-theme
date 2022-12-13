import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './button/Button'

interface IProps {
  category: string
}

const Breadcrumbs: FC<IProps> = ({ category }) => {
  const navigate = useNavigate()
  return (
    <div className="breadcrumbs">
      <Button
        text={`/${category}`}
        onClick={() => navigate(`/products/${category}`)}
        styleCss={{
          color: 'black',
          marginLeft: '0',
          marginBottom: '20px',
          fontWeight: '300',
          fontSize: '12px',
          textTransform: 'capitalize'
        }}
      />
    </div>
  )
}

export default Breadcrumbs
