import React, { FC } from 'react'

interface IProps {
  length: number
}

const LoadMore: FC<IProps> = ({ length }) => {
  const style = {
    fontWeight: '300',
    textAlign: 'center',
    margin: '30px 0'
  } as const

  return <div style={style}>Showing&nbsp;{length} items</div>
}

export default LoadMore
