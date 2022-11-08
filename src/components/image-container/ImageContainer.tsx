import React, { FC } from 'react'

interface IProps {
  pathImage: string | undefined
  title: string | undefined
}

const style = {
  width: '100%',
  height: '100%'
}

const ImageContainer: FC<IProps> = ({ pathImage, title }) => {
  return <img src={pathImage} alt={title} style={style} />
}

export default ImageContainer
