import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPropsSteps } from '../../../checkout.interface'
import InactiveStep from '../statuses/InActiveStep'
import FilledStep from '../statuses/FilledStep'
import ModifyStep from '../statuses/ModifyStep'
import {
  savePayment,
  selectAllPaymnetMethods
} from '../../../../../api/feature/checkout/checkoutSlice'
import { RadioButton } from '../../../../../components'
import CheckoutButtonPurchase from '../../../CheckoutButtonPurchase'

const CheckoutPaymentMethodStep: FC<IPropsSteps> = ({
  id,
  status,
  activeStep,
  setStepStatus,
  handleEditStep,
  goToNextStep
}) => {
  const dispatch = useDispatch()
  const paymentMethods = useSelector(selectAllPaymnetMethods)
  const [payment, setPayment] = useState<string>(paymentMethods[0])

  const style = {
    wrapper: {
      backgroundColor: activeStep !== id ? '#fff' : '#f6f6f6',
      padding: 25,
      borderBottom: '1px solid #e1e0e0',
      position: 'relative'
    }
  } as const

  useEffect(() => {
    if (activeStep === id) setStepStatus(id)
  }, [activeStep])

  const onChangePaymentMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value)
  }

  const handleOnProceed = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    dispatch(savePayment(payment))
    goToNextStep(id)
  }

  return (
    <div className="step-paymentMethod" style={style.wrapper}>
      {/* inactive step */}
      <InactiveStep
        id={id}
        status={status}
        activeStep={activeStep}
        title="Payment"
      />

      {/* filled step */}
      <FilledStep
        id={id}
        status={status}
        activeStep={activeStep}
        title="Payment information"
        handleEditStep={handleEditStep}
        formData={{ payment }}
      />

      {/* not filled step/modify */}
      <ModifyStep activeStep={activeStep} id={id} title="Payment">
        {paymentMethods.map((method) => (
          <RadioButton
            label={method}
            value={method === payment}
            onChange={onChangePaymentMethod}
            key={method}
          />
        ))}

        <CheckoutButtonPurchase text="Proceed" onClick={handleOnProceed} />
      </ModifyStep>
    </div>
  )
}

export default CheckoutPaymentMethodStep
