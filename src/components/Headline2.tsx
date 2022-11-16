import React, { CSSProperties, FC } from 'react'

interface IProps {
  children: React.ReactNode
  color?: string
  styleCss?: CSSProperties
}

const Headline2: FC<IProps> = ({ children, color, styleCss }) => {
  const style = {
    fontSize: '22px',
    lineHeight: '40px',
    color,
    marginTop: '20px',
    marginBottom: '20px',
    textTransform: 'capitalize',
    textAlign: 'center',
    ...styleCss
  } as const

  return <h2 style={style}>{children}</h2>
}

Headline2.defaultProps = {
  color: '#181818',
  styleCss: {}
}

export default Headline2
