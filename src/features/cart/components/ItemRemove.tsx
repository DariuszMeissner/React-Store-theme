import React, { FC } from 'react'
import { IoTrashBinOutline } from 'react-icons/io5'
import { Button } from '../../../components'

interface IProps {
  onClick: () => void
}

const ItemRemove: FC<IProps> = ({ onClick }) => {
  return (
    <div className="name-label">
      <Button
        type="button"
        text="Remove"
        label="icon-remove"
        icon={IoTrashBinOutline}
        onClick={onClick}
        iconSize={16}
      />
    </div>
  )
}

export default ItemRemove
