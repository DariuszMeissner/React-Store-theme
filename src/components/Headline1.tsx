import React, { CSSProperties, FC } from 'react'

interface IProps {
  children: React.ReactNode
  color?: string
  styleCss?: CSSProperties | null
}

const Headline1: FC<IProps> = ({ children, color, styleCss }) => {
  const style = {
    fontSize: '30px',
    lineHeight: '40px',
    color,
    marginTop: '30px',
    textTransform: 'capitalize',
    ...styleCss
  } as const

  return <h2 style={style}>{children}</h2>
}

Headline1.defaultProps = {
  color: '#181818',
  styleCss: null
}

export default Headline1
