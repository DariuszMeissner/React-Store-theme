import React, { FC } from 'react'

interface IProps {
  pathImage: string | undefined
}

const ImageBackground: FC<IProps> = ({ pathImage }) => {
  const style = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${pathImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  } as const

  return <div style={style} />
}

export default ImageBackground
