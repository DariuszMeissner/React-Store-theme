import React, { FC, Suspense } from 'react'
import { Headline2, ProductTeaser, Slider } from '.'
import { apiSlice, IProduct } from '../api/feature/apiSlice'
import { useSizeScreen } from '../hooks'

interface IProps {
  product: IProduct
}

const RelatedItems: FC<IProps> = ({ product }) => {
  const screen = useSizeScreen()
  const category = product?.category
  const relatedProducts = apiSlice.useGetProductsOfCategoryQuery(category)

  const slidesOnMS = screen.isS ? 2 : 3
  const slidesPerView = screen.isX ? 4 : slidesOnMS

  return (
    <div className="collection-products">
      <Headline2>You may also like</Headline2>

      {/* slider */}
      <Slider
        spaceBetween={40}
        slidesPerView={slidesPerView}
        navigation={false}
        configuration="scrollbar">
        {relatedProducts.data?.products.map((item) => (
          <ProductTeaser productId={`${item.id}`} key={item.id} />
        ))}
      </Slider>
    </div>
  )
}

export default RelatedItems
