import React, { FC } from 'react'
import { IProduct } from '../api/feature/apiSlice'
import { ICartProduct } from '../api/feature/cart-slice/cartSlice'

interface IProps {
  data: IProduct | ICartProduct
  src: string | undefined
  href?: string | undefined
}

const style = {
  width: '100%',
  height: '100%'
}

const Image: FC<IProps> = ({ data, src, href }) => {
  const noImage = !data && <p>...loading</p>
  const imageWithLInk = data && href && (
    <a href={href}>
      <img src={src} alt={data?.title} style={style} />
    </a>
  )
  const imageWithoutLInk = !href && (
    <img src={src} alt={data?.title} style={style} />
  )

  return (
    <div>
      {noImage}
      {imageWithLInk}
      {imageWithoutLInk}
    </div>
  )
}

Image.defaultProps = {
  href: undefined
}

export default Image
