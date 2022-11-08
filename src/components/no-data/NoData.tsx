import React, { FC } from 'react'

const NoData: FC = () => {
  const style = {
    width: '100%',
    height: '100%',
    background: 'lightgray'
  } as const
  return <div style={style} />
}

export default NoData
