import React, { FC, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useImageLoad } from '../hooks'

interface IProps {
  pathImage: string | undefined
  children?: React.ReactNode
  height?: string | number
  href?: string | undefined
}

const ImageBackground: FC<IProps> = ({ pathImage, children, height, href }) => {
  const [isImage] = useImageLoad(pathImage)

  const style = {
    width: '100%',
    height,
    backgroundImage: `url(${pathImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  } as const

  return !isImage ? (
    <Skeleton height={height} />
  ) : (
    <>
      {href && (
        <a href={href}>
          <div style={style}>{children}</div>
        </a>
      )}

      {!href && <div style={style}>{children}</div>}
    </>
  )
}

ImageBackground.defaultProps = {
  children: <div />,
  height: '100%',
  href: undefined
}

export default ImageBackground
