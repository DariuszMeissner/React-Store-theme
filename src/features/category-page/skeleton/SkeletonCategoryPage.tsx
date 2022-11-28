import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Grid } from '../../../components'
import Headline2 from '../../../components/Headline2'
import SkeletonProductTeaser from '../../../components/product-teaser/SkeletonProductTeaser'
import Section from '../../../layout/Section'

export const style = {
  section: {
    margin: '25px 0'
  }
} as const

const SkeletonCategoryPage = () => {
  return (
    <main className="main-content">
      <Section styleCss={style.section}>
        <Headline2>
          <Skeleton width={150} />
        </Headline2>

        {/* search refeiments */}
        <div style={{ paddingTop: 40, paddingBottom: 20 }}>
          <Skeleton height={60} />
        </div>

        {/* listing */}
        <Grid
          rowGap={[20, 20, 20, 20]}
          columnGap={[20, 20, 20, 20]}
          gridColumns={[2, 3, 4, 4]}
          columnEqual>
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
          <SkeletonProductTeaser />
        </Grid>

        {/* load more */}
        <div style={{ textAlign: 'center' }}>
          <Skeleton width={100} />
        </div>
      </Section>
    </main>
  )
}

export default SkeletonCategoryPage
