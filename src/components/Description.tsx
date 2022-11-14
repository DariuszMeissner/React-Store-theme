import React, { FC } from 'react'
import useSizeScreen from '../hooks/useSizeScreen'

interface IProps {
  children: React.ReactNode
  color?: string
  align?: 'center' | 'left' | 'right'
}

const Description: FC<IProps> = ({ children, color, align }) => {
  const screen = useSizeScreen()

  const style = {
    color,
    marginTop: !screen.isL ? '18px' : '30px',
    lineHeight: '22px',
    textAlign: align
  } as const

  return <p style={style}>{children}</p>
}

Description.defaultProps = {
  color: '#181818',
  align: 'left'
}

export default Description
