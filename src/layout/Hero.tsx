import React, { FC, Suspense } from 'react'
import { apiSlice } from '../api/feature/apiSlice'
import Headline1 from '../components/headline-1/Headline1'
import ImageBackground from '../components/image-background/ImageBackground'
import LinkItem from '../components/link-item/LinkItem'
import NoData from '../components/no-data/NoData'
import useSizeScreen from '../hooks/useSizeScreen'

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
      position: 'absolute',
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
      <div style={style.mediaTitle}>
        <Headline1>{isSuccess && data.category}</Headline1>
        <LinkItem text="Discover" path="/" variant="white" />
      </div>

      {isFetching ? (
        <NoData />
      ) : (
        <ImageBackground pathImage={data?.thumbnail} />
      )}
    </div>
  )
}

export default Hero
