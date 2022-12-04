import { createSlice } from '@reduxjs/toolkit'

export interface IStep {
  step: 'cart' | 'confirmation'
}

export interface ICheckout {
  step: {
    cart: boolean
    confirmation: boolean
  }
  currentStep: string | null
  stepNumber: [{ name: 'cart'; step: 1 }, { name: 'confirmation'; step: 2 }]
  loginInformation: {
    email: string | null
  }
  shippingDetails: {
    name: string | null
    surname: string | null
    postcode: string | null
    country: string | null
    email: string | null
    phone: string | null
  }
  shipping: {
    current: 'Standard' | 'Delivery in 4-6 working days' | 'Free' | null
    methods: ['Standard', 'Delivery in 4-6 working days', 'Free']
  }
  payment: {
    current: 'stripe' | 'transfer' | null
    methods: ['stripe', 'transfer']
  }
}

const initialState: ICheckout = {
  step: {
    cart: false,
    confirmation: false
  },
  currentStep: null,
  stepNumber: [
    { name: 'cart', step: 1 },
    { name: 'confirmation', step: 2 }
  ],
  loginInformation: { email: null },
  shippingDetails: {
    name: null,
    surname: null,
    postcode: null,
    country: null,
    email: null,
    phone: null
  },
  shipping: {
    current: null,
    methods: ['Standard', 'Delivery in 4-6 working days', 'Free']
  },
  payment: {
    current: null,
    methods: ['stripe', 'transfer']
  }
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    registerStep: (state, action: { payload: string | null }) => {
      const step = action.payload

      return {
        ...state,
        currentStep: step,
        step: {
          cart: step === 'cart',
          confirmation: step === 'confirmation'
        }
      }
    }
  }
})

export const selectAllPaymnetMethods = (state: { checkout: ICheckout }) =>
  state.checkout.payment.methods

export const selectAllShippingMethods = (state: { checkout: ICheckout }) =>
  state.checkout.shipping.methods

export const selectAllSteps = (state: { checkout: ICheckout }) =>
  state.checkout.stepNumber

export const selectCurrentStep = (state: { checkout: ICheckout }) =>
  state.checkout.currentStep

export const selectIsStep = (state: { checkout: ICheckout }) =>
  state.checkout.step

export const { registerStep } = checkoutSlice.actions
export const checkoutActions = checkoutSlice.actions

export default checkoutSlice.reducer
