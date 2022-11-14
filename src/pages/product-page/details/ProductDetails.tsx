import React, { FC } from 'react'
import { IProduct } from '../../../api/feature/apiSlice'
import { Breadcrumbs, ButtonLink, Headline1 } from '../../../components'
import Accordion from '../../../components/accordion/Accordion'
import ProductCode from './ProductCode'
import ProductPrice from './ProductPrice'

interface IProps {
  data: IProduct | undefined
}

const ProductDetails: FC<IProps> = ({ data }) => {
  return (
    <div>
      <Breadcrumbs data={data} />
      <Headline1>{data?.title || 'no title'}</Headline1>
      <ProductPrice price={data?.price} currency="€" />
      <ButtonLink text="Add to shopping bag" path="" />
      <Accordion
        items={[
          { title: 'Description', content: data?.description },
          { title: 'Brand', content: data?.brand }
        ]}
      />
      <ProductCode code={data?.id} />
    </div>
  )
}

export default ProductDetails
