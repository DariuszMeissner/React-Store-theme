import React, { FC } from 'react'

type TProps = {
  children: React.ReactNode
}

const OrderPage: FC<TProps> = ({ children }) => {
  return <div>{children}</div>
}

export default OrderPage
