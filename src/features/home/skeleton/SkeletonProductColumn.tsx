import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Button, Description, Grid, Headline1 } from '../../../components'
import Column from '../../../layout/Column'
import { IMAGE_HEIGHT, style } from '../ProductColumn'

const SkeletonProductColumn = () => {
  return (
    <Grid
      rowGap={[0, 0, 0, 0]}
      columnGap={[0, 0, 0, 0]}
      gridColumns={[1, 2, 2, 2]}
      columnEqual>
      <Skeleton height={IMAGE_HEIGHT} />

      <Column>
        <div style={style.mediaContent}>
          <Headline1>
            <Skeleton height={30} width={200} />
          </Headline1>

          <Description align="center">
            <Skeleton height={30} width={300} />
          </Description>

          <Button type="skeleton">
            <Skeleton height={30} />
          </Button>
        </div>
      </Column>
    </Grid>
  )
}

export default SkeletonProductColumn
