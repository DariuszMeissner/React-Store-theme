import React, { FC, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { apiSlice } from '../../api/feature/apiSlice'
import { useSizeScreen } from '../../hooks'
import ImageBackground from '../ImageBackground'
import ProductTeaserButton from './ProductTeaserButton'
import ProductTeaserName from './ProductTeaserName'
import ProductTeaserPrice from './ProductTeaserPrice'

interface IProps {
  productId: string
}

const ProductTeaser: FC<IProps> = ({ productId }) => {
  const screen = useSizeScreen()
  const { data } = apiSlice.useGetSingleProductQuery(productId)

  const HEIGHT_IMAGE = screen.isS ? '230px' : '300px'

  const style = {
    teaser: {
      marginBottom: screen.isS ? '15px' : '40px'
    },
    data: {
      marginTop: '10px'
    }
  }

  return (
    <div className="product-teaser" style={style.teaser}>
      <ImageBackground
        pathImage={data?.images[0]}
        height={HEIGHT_IMAGE}
        href={`/product/${data?.id}`}
      />

      <ProductTeaserName name={data?.title} />
      <ProductTeaserPrice price={data?.price} currency="$" />
      <ProductTeaserButton path={`/product/${data?.id}`} />
    </div>
  )
}

export default ProductTeaser
