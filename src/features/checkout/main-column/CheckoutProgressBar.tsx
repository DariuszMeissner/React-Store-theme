import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import {
  selectAllSteps,
  selectCurrentStep,
  selectIsStep
} from '../../../api/feature/checkout/checkoutSlice'
import Lists from '../../../components/Lists'

const style = {
  wrapper: {
    background: '#F6F6F6',
    marginBottom: 24
  },
  steps: {
    height: 56
  },
  stepItem: {
    fontWeight: 500,
    textTransform: 'uppercase',
    padding: '0 25px'
  },
  lists: {
    display: 'flex',
    height: '100%',
    alignItems: 'center'
  }
} as const

const CheckoutProgressBar: FC = () => {
  const allSteps = useSelector(selectAllSteps)
  const currentStep = useSelector(selectCurrentStep)
  const isStep = useSelector(selectIsStep)

  const renderListElement = (steps: { name: string; step: number }) => {
    return steps.name === currentStep ? (
      <li style={style.stepItem}>
        <span>{`${steps.step}/${allSteps.length} ${
          isStep.cart ? 'Shopping Bag' : 'Proceed with the order'
        }`}</span>
      </li>
    ) : (
      <div />
    )
  }

  return (
    <div className="progressBar" style={style.wrapper}>
      <div style={style.steps}>
        <ol style={style.lists}>
          <Lists data={allSteps} renderItem={renderListElement} />
        </ol>
      </div>
    </div>
  )
}

export default CheckoutProgressBar
