import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { apiSlice } from '../../api/feature/apiSlice'
import { cartActions } from '../../api/feature/cart-slice/cartSlice'

interface IProps {
  id: number
}

const CartItem: FC<IProps> = ({ id }) => {
  const getSingleProduct = apiSlice.useGetSingleProductQuery('1')
  const dispatch = useDispatch()

  const onClickAdd = () => {
    if (getSingleProduct.isSuccess) {
      dispatch(cartActions.addProduct(getSingleProduct.data))
    }
  }

  const onClickRemove = () => {
    dispatch(cartActions.removeProduct(id))
  }

  const onClickIncrease = async () => {
    dispatch(cartActions.increase(id))
  }

  const onClickDecrease = () => {
    dispatch(cartActions.decrease(id))
  }

  return (
    <div className="App">
      <button type="button" onClick={onClickAdd}>
        update cart
      </button>
      <button type="button" onClick={onClickRemove}>
        remove
      </button>
      <button type="button" onClick={onClickIncrease}>
        increase
      </button>
      <button type="button" onClick={onClickDecrease}>
        decrease
      </button>
      {/* <button type="button" onClick={onClickDecrease}>
        decrease
      </button> */}
    </div>
  )
}

export default CartItem
