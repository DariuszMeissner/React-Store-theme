import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Button, Grid, Headline1 } from '../../../components'
import { IMAGE_HEIGHT, style } from '../TwoColumnsProducts'

const SkeletonTwoColumnsProducts = () => {
  return (
    <Grid
      rowGap={[10, 10, 10, 10]}
      columnGap={[50, 50, 50, 50]}
      gridColumns={[1, 2, 2, 2]}>
      <div style={style.cartColumn}>
        <Skeleton height={IMAGE_HEIGHT} />

        <Headline1>
          <Skeleton />
        </Headline1>

        <Button type="skeleton">
          <Skeleton height={30} />
        </Button>
      </div>

      <div style={style.cartColumn}>
        <Skeleton height={IMAGE_HEIGHT} />

        <Headline1>
          <Skeleton />
        </Headline1>

        <Button type="skeleton">
          <Skeleton height={30} />
        </Button>
      </div>
    </Grid>
  )
}

export default SkeletonTwoColumnsProducts
