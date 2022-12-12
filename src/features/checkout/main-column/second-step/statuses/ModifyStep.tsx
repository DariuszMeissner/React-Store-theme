import React, { FC, ReactNode } from 'react'

interface IProps {
  activeStep: string | undefined
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

const style = {
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    marginBottom: 25
  },
  subtitle: {
    textTransform: 'uppercase',
    marginBottom: 25
  },
  description: {
    fontWeight: 300,
    marginBottom: 20
  }
} as const

const ModifyStep: FC<IProps> = ({
  activeStep,
  title,
  subtitle,
  id,
  children
}) => {
  const modifyStep = activeStep === id

  return modifyStep ? (
    <div>
      <h2 style={style.title}>{title}</h2>
      {subtitle && <div style={style.subtitle}>{subtitle}</div>}
      <form>{children}</form>
    </div>
  ) : null
}

ModifyStep.defaultProps = {
  subtitle: ''
}

export default ModifyStep
