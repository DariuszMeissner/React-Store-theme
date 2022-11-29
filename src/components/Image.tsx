import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { IProduct } from '../api/feature/apiSlice'
import { ICartProduct } from '../api/feature/cart-slice/cartSlice'
import { useImageLoad } from '../hooks'

interface IProps {
  data?: IProduct | ICartProduct | null
  src: string
  href?: string
}

const style = {
  width: '100%',
  height: '100%'
}

const Image: FC<IProps> = ({ data, src, href }) => {
  const [isImage] = useImageLoad(src)

  const imageWithLInk = data && href && src && (
    <a href={href}>
      <img src={src} alt={data?.title} style={style} />
    </a>
  )
  const imageWithoutLInk = data && src && !href && (
    <img src={src} alt={data?.title} style={style} />
  )

  return !isImage ? (
    <Skeleton height="100%" />
  ) : (
    <>
      {imageWithLInk}
      {imageWithoutLInk}
    </>
  )
}

Image.defaultProps = {
  data: null,
  href: '/'
}

export default Image