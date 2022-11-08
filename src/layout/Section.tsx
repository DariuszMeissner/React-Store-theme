import React, { FC } from 'react'

interface IProps {
  children: React.ReactNode
}

const Section: FC<IProps> = ({ children }) => {
  return <div className="section">{children}</div>
}

export default Section
