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
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
        </Slider>
      </Section>
    </>
  )
}

export default SkeletonProductPage
