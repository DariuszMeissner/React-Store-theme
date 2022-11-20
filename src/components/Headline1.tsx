import React, { FC } from 'react'

interface IProps {
  children: React.ReactNode
  color?: string
}

const Headline1: FC<IProps> = ({ children, color }) => {
  const style = {
    fontSize: '30px',
    lineHeight: '40px',
    color,
    marginTop: '30px',
    textTransform: 'capitalize'
  } as const

  return <h2 style={style}>{children}</h2>
}

Headline1.defaultProps = {
  color: '#181818'
}

export default Headline1
