import React, { FC } from 'react'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import { Button } from '../../../components'

interface IProps {
  qty: number
  stock: number
  increase: () => void
  decrease: () => void
}

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px'
  },
  button: {
    margin: '0'
  },
  qtyLabel: {
    fontWeight: 300
  },
  qty: {
    padding: '0 10px',
    fontWeight: 500
  }
}

const ItemQuantity: FC<IProps> = ({ qty, stock, increase, decrease }) => {
  return (
    <div className="qty-label" style={style.container}>
      <span style={style.qtyLabel}>Quantity:</span>
      <span style={style.qty}>{qty}</span>
      <Button
        type="button"
        label="icon-decrease"
        disabled={qty === 1}
        icon={CiCircleMinus}
        onClick={decrease}
        styleCss={{
          ...style.button,
          color: qty === 1 ? 'lightgray' : '#181818'
        }}
      />
      <Button
        type="button"
        label="icon-increase"
        disabled={qty === stock}
        icon={CiCirclePlus}
        onClick={increase}
        styleCss={{
          ...style.button,
          color: qty === stock ? 'lightgray' : '#181818'
        }}
      />
    </div>
  )
}

export default ItemQuantity
