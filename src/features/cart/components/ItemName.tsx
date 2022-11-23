import React, { FC } from 'react'

interface IProps {
  name: string
}

const ItemName: FC<IProps> = ({ name }) => {
  return <div className="name-label">{name}</div>
}

export default ItemName
