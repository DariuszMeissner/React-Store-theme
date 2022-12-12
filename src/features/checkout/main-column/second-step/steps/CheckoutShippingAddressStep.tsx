import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../../../../components'
import useForm from '../../../../../hooks/useForm'
import CheckoutButtonPurchase from '../../../CheckoutButtonPurchase'
import { IPropsSteps } from '../../../checkout.interface'
import InactiveStep from '../statuses/InActiveStep'
import FilledStep from '../statuses/FilledStep'
import ModifyStep from '../statuses/ModifyStep'
import { saveShippingAddress } from '../../../../../api/feature/checkout/checkoutSlice'

const CheckoutShippingAddressStep: FC<IPropsSteps> = ({
  id,
  status,
  activeStep,
  setStepStatus,
  handleEditStep,
  goToNextStep
}) => {
  const dispatch = useDispatch()

  const {
    inputs,
    errors,
    handleOnChange,
    handleOnBlur,
    onSubmitCheckValidation
  } = useForm({
    name: '',
    surname: '',
    country: '',
    postcode: '',
    street: '',
    phone: ''
  })

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

  const handleOnProceed = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (onSubmitCheckValidation()) {
      dispatch(saveShippingAddress(inputs))
      goToNextStep(id)
    }
  }

  return (
    <div className="step-shippingAddress" style={style.wrapper}>
      {/* inactive step */}
      <InactiveStep
        id={id}
        status={status}
        activeStep={activeStep}
        title="Shipping details"
      />

      {/* filled step */}
      <FilledStep
        id={id}
        status={status}
        activeStep={activeStep}
        title="Shipping address"
        handleEditStep={handleEditStep}
        formData={inputs}
      />

      {/* not filled step/modify */}
      <ModifyStep activeStep={activeStep} id={id} title="Shipping details">
        <Input
          label="Name"
          name="name"
          type="text"
          dataValRegex="Invalid name"
          dataValRegexPattern="^[a-zA-Z]*$"
          dataValRequired="The name field is required."
          dataValLengthMax="20"
          value={inputs?.name || ''}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          error={errors.name}
        />

        <Input
          label="Surname"
          name="surname"
          type="text"
          dataValRegex="Invalid name"
          dataValRegexPattern="^[a-zA-Z]*$"
          dataValRequired="The surname field is required."
          dataValLengthMax="20"
          value={inputs?.surname || ''}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          error={errors.surname}
        />

        <Input
          label="Country"
          name="country"
          type="text"
          dataValRegex="Invalid country"
          dataValRegexPattern="^[a-zA-Z]*$"
          dataValRequired="The country field is required."
          dataValLengthMax="20"
          value={inputs?.country || ''}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          error={errors.country}
        />

        <Input
          label="Postcode"
          name="postcode"
          type="text"
          dataValRegex="Invalid postcode"
          dataValRegexPattern="^[a-z0-9][a-z0-9\- ]{0,10}$"
          dataValRequired="The postcode field is required."
          dataValLengthMax="10"
          value={inputs?.postcode || ''}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          error={errors.postcode}
        />

        <Input
          label="Street"
          name="street"
          type="text"
          dataValRegex="Invalid street"
          dataValRegexPattern="^\s*\S+(?:\s+\S+)"
          dataValRequired="The street field is required."
          dataValLengthMax="20"
          value={inputs?.street || ''}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          error={errors.street}
        />

        <Input
          label="Phone number"
          name="phone"
          type="text"
          dataValRegex="Invalid phone number"
          dataValRegexPattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          dataValRequired="The phone number field is required."
          dataValLengthMax="20"
          value={inputs?.phone || ''}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          error={errors.phone}
        />

        <CheckoutButtonPurchase text="Proceed" onClick={handleOnProceed} />
      </ModifyStep>
    </div>
  )
}

export default CheckoutShippingAddressStep
