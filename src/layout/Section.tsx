import React, { CSSProperties, FC } from 'react'
import useSizeScreen from '../hooks/useSizeScreen'
import { BREAKPOINTS } from '../util'

interface IProps {
  children: React.ReactNode
  type?: 'fullWidth' | 'wrap'
  styleCss?: CSSProperties
}

const Section: FC<IProps> = ({ children, type, styleCss }) => {
  const screen = useSizeScreen()

  const width =
    (screen.isS && '0 16px') ||
    (screen.isM && '0 32px') ||
    (screen.isL && '0 32px') ||
    (screen.isX && '0 96px') ||
    undefined

  const style = {
    padding: type === 'wrap' ? width : undefined,
    margin:
      (screen.isS && '64px auto') || screen.isM ? '56px auto' : '96px auto',
    maxWidth: BREAKPOINTS.X,
    width: '100%'
  } as const

  return (
    <div className="section" style={{ ...style, ...styleCss }}>
      {children}
    </div>
  )
}

Section.defaultProps = {
  type: 'wrap',
  styleCss: {}
}

export default Section
