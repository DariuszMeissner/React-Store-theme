import React from 'react'
import { Slider } from '../../../components'
import SkeletonProductTeaser from '../../../components/product-teaser/SkeletonProductTeaser'
import { useSizeScreen } from '../../../hooks'
import Section from '../../../layout/Section'
import SkeletonCollectionProducts from './SkeletonCollectionProducts'
import SkeletonHero from './SkeletonHero'
import SkeletonProductColumn from './SkeletonProductColumn'
import SkeletonTwoColumnsProducts from './SkeletonTwoColumnsProducts'

const SkeletonHome = () => {
  const screen = useSizeScreen()
  const slidesOnMS = screen.isS ? 2 : 3
  const slidesPerView = screen.isX ? 4 : slidesOnMS

  return (
    <main className="main-content">
      <SkeletonHero />

      <Section>
        <SkeletonTwoColumnsProducts />
      </Section>

      <Section type="fullWidth">
        <Slider spaceBetween={10} slidesPerView={1}>
          <SkeletonProductColumn />
          <SkeletonProductColumn />
          <SkeletonProductColumn />
        </Slider>
      </Section>

      <Section>
        <Slider
          spaceBetween={40}
          slidesPerView={slidesPerView}
          navigation={false}
          configuration="scrollbar">
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
        </Slider>
      </Section>

      <Section>
        <SkeletonCollectionProducts />
      </Section>
    </main>
  )
}

export default SkeletonHome
