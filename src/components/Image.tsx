import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { IProduct } from '../api/feature/apiSlice'
import { ICartProduct } from '../api/feature/cart-slice/cartSlice'
import { useImageLoad } from '../hooks'

interface IProps {
  data?: IProduct | ICartProduct | null
  src: string
  href?: string | null
}

const style = {
  width: '100%',
  height: '100%'
}

const Image: FC<IProps> = ({ data, src, href }) => {
  const [isImage] = useImageLoad(src)

  const imageWithLInk = href && src && (
    <Link to={href}>
      <img src={src} alt={data?.title} style={style} />
    </Link>
  )
  const imageWithoutLInk = src && !href && (
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
  href: null
}

export default Image
