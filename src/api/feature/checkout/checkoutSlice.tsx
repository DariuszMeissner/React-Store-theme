import { createSlice } from '@reduxjs/toolkit'

export interface IStep {
  step: 'cart' | 'confirmation'
}

export interface ICheckout {
  step: {
    cart: boolean
    confirmation: boolean
  }
  currentStep: string | undefined
  stepNumber: [{ name: 'cart'; step: 1 }, { name: 'confirmation'; step: 2 }]
  loginStatus: {
    current: 'guest' | 'logged'
    guest: boolean
    logged: boolean
  }
  loginInformation: {
    email: string | undefined
  }
  shippingAddress: IShippingAddress
  delivery: {
    current: IDeliveryCurrent | undefined
    methods: string[]
  }
  payment: {
    current: IPaymentCurrent | undefined
    methods: string[]
  }
  confirmationStepStatus: {
    mail: boolean
    shippingAddress: boolean
    deliveryMethod: boolean
    paymentMethod: boolean
  }
}

interface IDeliveryCurrent {
  current: 'Standard' | 'Delivery in 4-6 working days' | 'Free'
}

interface IPaymentCurrent {
  current: 'stripe' | 'transfer'
}

interface IShippingAddress {
  name: string | undefined
  surname: string | undefined
  postcode: string | undefined
  street: string | undefined
  country: string | undefined
  phone: string | undefined
}

const initialState: ICheckout = {
  step: {
    cart: false,
    confirmation: false
  },
  currentStep: undefined,
  stepNumber: [
    { name: 'cart', step: 1 },
    { name: 'confirmation', step: 2 }
  ],
  loginStatus: {
    current: 'guest',
    guest: true,
    logged: false
  },
  loginInformation: { email: undefined },
  shippingAddress: {
    name: undefined,
    surname: undefined,
    postcode: undefined,
    street: undefined,
    country: undefined,
    phone: undefined
  },
  delivery: {
    current: undefined,
    methods: ['Standard', 'Delivery in 4-6 working days', 'Express']
  },
  payment: {
    current: undefined,
    methods: ['Stripe', 'Standard transfer']
  },
  confirmationStepStatus: {
    mail: false,
    shippingAddress: false,
    deliveryMethod: false,
    paymentMethod: false
  }
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    registerStep: (state, action: { payload: string | undefined }) => {
      const step = action.payload

      return {
        ...state,
        currentStep: step,
        step: {
          cart: step === 'cart',
          confirmation: step === 'confirmation'
        }
      }
    },
    saveEmail: (state, action: { payload: string }) => {
      return {
        ...state,
        loginInformation: {
          email: action.payload
        }
      }
    },
    saveShippingAddres: (state, action: { payload: IShippingAddress }) => {
      const data = action.payload
      return {
        ...state,
        shippingAddress: {
          name: data.name,
          surname: data.surname,
          postcode: data.postcode,
          street: data.street,
          country: data.country,
          phone: data.name
        }
      }
    },
    saveDelivery: (state, action: { payload: IDeliveryCurrent }) => {
      return {
        ...state,
        delivery: {
          ...state.delivery,
          current: action.payload
        }
      }
    },
    savePayment: (state, action: { payload: IPaymentCurrent }) => {
      return {
        ...state,
        payment: {
          ...state.payment,
          current: action.payload
        }
      }
    },
    registerConfirmationStatus: (
      state,
      action: {
        payload: {
          type:
            | 'mail'
            | 'shippingAddress'
            | 'deliveryMethod'
            | 'paymentMethod'
            | string
          value: boolean
        }
      }
    ) => {
      const { type, value } = action.payload
      return {
        ...state,
        confirmationStepStatus: {
          ...state.confirmationStepStatus,
          [type]: value
        }
      }
    }
  }
})

export const selectConfirmationStatus = (state: { checkout: ICheckout }) =>
  state.checkout.confirmationStepStatus

export const selectAllPaymnetMethods = (state: { checkout: ICheckout }) =>
  state.checkout.payment.methods

export const selectAllShippingMethods = (state: { checkout: ICheckout }) =>
  state.checkout.delivery.methods

export const selectAllSteps = (state: { checkout: ICheckout }) =>
  state.checkout.stepNumber

export const selectCurrentStep = (state: { checkout: ICheckout }) =>
  state.checkout.currentStep

export const selectIsStep = (state: { checkout: ICheckout }) =>
  state.checkout.step

export const { registerStep, saveEmail, registerConfirmationStatus } =
  checkoutSlice.actions

export const checkoutActions = checkoutSlice.actions

export default checkoutSlice.reducer
