import { createSlice } from '@reduxjs/toolkit'
import { IData } from '../../../hooks/useForm'
import { ICheckout, IOrder, IShippingAddress } from './checkoutSlice.interface'

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
  orderDetails: {
    number: undefined,
    email: undefined,
    subtotal: undefined,
    products: [],
    shippingAddress: undefined,
    delivery: undefined,
    payment: undefined
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
    saveShippingAddress: (
      state,
      action: { payload: IShippingAddress | IData }
    ) => {
      const data = action.payload
      return {
        ...state,
        shippingAddress: {
          name: data.name,
          surname: data.surname,
          postcode: data.postcode,
          street: data.street,
          country: data.country,
          phone: data.phone
        }
      }
    },
    saveDelivery: (state, action: { payload: string }) => {
      return {
        ...state,
        delivery: {
          ...state.delivery,
          current: action.payload
        }
      }
    },
    savePayment: (state, action: { payload: string }) => {
      return {
        ...state,
        payment: {
          ...state.payment,
          current: action.payload
        }
      }
    },
    saveOrder: (state, action: { payload: IOrder }) => {
      const data = action.payload
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          number: data.number,
          subtotal: data.subtotal,
          email: data.email,
          products: data.products,
          shippingAddress: data.shippingAddress,
          delivery: data.delivery,
          payment: data.payment
        }
      }
    }
  }
})

export const checkoutTotalPrice = (state: { checkout: ICheckout }) =>
  state.checkout.orderDetails.products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

export const selectPaymentDeliveryShipping = (state: {
  checkout: ICheckout
}) => ({
  shippingAddress: state.checkout.shippingAddress,
  delivery: state.checkout.delivery.current,
  payment: state.checkout.payment.current,
  email: state.checkout.loginInformation.email
})

export const selectOrderDetails = (state: { checkout: ICheckout }) =>
  state.checkout.orderDetails

export const selectShippingAddress = (state: { checkout: ICheckout }) =>
  state.checkout.shippingAddress

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

export const {
  registerStep,
  saveEmail,
  saveShippingAddress,
  saveDelivery,
  savePayment,
  saveOrder
} = checkoutSlice.actions

export const checkoutActions = checkoutSlice.actions

export default checkoutSlice.reducer
