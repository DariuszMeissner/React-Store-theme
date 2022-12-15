import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import {
  ICartProduct,
  selectAllProductsCart
} from '../../../../api/feature/cart-slice/cartSlice'
import Lists from '../../../../components/Lists'
import CartItem from '../../../cart/components/CartItem'

const CheckoutCartReview: FC = () => {
  const allProductsCart = useSelector(selectAllProductsCart)

  const renderListProductsReview = (product: ICartProduct) => {
    return <CartItem product={product} key={product.id} />
  }

  return (
    <div className="cart-review">
      <Lists data={allProductsCart} renderItem={renderListProductsReview} />
    </div>
  )
}

export default CheckoutCartReview
