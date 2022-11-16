import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { apiSlice } from '../api/feature/apiSlice'
import { useSizeScreen } from '../hooks'
import { Column, Section } from '../layout'
import ProductCarousel from '../features/product-page/carousel/ProductCarousel'
import ProductDetails from '../features/product-page/details/ProductDetails'
import { Breadcrumbs } from '../components'
import RelatedItems from '../components/RelatedItems'

const ProductPage: FC = () => {
  const screen = useSizeScreen()
  const { id } = useParams()
  const { data, isSuccess } = apiSlice.useGetSingleProductQuery(id)

  const paddingCarouselOnS = screen.isS && { padding: '0' }
  const paddingDetailsOnS = screen.isS && { padding: '0 16px' }

  const style = {
    carouselWrapper: {
      width: screen.isS || screen.isM ? '100%' : '69%'
    },
    deatilsWrapper: {
      width: screen.isL || screen.isX ? '29%' : '100%',
      ...paddingDetailsOnS
    },
    section: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: screen.isS || screen.isM ? 'column' : 'row',
      margin: '25px 0',
      ...paddingCarouselOnS
    }
  } as const

  const breadcrumbsOnS = screen.isS && isSuccess && (
    <Column>
      <Breadcrumbs category={data.category} />
    </Column>
  )

  const breadcrumbsOnM = screen.isM && isSuccess && (
    <Breadcrumbs category={data.category} />
  )

  const breadcrumbsOnXL = (screen.isL || screen.isX) && isSuccess && (
    <Breadcrumbs category={data.category} />
  )

  return (
    <>
      <Section styleCss={style.section}>
        <div style={style.carouselWrapper}>
          {breadcrumbsOnS}
          {breadcrumbsOnM}
          {isSuccess && <ProductCarousel images={data?.images} />}
        </div>
        <div style={style.deatilsWrapper}>
          {breadcrumbsOnXL}
          {isSuccess && <ProductDetails data={data} />}
        </div>
      </Section>
      <Section>{isSuccess && <RelatedItems product={data} />}</Section>
    </>
  )
}

export default ProductPage
