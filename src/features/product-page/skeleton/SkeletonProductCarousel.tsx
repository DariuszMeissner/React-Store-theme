/* eslint-disable react/no-array-index-key */
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Grid, Slider } from '../../../components'
import { useSizeScreen } from '../../../hooks'

const SkeletonProductCarousel = () => {
  const screen = useSizeScreen()

  const MAX_IMAGES = 4

  const IMAGE_HEIGHT = screen.isS ? '90vh' : '350px'

  const style = {
    carouselWrapper: {
      marginBottom: screen.isS || screen.isM ? 20 : undefined
    }
  }

  const carouselOnXL = (
    <Grid
      rowGap={[2, 2, 10, 10]}
      columnGap={[2, 2, 10, 10]}
      gridColumns={[2, 2, 2, 2]}>
      {[...Array(MAX_IMAGES)].map((el, i) => (
        <Skeleton style={{ height: IMAGE_HEIGHT }} key={i} />
      ))}
    </Grid>
  )
  const carouselOnMS = (
    <Slider
      spaceBetween={10}
      slidesPerView={screen.isS ? 1 : 2}
      navigation={false}
      configuration="scrollbar">
      {[...Array(MAX_IMAGES)].map((el, i) => (
        <Skeleton style={{ height: IMAGE_HEIGHT }} key={i} />
      ))}
    </Slider>
  )
  return (
    <div className="product-carousel" style={style.carouselWrapper}>
      {(screen.isL || screen.isX) && carouselOnXL}
      {(screen.isS || screen.isM) && carouselOnMS}
    </div>
  )
}

export default SkeletonProductCarousel
