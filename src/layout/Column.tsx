import React, { CSSProperties, FC } from 'react'
import useSizeScreen from '../hooks/useSizeScreen'

interface IProps {
  styleCss?: CSSProperties
  children: React.ReactNode
}

const Column: FC<IProps> = ({ styleCss, children }) => {
  const screen = useSizeScreen()

  const width =
    (screen.isS && '0 16px') ||
    (screen.isM && '0 32px') ||
    (screen.isX && '0 34px') ||
    undefined

  const style = {
    padding: width || undefined
  } as const

  return <div style={{ ...style, ...styleCss }}>{children}</div>
}

Column.defaultProps = {
  styleCss: {}
}

export default Column
