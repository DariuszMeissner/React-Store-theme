import React, { FC } from 'react'
import { apiSlice } from '../../api/feature/apiSlice'
import Image from '../Image'
import ProductTeaserButton from './ProductTeaserButton'
import ProductTeaserName from './ProductTeaserName'
import ProductTeaserPrice from './ProductTeaserPrice'

interface IProps {
  productId: string
}

const style = {
  teaser: {
    marginBottom: '40px'
  }
}

const ProductTeaser: FC<IProps> = ({ productId }) => {
  const { data } = apiSlice.useGetSingleProductQuery(productId)

  return (
    <div className="product-teaser" style={style.teaser}>
      <Image data={data} src={data?.images[0]} href={`/product/${data?.id}`} />
      <ProductTeaserName name={data?.title} />
      <ProductTeaserPrice price={data?.price} currency="$" />
      <ProductTeaserButton path={`/product/${data?.id}`} />
    </div>
  )
}

export default ProductTeaser
