import React, { FC } from 'react'

interface IProps {
  count: number
}

const style = {
  paddingRight: '10px',
  lineHeight: '16px'
}

const CountLabel: FC<IProps> = ({ count }) => {
  return (
    <div className="count-label" style={style}>
      You have {`${count}`} {count === 1 ? 'item' : 'items'} in your Shopping
      Bag
    </div>
  )
}

export default CountLabel
