import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { apiSlice } from '../../api/feature/apiSlice'
import { Section } from '../../layout'
import ProductCarousel from './carousel/ProductCarousel'
import ProductDetails from './details/ProductDetails'

const ProductPage: FC = () => {
  const { id } = useParams()
  const { data } = apiSlice.useGetSingleProductQuery(id)

  return (
    <Section>
      <ProductCarousel images={data?.images} data={data} />
      <ProductDetails data={data} />
    </Section>
  )
}

export default ProductPage
