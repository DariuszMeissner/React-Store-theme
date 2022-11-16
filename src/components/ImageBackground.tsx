import React, { FC } from 'react'

interface IProps {
  pathImage: string | undefined
  children?: React.ReactNode
  height?: string
  href?: string | undefined
}

const ImageBackground: FC<IProps> = ({ pathImage, children, height, href }) => {
  const style = {
    width: '100%',
    height,
    backgroundImage: `url(${pathImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  } as const

  return (
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
