import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Slider } from '../../../components'
import SkeletonProductTeaser from '../../../components/product-teaser/SkeletonProductTeaser'
import { useSizeScreen } from '../../../hooks'
import Section from '../../../layout/Section'
import SkeletonProductCarousel from './SkeletonProductCarousel'
import SkeletonProductDetails from './SkeletonProductDetails'

const SkeletonProductPage = () => {
  const screen = useSizeScreen()

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

  const slidesOnMS = screen.isS ? 2 : 3
  const slidesPerView = screen.isX ? 4 : slidesOnMS

  return (
    <>
      <Section styleCss={style.section}>
        <div style={style.carouselWrapper}>
          <SkeletonProductCarousel />
        </div>
        <div style={style.deatilsWrapper}>
          <Skeleton height={20} width={100} />
          <SkeletonProductDetails />
        </div>
      </Section>

      <Section>
        <Slider
          spaceBetween={40}
          slidesPerView={slidesPerView}
          navigation={false}
          configuration="scrollbar">
          <SkeletonProductTeaser key={1} />
          <SkeletonProductTeaser key={2} />
          <SkeletonProductTeaser key={3} />
          <SkeletonProductTeaser key={4} />
          <SkeletonProductTeaser key={5} />
        </Slider>
      </Section>
    </>
  )
}

export default SkeletonProductPage
