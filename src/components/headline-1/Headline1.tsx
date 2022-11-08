import React, { FC } from 'react'

interface IProps {
  children: React.ReactNode
  color?: string
}

const Headline1: FC<IProps> = ({ children, color }) => {
  const style = {
    fontSize: '25px',
    color,
    marginBottom: '25px',
    textTransform: 'uppercase'
  } as const

  return <h2 style={style}>{children}</h2>
}

Headline1.defaultProps = {
  color: 'white'
}

export default Headline1
