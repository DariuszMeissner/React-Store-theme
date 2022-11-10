import React, { FC } from 'react'

interface IProps {
  pathImage: string | undefined
  children?: React.ReactNode
}

const ImageBackground: FC<IProps> = ({ pathImage, children }) => {
  const style = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${pathImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  } as const

  return <div style={style}>{children}</div>
}

ImageBackground.defaultProps = {
  children: <div />
}

export default ImageBackground
