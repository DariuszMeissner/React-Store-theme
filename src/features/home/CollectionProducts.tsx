import React, { FC } from 'react'
import { apiSlice } from '../../api/feature/apiSlice'
import { Grid, Headline1, Image, Button } from '../../components'

interface IProps {
  productId: string
}

const style = {
  center: {
    textAlign: 'center'
  }
} as const

const CollectionProducts: FC<IProps> = ({ productId }) => {
  const { data, isSuccess } = apiSlice.useGetSingleProductQuery(productId)

  return (
    <div className="collection-products">
      {/* headline */}
      <div style={{ marginBottom: '20px' }}>
        <Headline1>{data?.category || 'category'}</Headline1>
      </div>

      {/* images */}
      {isSuccess && (
        <Grid
          rowGap={[50, 50, 50, 50]}
          columnGap={[50, 50, 50, 50]}
          gridColumns={[1, 3, 3, 3]}>
          <Image
            data={data}
            src={data?.images[0]}
            href={`/products/${data?.category}`}
          />
          <Image
            data={data}
            src={data?.images[1]}
            href={`/products/${data?.category}`}
          />
          <Image
            data={data}
            src={data?.images[3]}
            href={`/products/${data?.category}`}
          />
        </Grid>
      )}

      {/* button */}
      <div style={style.center}>
        <Button
          type="link"
          text="Shop"
          path={`/products/${data?.category}`}
          variant="white"
        />
      </div>
    </div>
  )
}

export default CollectionProducts