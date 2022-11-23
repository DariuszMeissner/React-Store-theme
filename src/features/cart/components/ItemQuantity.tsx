import React, { FC } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
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
  qty: {
    padding: '0 10px'
  }
}

const ItemQuantity: FC<IProps> = ({ qty, stock, increase, decrease }) => {
  return (
    <div className="qty-label" style={style.container}>
      <Button
        label="icon-decrease"
        disabled={qty === 1}
        icon={AiOutlineMinusCircle}
        onClick={decrease}
        styleCss={{
          ...style.button,
          color: qty === 1 ? 'lightgray' : '#181818'
        }}
      />
      <span style={style.qty}>{qty}</span>
      <Button
        label="icon-increase"
        disabled={qty === stock}
        icon={AiOutlinePlusCircle}
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
