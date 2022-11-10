import React, { FC } from 'react'
import { apiSlice } from '../../../api/feature/apiSlice'
import Grid from '../../../components/Grid'
import Headline1 from '../../../components/Headline1'
import ImageLink from '../../../components/ImageLink'
import LinkItem from '../../../components/link-item/LinkItem'
import useSizeScreen from '../../../hooks/useSizeScreen'

interface IProps {
  productIdOne: string
  productIdTwo: string
}

const TwoColumnsProducts: FC<IProps> = ({ productIdOne, productIdTwo }) => {
  const screen = useSizeScreen()
  const productOne = apiSlice.useGetSingleProductQuery(productIdOne)
  const productTwo = apiSlice.useGetSingleProductQuery(productIdTwo)

  const style = {
    cartColumn: {
      textAlign: 'center',
      height: 'fit-content',
      marginBottom: screen.isS ? '25px' : undefined
    }
  } as const

  return (
    <Grid
      rowGap={[10, 10, 10]}
      columnGap={[50, 50, 50]}
      gridColumns={[1, 2, 2]}>
      <div style={style.cartColumn}>
        <ImageLink
          src={productOne.data?.images[2]}
          data={productOne.data}
          href={`/products/${productOne.data?.category}`}
        />
        <Headline1>{productOne.data?.category || 'category'}</Headline1>
        <LinkItem
          text="Shop"
          path={`/products/${productOne.data?.category}`}
          variant="white"
        />
      </div>

      <div style={style.cartColumn}>
        {productTwo.isSuccess && (
          <ImageLink
            src={productTwo.data?.images[0]}
            data={productTwo.data}
            href="/"
          />
        )}
        <Headline1>{productTwo.data?.category || 'category'}</Headline1>
        <LinkItem text="Shop" path="/" variant="white" />
      </div>
    </Grid>
  )
}

export default TwoColumnsProducts
