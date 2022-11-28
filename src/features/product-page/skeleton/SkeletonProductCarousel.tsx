/* eslint-disable react/no-array-index-key */
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Grid, Slider } from '../../../components'
import { useSizeScreen } from '../../../hooks'

const SkeletonProductCarousel = () => {
  const screen = useSizeScreen()
  const maxImages = 4

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
      {[...Array(maxImages)].map(() => (
        <Skeleton style={{ height: IMAGE_HEIGHT }} />
      ))}
    </Grid>
  )
  const carouselOnMS = (
    <Slider
      spaceBetween={10}
      slidesPerView={screen.isS ? 1 : 2}
      navigation={false}
      configuration="scrollbar">
      {[...Array(maxImages)].map(() => (
        <Skeleton style={{ height: IMAGE_HEIGHT }} />
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
