import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IPropsSteps } from '../../../checkout.interface'
import InactiveStep from '../statuses/InActiveStep'
import FilledStep from '../statuses/FilledStep'
import ModifyStep from '../statuses/ModifyStep'
import { selectAllShippingMethods } from '../../../../../api/feature/checkout/checkoutSlice'
import { RadioButton } from '../../../../../components'
import CheckoutButtonPurchase from '../../../CheckoutButtonPurchase'

const style = {
  wrapper: {
    backgroundColor: '#f6f6f6',
    padding: 25,
    borderBottom: '1px solid #e1e0e0',
    position: 'relative'
  }
} as const

const CheckoutDeliveryMethodStep: FC<IPropsSteps> = ({
  id,
  status,
  activeStep,
  setStepStatus,
  handleEditStep,
  goToNextStep
}) => {
  const shippingMethods = useSelector(selectAllShippingMethods)
  const [delivery, setDelivery] = useState<string>(shippingMethods[0])

  useEffect(() => {
    if (activeStep === id) setStepStatus(id)
  }, [activeStep])

  const onChangeShippingMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelivery(e.target.value)
  }

  return (
    <div className="step-deliveryMethod" style={style.wrapper}>
      {/* inactive step */}
      <InactiveStep
        id={id}
        status={status}
        activeStep={activeStep}
        title="Delivery information"
      />

      {/* filled step */}
      <FilledStep
        id={id}
        status={status}
        activeStep={activeStep}
        title="Delivery information"
        handleEditStep={handleEditStep}
      />

      {/* not filled step/modify */}
      <ModifyStep activeStep={activeStep} id={id} title="Delivery information">
        {shippingMethods.map((method) => (
          <RadioButton
            label={method}
            value={method === delivery}
            onChange={onChangeShippingMethod}
            key={method}
          />
        ))}
        <CheckoutButtonPurchase
          text="Proceed"
          onClick={(e) => goToNextStep(e, id, delivery)}
        />
      </ModifyStep>
    </div>
  )
}

export default CheckoutDeliveryMethodStep
