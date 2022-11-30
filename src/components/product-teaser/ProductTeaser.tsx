import React, { FC } from 'react'
import { apiSlice } from '../../api/feature/apiSlice'
import { useSizeScreen } from '../../hooks'
import ImageBackground from '../ImageBackground'
import ProductTeaserButton from './ProductTeaserButton'
import ProductTeaserName from './ProductTeaserName'
import ProductTeaserPrice from './ProductTeaserPrice'

interface IProps {
  productId: string
}

const style = {
  teaser: {
    marginBottom: 15
  },
  data: {
    marginTop: 10
  }
}

const ProductTeaser: FC<IProps> = ({ productId }) => {
  const screen = useSizeScreen()
  const { data } = apiSlice.useGetSingleProductQuery(productId)

  const HEIGHT_IMAGE = screen.isS ? '230px' : '300px'

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
