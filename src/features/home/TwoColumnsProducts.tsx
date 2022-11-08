import React, { FC } from 'react'
import { apiSlice } from '../../api/feature/apiSlice'
import Headline1 from '../../components/headline-1/Headline1'
import ImageContainer from '../../components/image-container/ImageContainer'
import LinkItem from '../../components/link-item/LinkItem'
import NoData from '../../components/no-data/NoData'

interface IProps {
  productIdOne: string
  productIdTwo: string
}

const TwoColumnsProducts: FC<IProps> = ({ productIdOne, productIdTwo }) => {
  const getProductOne = apiSlice.useGetSingleProductQuery(productIdOne)
  const getProductTwo = apiSlice.useGetSingleProductQuery(productIdTwo)

  return (
    <div className="wrap">
      <div>
        <div style={{ height: '400px' }}>
          <ImageContainer
            pathImage={getProductOne.data?.images[1]}
            title={getProductOne.data?.title}
          />
        </div>
        <Headline1 color="black">
          {getProductOne.isSuccess && getProductOne.data?.category}
        </Headline1>
        <LinkItem text="Shop" path="/" variant="white" />
      </div>
    </div>
  )
}

export default TwoColumnsProducts
