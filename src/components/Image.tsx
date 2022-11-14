import React, { FC } from 'react'
import { IProduct } from '../api/feature/apiSlice'

interface IProps {
  data: IProduct | undefined
  src: string | undefined
  href?: string | undefined
}

const style = {
  width: '100%',
  height: '100%'
}

const Image: FC<IProps> = ({ data, src, href }) => {
  return (
    <>
      {!data && <p>...loading</p>}

      {data && href && (
        <a href={href}>
          <img src={src} alt={data?.title} style={style} />
        </a>
      )}

      {!href && <img src={src} alt={data?.title} style={style} />}
    </>
  )
}

Image.defaultProps = {
  href: undefined
}

export default Image
