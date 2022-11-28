import React, { FC } from 'react'
import Section from '../layout/Section'
import CollectionProducts from '../features/home/CollectionProducts'
import ProductColumn from '../features/home/ProductColumn'
import ProductTeaser from '../components/product-teaser/ProductTeaser'
import useSizeScreen from '../hooks/useSizeScreen'
import Slider from '../components/slider/Slider'
import { Hero } from '../features'
import TwoColumnsProducts from '../features/home/TwoColumnsProducts'

const Home: FC = () => {
  const screen = useSizeScreen()
  const slidesOnMS = screen.isS ? 2 : 3
  const slidesPerView = screen.isX ? 4 : slidesOnMS

  return (
    <main className="main-content">
      <Hero productId="6" />

      <Section>
        <TwoColumnsProducts productIdOne="1" productIdTwo="9" />
      </Section>

      <Section type="fullWidth">
        <Slider spaceBetween={10} slidesPerView={1}>
          <ProductColumn productId="6" />
          <ProductColumn productId="8" />
          <ProductColumn productId="7" />
        </Slider>
      </Section>

      <Section>
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
      </Section>

      <Section>
        <CollectionProducts productId="11" />
      </Section>
    </main>
  )
}

export default Home
