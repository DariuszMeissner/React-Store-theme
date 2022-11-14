import React, { FC } from 'react'
import { IProduct } from '../../../api/feature/apiSlice'
import { Grid, Image } from '../../../components'
import { useSizeScreen } from '../../../hooks'

interface IProps {
  data: IProduct | undefined
  images: string[] | undefined
}

const ProductCarousel: FC<IProps> = ({ images, data }) => {
  const screen = useSizeScreen()

  const carouselOnL = (
    <Grid rowGap={[2, 2, 2]} columnGap={[2, 2, 2]} gridColumns={[2, 2, 2]}>
      {images?.map((item) => (
        <Image data={data} src={item} />
      ))}
    </Grid>
  )
  const carouselOnMS = ''

  return (
    <div className="product-carousel">
      {screen.isL && carouselOnL}
      {!screen.isL && carouselOnMS}
    </div>
  )
}

export default ProductCarousel
