import React, { FC } from 'react'
import { IProduct } from '../api/feature/apiSlice'
import ButtonLink from './button-link/ButtonLink'

interface IProps {
  data: IProduct | undefined
}

const Breadcrumbs: FC<IProps> = ({ data }) => {
  return (
    <div className="breadcrumbs">
      <ButtonLink
        text={`/${data?.category}`}
        path={`/products/${data?.category}`}
        styleCss={{ color: 'black', marginLeft: '0' }}
      />
    </div>
  )
}

export default Breadcrumbs
