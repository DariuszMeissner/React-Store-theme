import React, { FC } from 'react'
import { apiSlice } from '../../api/feature/apiSlice'
import Headline1 from '../../components/Headline1'
import ImageBackground from '../../components/ImageBackground'
import LinkItem from '../../components/link-item/LinkItem'
import useSizeScreen from '../../hooks/useSizeScreen'

interface IProps {
  productId: string
}

const Hero: FC<IProps> = ({ productId }) => {
  const screen = useSizeScreen()
  const { data, isFetching, isSuccess } =
    apiSlice.useGetSingleProductQuery(productId)

  const style = {
    hero: {
      width: '100%',
      height: screen.isS ? '100vh' : '600px',
      position: 'relative'
    },
    mediaTitle: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      textAlign: 'center'
    }
  } as const

  return (
    <div style={style.hero}>
      {isSuccess && (
        <ImageBackground pathImage={data?.thumbnail}>
          <div style={style.mediaTitle}>
            <Headline1 color="white">{isSuccess && data.category}</Headline1>
            <LinkItem
              text="Discover"
              path={`/products/${data.category}`}
              variant="white"
            />
          </div>
        </ImageBackground>
      )}
    </div>
  )
}

export default Hero
