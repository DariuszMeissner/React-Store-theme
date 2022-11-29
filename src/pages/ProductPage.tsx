import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { apiSlice } from '../api/feature/apiSlice'
import { useSizeScreen } from '../hooks'
import { Section } from '../layout'
import ProductCarousel from '../features/product-page/carousel/ProductCarousel'
import ProductDetails from '../features/product-page/details/ProductDetails'
import { Breadcrumbs } from '../components'
import RelatedItems from '../components/RelatedItems'

const ProductPage: FC = () => {
  const screen = useSizeScreen()
  const { id } = useParams()
  const { data } = apiSlice.useGetSingleProductQuery(id)

  const style = {
    carouselWrapper: {
      width: screen.isS || screen.isM ? '100%' : '69%'
    },
    deatilsWrapper: {
      width: screen.isL || screen.isX ? '29%' : '100%'
    },
    section: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: screen.isS || screen.isM ? 'column' : 'row',
      margin: '25px 0'
    }
  } as const

  return (
    <div className="product-page">
      {data && (
        <>
          {screen.isS && <ProductCarousel images={data?.images} />}

          <Section styleCss={style.section}>
            <div style={style.carouselWrapper}>
              {!screen.isS && <ProductCarousel images={data?.images} />}
            </div>
            <div style={style.deatilsWrapper}>
              <Breadcrumbs category={data.category} />
              <ProductDetails data={data} />
            </div>
          </Section>
          <Section>
            <RelatedItems product={data} />
          </Section>
        </>
      )}
    </div>
  )
}

export default ProductPage
