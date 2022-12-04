import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectAllProductsCart } from '../../../../api/feature/cart-slice/cartSlice'
import CartItem from '../../../cart/components/CartItem'

const CheckoutCartReview: FC = () => {
  const allProductsCart = useSelector(selectAllProductsCart)

  const generateProductsReview = () => {
    return allProductsCart.map((product) => (
      <CartItem product={product} key={product.id} />
    ))
  }

  const cartReviewList = generateProductsReview()

  return <div className="cart-review">{cartReviewList}</div>
}

export default CheckoutCartReview
