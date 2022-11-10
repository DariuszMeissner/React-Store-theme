import React, { FC } from 'react'
import { apiSlice } from '../../../api/feature/apiSlice'
import Description from '../../../components/Description'
import Grid from '../../../components/Grid'
import Headline1 from '../../../components/Headline1'
import ImageLink from '../../../components/ImageLink'
import LinkItem from '../../../components/link-item/LinkItem'
import Column from '../../../layout/Column'

interface IProps {
  productId: string
}

const style = {
  mediaContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '0 100px'
  }
} as const

const ProductColumn: FC<IProps> = ({ productId }) => {
  const { data } = apiSlice.useGetSingleProductQuery(productId)

  return (
    <Grid
      rowGap={[0, 0, 0]}
      columnGap={[0, 0, 0]}
      gridColumns={[1, 2, 2]}
      columnEqual>
      <ImageLink
        data={data}
        src={data?.images[0]}
        href={`/product/${data?.id}`}
      />
      <Column>
        <div style={style.mediaContent}>
          <Headline1>{data?.title || 'title'}</Headline1>
          <Description align="center">
            {data?.description || 'description'}
          </Description>
          <LinkItem text="Buy" path={`/product/${data?.id}`} variant="white" />
        </div>
      </Column>
    </Grid>
  )
}

export default ProductColumn
