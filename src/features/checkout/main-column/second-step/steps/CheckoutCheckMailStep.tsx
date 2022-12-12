import React, { FC } from 'react'
import Input from '../../../../../components/Input'
import { useForm } from '../../../../../hooks'
import { IPropsSteps } from '../../../checkout.interface'
import CheckoutButtonPurchase from '../../../CheckoutButtonPurchase'
import FilledStep from '../statuses/FilledStep'
import ModifyStep from '../statuses/ModifyStep'

const CheckoutCheckMailStep: FC<IPropsSteps> = ({
  id,
  status,
  setStepStatus,
  activeStep,
  handleEditStep,
  goToNextStep
}) => {
  const {
    inputs,
    errors,
    handleOnChange,
    handleOnBlur,
    onSubmitCheckValidation
  } = useForm({
    email: ''
  })

  const style = {
    wrapper: {
      backgroundColor: '#f6f6f6',
      padding: 25,
      borderBottom: '1px solid #e1e0e0',
      position: 'relative'
    }
  } as const

  return (
    <div className="step-checkMail" style={style.wrapper}>
      {/* filled */}
      <FilledStep
        id={id}
        status={status}
        activeStep={activeStep}
        title="You are ordering with this email address"
        handleEditStep={handleEditStep}
      />

      {/* not filled/ to edit */}
      <ModifyStep
        activeStep={activeStep}
        id={id}
        title="Login information"
        subtitle="Insert your email address to proceed with the purchase.">
        <Input
          label="Email address"
          name="email"
          type="email"
          dataValRegex="Invalid email address"
          dataValRegexPattern="^$|^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2,25})$"
          dataValRequired="The email address field is required."
          dataValLengthMax="50"
          value={inputs?.email || ''}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          error={errors.email}
        />

        <CheckoutButtonPurchase
          text="Proceed"
          onClick={(e) => goToNextStep(e, id, inputs)}
        />
      </ModifyStep>
    </div>
  )
}

export default CheckoutCheckMailStep
