import React, { FC, useState } from 'react'
import { IData } from '../../../../hooks/useForm'
import steps from '../../stepsConfirmation'
import CheckoutCheckMailStep from './steps/CheckoutCheckMailStep'
import CheckoutDeliveryMethodStep from './steps/CheckoutDeliveryMethodStep'
import CheckoutPaymentMethodStep from './steps/CheckoutPaymentMethodStep'
import CheckoutShippingAddressStep from './steps/CheckoutShippingAddressStep'

const INITIAL_STATE = 'mail'

const CheckoutConfirmationStep: FC = () => {
  const [activeStep, setActiveStep] = useState<string | undefined>(
    INITIAL_STATE
  )
  const [status, setStatus] = useState({
    mail: { active: true, data: false },
    shippingAddress: { active: false, data: false },
    deliveryMethod: { active: false, data: false },
    paymentMethod: { active: false, data: false }
  })

  function getNextStep() {
    return Object.keys(status).find(
      (key) => status[key as keyof typeof status].active === false
    )
  }

  function deactivateStep() {
    setStatus((prev) => ({
      ...prev,
      [activeStep as keyof typeof status]: {
        ...prev[activeStep as keyof typeof status],
        active: false
      }
    }))
  }

  function setDataOnReady(currentStep: string) {
    setStatus((prev) => ({
      ...prev,
      [currentStep]: {
        ...prev[currentStep as keyof typeof status],
        data: true
      }
    }))
  }

  const setStepStatus = (id: string) => {
    setStatus((prev) => ({
      ...prev,
      [id]: {
        ...prev[id as keyof typeof status],
        active: true
      }
    }))
  }

  const editStep = (currentStep: string) => {
    const stepNotFilled = !status[activeStep as keyof typeof status].data
    if (stepNotFilled) deactivateStep()

    setActiveStep(activeStep === currentStep ? getNextStep() : currentStep)
  }

  const goToNextStep = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
    data: IData | string
  ) => {
    e.preventDefault()

    // if (onSubmitCheckValidation()) {
    //   //   dispatch(saveEmail(inputs.email))
    //   //   dispatch(registerConfirmationStatus({ type: id, value: true }))
    //   //   handleEditStep(id)
    //   // }

    // dispatch(registerConfirmationStatus({ type: id, value: true }))

    setActiveStep(getNextStep())
    setDataOnReady(id)
  }

  return (
    <div className="checkout-confirmation-steps">
      {/* step 1 of 4 */}
      <CheckoutCheckMailStep
        id={steps.mail}
        activeStep={activeStep}
        handleEditStep={editStep}
        status={status.mail}
        setStepStatus={setStepStatus}
        goToNextStep={goToNextStep}
      />

      {/* step 2 of 4 */}
      <CheckoutShippingAddressStep
        id={steps.shippingAddress}
        activeStep={activeStep}
        status={status.shippingAddress}
        setStepStatus={setStepStatus}
        handleEditStep={editStep}
        goToNextStep={goToNextStep}
      />

      {/* step 3 of 4 */}
      <CheckoutDeliveryMethodStep
        id={steps.deliveryMethod}
        activeStep={activeStep}
        status={status.deliveryMethod}
        setStepStatus={setStepStatus}
        handleEditStep={editStep}
        goToNextStep={goToNextStep}
      />

      {/* step 4 of 4 */}
      <CheckoutPaymentMethodStep
        id={steps.paymentMethod}
        activeStep={activeStep}
        status={status.paymentMethod}
        setStepStatus={setStepStatus}
        handleEditStep={editStep}
        goToNextStep={goToNextStep}
      />
    </div>
  )
}

export default CheckoutConfirmationStep
