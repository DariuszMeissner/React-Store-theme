/* eslint-disable max-len */
import React, { ChangeEvent, FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  registerConfirmationStatus,
  saveEmail,
  selectConfirmationStatus
} from '../../../../../api/feature/checkout/checkoutSlice'
import Input from '../../../../../components/Input'

const style = {
  wrapper: {
    backgroundColor: '#f6f6f6',
    padding: 25
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 15
  },
  description: {
    fontWeight: 300
  }
} as const

const CheckoutCheckMailStep: FC = () => {
  const dispatch = useDispatch()
  const confirmationStatus = useSelector(selectConfirmationStatus)

  const [inputs, setInputs] = useState({ email: '' })
  const [errors, setErrors] = useState({ email: '' })

  const handleValidation = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    const isEmptyText = event.target.getAttribute('data-val-required')
    const isNotValidText = event.target.getAttribute('data-val-regex')
    const pattern = event.target.getAttribute('data-val-regex-pattern') || ''
    const maxLength = event.target.getAttribute('data-val-length-max') || 0

    const isEmpty = inputs[name as keyof typeof inputs] === ''
    const isNotValid =
      !inputs[name as keyof typeof inputs].match(pattern) ||
      value.length > Number(maxLength)
    const isValid =
      inputs[name as keyof typeof inputs].match(pattern) &&
      value.length <= Number(maxLength)

    // checking validation
    if (isEmpty) {
      setErrors((values) => ({
        ...values,
        [name]: isEmptyText
      }))
    } else if (isNotValid) {
      setErrors((values) => ({
        ...values,
        [name]: isNotValidText
      }))
    } else if (isValid) {
      setErrors((values) => ({
        ...values,
        [name]: ''
      }))
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    handleValidation(event)
  }

  const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!errors.email) {
      dispatch(saveEmail(inputs.email))
      dispatch(registerConfirmationStatus({ type: 'mail', value: true }))
    }
  }

  return (
    <div className="step-checkMail" style={style.wrapper}>
      {/* filled */}
      {confirmationStatus.mail && <p>ok Modify</p>}

      {/* not filled/ to edit */}
      {!confirmationStatus.mail && (
        <>
          <div style={style.title}>Enter your email to continue your order</div>
          <p style={style.description}>
            Insert your email address to proceed with the purchase. We will use
            your email exclusively to send you information on this order.
          </p>

          <form>
            <Input
              label="Email address"
              name="email"
              type="email"
              dataValRegex="Invalid email address"
              dataValRegexPattern="^$|^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2,25})$"
              dataValRequired="The email address field is required."
              dataValLengthMax="25"
              value={inputs?.email || ''}
              onChange={handleChange}
              onBlur={handleOnBlur}
              error={errors.email}
            />

            <button type="button" onClick={handleOnSubmit}>
              proceed to purchase
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default CheckoutCheckMailStep
