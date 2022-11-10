import React, { FC } from 'react'
import { apiSlice } from '../../api/feature/apiSlice'
import ImageLink from '../ImageLink'
import LinkItem from '../link-item/LinkItem'
import ProductTeaserName from './ProductTeaserName'
import ProductTeaserPrice from './ProductTeaserPrice'

interface IProps {
  productId: string
}

const ProductTeaser: FC<IProps> = ({ productId }) => {
  const { data } = apiSlice.useGetSingleProductQuery(productId)

  return (
    <div>
      <ImageLink
        data={data}
        src={data?.images[0]}
        href={`/product/${data?.id}`}
      />
      <ProductTeaserName name={data?.title} />
      <ProductTeaserPrice price={data?.price} />
      <LinkItem
        text="Shop now"
        path={`/product/${data?.id}`}
        styleCss={{ color: 'black' }}
      />
    </div>
  )
}

export default ProductTeaser
