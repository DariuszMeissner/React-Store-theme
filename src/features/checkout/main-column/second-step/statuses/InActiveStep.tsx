import React, { FC } from 'react'

interface IProps {
  status: { data: boolean; active: boolean }
  activeStep: string | undefined
  id: string
  title: string
}

const style = {
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '#646464'
  }
} as const

const InactiveStep: FC<IProps> = ({ status, activeStep, title, id }) => {
  const inactiveStep = !status.active && !status.data && activeStep !== id

  return inactiveStep ? <h2 style={style.title}>{title}</h2> : null
}

export default InactiveStep
