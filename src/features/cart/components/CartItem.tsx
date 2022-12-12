import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  cartActions,
  ICartProduct
} from '../../../api/feature/cart-slice/cartSlice'
import ItemName from './ItemName'
import ItemRemove from './ItemRemove'
import ItemPrice from './ItemPrice'
import ItemQuantity from './ItemQuantity'
import { ImageBackground } from '../../../components'
import { useSizeScreen } from '../../../hooks'
import { selectIsStep } from '../../../api/feature/checkout/checkoutSlice'

interface IProps {
  product: ICartProduct
}

const CartItem: FC<IProps> = ({ product }) => {
  const screen = useSizeScreen()
  const dispatch = useDispatch()
  const checkoutStep = useSelector(selectIsStep)

  const HEIGHT_IMAGE = screen.isX || screen.isL ? 180 : 160
  const HEIGHT_IMAGE_CHECKOUT_CONFIRMATION = 110

  const style = {
    item: {
      display: 'flex',
      marginTop: '25px'
    },
    image: {
      width: '100%',
      maxWidth: 160,
      height: checkoutStep.confirmation
        ? HEIGHT_IMAGE_CHECKOUT_CONFIRMATION
        : HEIGHT_IMAGE
    },
    itemInfo: {
      width: '60%',
      padding: screen.isS || screen.isM ? '0 15px' : '0 30px',
      height: !checkoutStep.confirmation ? HEIGHT_IMAGE : undefined,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: checkoutStep.confirmation ? 'start' : 'space-between'
    }
  } as const

  const onClickRemove = () => {
    dispatch(cartActions.removeProduct(product.id))
  }

  const onClickIncrease = async () => {
    dispatch(cartActions.increase(product.id))
  }

  const onClickDecrease = () => {
    dispatch(cartActions.decrease(product.id))
  }

  return (
    <div className="cart-item" style={style.item}>
      <div style={style.image}>
        <ImageBackground
          pathImage={product.images[0]}
          href={`/product/${product?.id}`}
        />
      </div>
      <div style={style.itemInfo}>
        <div>
          <ItemName name={product.title} />
          <ItemPrice price={product.price} />

          <ItemQuantity
            qty={product.quantity}
            increase={onClickIncrease}
            decrease={onClickDecrease}
            stock={product.stock}
          />
        </div>
        <ItemRemove onClick={onClickRemove} />
      </div>
    </div>
  )
}

export default CartItem
