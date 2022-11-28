import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Button, Grid, Headline1 } from '../../../components'

const SkeletonCollectionProducts = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Headline1>
          <Skeleton width={200} />
        </Headline1>
      </div>

      <Grid
        rowGap={[50, 50, 50, 50]}
        columnGap={[50, 50, 50, 50]}
        gridColumns={[1, 3, 3, 3]}>
        <Skeleton height={300} />
        <Skeleton height={300} />
        <Skeleton height={300} />
      </Grid>

      <Button type="skeleton">
        <Skeleton height={40} />
      </Button>
    </div>
  )
}

export default SkeletonCollectionProducts
