import React, { FC } from 'react'
import { Grid, ImageBackground, Slider } from '../../../components'
import { useSizeScreen } from '../../../hooks'

interface IProps {
  images: string[] | undefined
}

const ProductCarousel: FC<IProps> = ({ images }) => {
  const screen = useSizeScreen()
  const maxImages = images?.slice(0, 4)

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
      {maxImages?.map((item) => (
        <div
          className="image-slider"
          style={{ height: IMAGE_HEIGHT }}
          key={item}>
          <ImageBackground pathImage={item} />
        </div>
      ))}
    </Grid>
  )
  const carouselOnMS = (
    <Slider
      spaceBetween={10}
      slidesPerView={screen.isS ? 1 : 2}
      navigation={false}
      configuration="scrollbar">
      {images?.map((item) => (
        <div
          className="image-slider"
          style={{ height: IMAGE_HEIGHT, marginBottom: 30 }}
          key={item}>
          <ImageBackground pathImage={item} />
        </div>
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

export default ProductCarousel
