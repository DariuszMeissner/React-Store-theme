import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { IProduct } from '../../../api/feature/apiSlice'
import { registerModal } from '../../../api/feature/modal-slice/modalSlice'
import { Button } from '../../../components'
import Accordion from '../../../components/accordion/Accordion'
import ProductCode from './ProductCode'
import ProductPrice from './ProductPrice'
import ProductStock from './ProductStock'
import ProductTitle from './ProductTitle'
import MODALS from '../../../util/modalsID'
import { addProduct } from '../../../api/feature/cart-slice/cartSlice'
import { useDisableScroll } from '../../../hooks'

interface IProps {
  data: IProduct
}

const ProductDetails: FC<IProps> = ({ data }) => {
  const dispatch = useDispatch()
  const { lockScroll } = useDisableScroll()

  const registerModalCart = useCallback((id: number) => {
    dispatch(registerModal(id))
    dispatch(addProduct(data))
    lockScroll()
  }, [])

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
        titles={['Description', 'Brand']}
        styleCss={{ marginTop: '40px' }}>
        <p>{data?.description}</p>
        <p>{data?.brand}</p>
      </Accordion>
      <ProductCode code={data?.id} />
    </div>
  )
}

export default ProductDetails
