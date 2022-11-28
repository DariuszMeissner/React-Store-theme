import React, { FC } from 'react'
import Button from './button/Button'

interface IProps {
  category: string
}

const Breadcrumbs: FC<IProps> = ({ category }) => {
  return (
    <div className="breadcrumbs">
      <Button
        type="link"
        text={`/${category}`}
        path={`/products/${category}`}
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
