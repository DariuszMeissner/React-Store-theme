import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { registerStep } from '../api/feature/checkout/checkoutSlice'
import { Headline1 } from '../components'
import CheckoutColumnWrapper from '../features/checkout/CheckoutColumnWrapper'

import { Section } from '../layout'

const Checkout: FC = () => {
  const dispatch = useDispatch()
  const { step } = useParams()

  useEffect(() => {
    if (step) {
      dispatch(registerStep(step))
    }
  }, [step])

  return (
    <Section styleCss={{ margin: 0, marginBottom: 48 }}>
      <Headline1 styleCss={{ textAlign: 'center', margin: '48px 0' }}>
        {step === 'cart' ? 'Shopping Bag' : 'Proceed to purchase'}
      </Headline1>

      {/* content */}
      <CheckoutColumnWrapper />
    </Section>
  )
}

export default Checkout
