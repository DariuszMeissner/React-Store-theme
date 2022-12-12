import React, { FC, useState } from 'react'
import steps from '../../stepsConfirmation'
import CheckoutCheckMailStep from './steps/CheckoutCheckMailStep'
import CheckoutDeliveryMethodStep from './steps/CheckoutDeliveryMethodStep'
import CheckoutFinalizationStep from './steps/CheckoutFinalizationStep'
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
    paymentMethod: { active: false, data: false },
    finalizationStep: { active: false, data: false }
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

  function toggleStep(currentStep: string) {
    setActiveStep(activeStep === currentStep ? getNextStep() : currentStep)
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

    toggleStep(currentStep)
  }

  const goToNextStep = (id: string) => {
    setActiveStep(getNextStep())
    setDataOnReady(id)
  }

  return (
    <div className="checkout-confirmation-steps">
      {/* step 1 of 5 */}
      <CheckoutCheckMailStep
        id={steps.mail}
        status={status.mail}
        activeStep={activeStep}
        handleEditStep={editStep}
        setStepStatus={setStepStatus}
        goToNextStep={goToNextStep}
      />
      {/* step 2 of 5 */}
      <CheckoutShippingAddressStep
        id={steps.shippingAddress}
        activeStep={activeStep}
        status={status.shippingAddress}
        setStepStatus={setStepStatus}
        handleEditStep={editStep}
        goToNextStep={goToNextStep}
      />
      {/* step 3 of 5 */}
      <CheckoutDeliveryMethodStep
        id={steps.deliveryMethod}
        activeStep={activeStep}
        status={status.deliveryMethod}
        setStepStatus={setStepStatus}
        handleEditStep={editStep}
        goToNextStep={goToNextStep}
      />
      {/* step 4 of 5 */}
      <CheckoutPaymentMethodStep
        id={steps.paymentMethod}
        activeStep={activeStep}
        status={status.paymentMethod}
        setStepStatus={setStepStatus}
        handleEditStep={editStep}
        goToNextStep={goToNextStep}
      />

      {/* finalization step 5 of 5 */}
      <CheckoutFinalizationStep
        id={steps.finalizationStep}
        activeStep={activeStep}
      />
    </div>
  )
}

export default CheckoutConfirmationStep
