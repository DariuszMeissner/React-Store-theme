import React, { FC } from 'react'
import useSizeScreen from '../hooks/useSizeScreen'

interface IProps {
  children: React.ReactNode
}

const Column: FC<IProps> = ({ children }) => {
  const screen = useSizeScreen()

  const width =
    (screen.isS && '0 16px') ||
    (screen.isM && '0 32px') ||
    (screen.isL && '0 34px') ||
    undefined

  const style = {
    padding: width || undefined
  } as const

  return <div style={style}>{children}</div>
}

export default Column
