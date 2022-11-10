import React, { FC, Suspense } from 'react'
import TwoColumnsProducts from '../features/home/two-columns-products/TwoColumnsProducts'
import Section from '../layout/Section'
import Hero from '../features/home/Hero'
import CollectionProducts from '../features/home/collection-products/CollectionProducts'
import ProductColumn from '../features/home/product-column/ProductColumn'
import ProductTeaser from '../components/product-teaser/ProductTeaser'

const Slider = React.lazy(() => import('../components/slider/Slider'))

const Home: FC = () => {
  return (
    <div>
      <Hero productId="6" />
      <Section>
        <TwoColumnsProducts productIdOne="1" productIdTwo="9" />
      </Section>
      <Section type="fullWidth">
        <Suspense fallback={<p>loading slider</p>}>
          <Slider spaceBetween={10} slidesPerView={1}>
            <ProductColumn productId="27" />
            <ProductColumn productId="28" />
            <ProductColumn productId="29" />
          </Slider>
        </Suspense>
      </Section>
      <Section>
        <ProductTeaser productId="48" />
      </Section>
      <Section>
        <CollectionProducts productId="11" />
      </Section>
    </div>
  )
}

export default Home
