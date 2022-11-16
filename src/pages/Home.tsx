import React, { FC, Suspense } from 'react'
import TwoColumnsProducts from '../features/home/TwoColumnsProducts'
import Section from '../layout/Section'
import Hero from '../features/home/Hero'
import CollectionProducts from '../features/home/CollectionProducts'
import ProductColumn from '../features/home/ProductColumn'
import ProductTeaser from '../components/product-teaser/ProductTeaser'
import useSizeScreen from '../hooks/useSizeScreen'

const Slider = React.lazy(() => import('../components/slider/Slider'))

const Home: FC = () => {
  const screen = useSizeScreen()
  const slidesOnMS = screen.isS ? 2 : 3
  const slidesPerView = screen.isX ? 4 : slidesOnMS

  return (
    <div>
      <Hero productId="6" />

      <Section>
        <TwoColumnsProducts productIdOne="1" productIdTwo="9" />
      </Section>

      <Section type="fullWidth">
        <Suspense fallback={<p>loading slider</p>}>
          <Slider spaceBetween={10} slidesPerView={1}>
            <ProductColumn productId="6" />
            <ProductColumn productId="8" />
            <ProductColumn productId="7" />
          </Slider>
        </Suspense>
      </Section>

      <Section>
        <Suspense fallback={<p>loading slider</p>}>
          <Slider
            spaceBetween={40}
            slidesPerView={slidesPerView}
            navigation={false}
            configuration="scrollbar">
            <ProductTeaser productId="48" />
            <ProductTeaser productId="50" />
            <ProductTeaser productId="54" />
            <ProductTeaser productId="55" />
            <ProductTeaser productId="51" />
            <ProductTeaser productId="52" />
          </Slider>
        </Suspense>
      </Section>

      <Section>
        <CollectionProducts productId="11" />
      </Section>
    </div>
  )
}

export default Home
