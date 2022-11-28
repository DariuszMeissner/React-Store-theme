import React, { FC } from 'react'
import { apiSlice } from '../../api/feature/apiSlice'
import {
  Description,
  Grid,
  Headline1,
  Image,
  Button,
  ImageBackground
} from '../../components'
import Column from '../../layout/Column'

interface IProps {
  productId: string
}

export const IMAGE_HEIGHT = 400

export const style = {
  mediaContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center'
  }
} as const

const ProductColumn: FC<IProps> = ({ productId }) => {
  const { data } = apiSlice.useGetSingleProductQuery(productId)

  return (
    <Grid
      rowGap={[0, 0, 0, 0]}
      columnGap={[0, 0, 0, 0]}
      gridColumns={[1, 2, 2, 2]}
      columnEqual>
      {/* image column */}
      <ImageBackground
        pathImage={data?.thumbnail}
        href={`/product/${data?.id}`}
        height={IMAGE_HEIGHT}
      />

      {/* content column */}
      <Column>
        <div style={style.mediaContent}>
          <Headline1>{data?.title || 'title'}</Headline1>
          <Description align="center">
            {data?.description || 'description'}
          </Description>
          <Button
            type="link"
            text="Buy"
            path={`/product/${data?.id}`}
            variant="white"
          />
        </div>
      </Column>
    </Grid>
  )
}

export default ProductColumn
