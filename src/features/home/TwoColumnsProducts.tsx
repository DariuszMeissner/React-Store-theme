import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiSlice } from '../../api/feature/apiSlice'
import { Grid, Headline1, Button, ImageBackground } from '../../components'

interface IProps {
  productIdOne: string
  productIdTwo: string
}

export const IMAGE_HEIGHT = 400

export const style = {
  cartColumn: {
    textAlign: 'center',
    height: 'fit-content'
  }
} as const

const TwoColumnsProducts: FC<IProps> = ({ productIdOne, productIdTwo }) => {
  const navigate = useNavigate()
  const productOne = apiSlice.useGetSingleProductQuery(productIdOne)
  const productTwo = apiSlice.useGetSingleProductQuery(productIdTwo)

  return (
    <Grid
      rowGap={[10, 10, 10, 10]}
      columnGap={[50, 50, 50, 50]}
      gridColumns={[1, 2, 2, 2]}>
      <div style={style.cartColumn}>
        {productOne.isSuccess && (
          <ImageBackground
            pathImage={productOne.data?.images[2]}
            href={`/products/${productOne.data?.category}`}
            height={IMAGE_HEIGHT}
          />
        )}

        <Headline1>{productOne.data?.category || 'category'}</Headline1>
        <Button
          text="Shop"
          onClick={() => navigate(`/products/${productOne.data?.category}`)}
          variant="white"
        />
      </div>

      <div style={style.cartColumn}>
        {productTwo.isSuccess && (
          <ImageBackground
            pathImage={productTwo.data?.images[0]}
            href={`/products/${productTwo.data?.category}`}
            height={IMAGE_HEIGHT}
          />
        )}
        <Headline1>{productTwo.data?.category || 'category'}</Headline1>
        <Button
          text="Shop"
          onClick={() => navigate(`/products/${productOne.data?.category}`)}
          variant="white"
        />
      </div>
    </Grid>
  )
}

export default TwoColumnsProducts
