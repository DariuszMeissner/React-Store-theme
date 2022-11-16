import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { IProduct } from '../../../api/feature/apiSlice'
import { modalActions } from '../../../api/feature/modal-slice/modalSlice'
import { Button } from '../../../components'
import Accordion from '../../../components/accordion/Accordion'
import ProductCode from './ProductCode'
import ProductPrice from './ProductPrice'
import ProductStock from './ProductStock'
import ProductTitle from './ProductTitle'
import MODALS from '../../../util/modalsID'

interface IProps {
  data: IProduct
}

const ProductDetails: FC<IProps> = ({ data }) => {
  const dispatch = useDispatch()

  const registerModalCart = useCallback(
    (id: number) => {
      dispatch(modalActions.register(id))
    },
    [MODALS.CART_ID]
  )

  return (
    <div>
      <ProductTitle title={data?.title || 'no title'} />
      <ProductPrice price={data?.price || 'no price'} currency="€" />
      <ProductStock stock={data?.stock || 'no stock'} />
      <Button
        text="Add to shopping bag"
        onClick={() => registerModalCart(MODALS.CART_ID)}
        variant="black"
        styleCss={{ width: '100%', margin: '0', marginTop: '25px' }}
      />
      <Accordion
        styleCss={{ marginTop: '40px' }}
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
