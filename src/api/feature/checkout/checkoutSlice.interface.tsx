import { ICart, ICartProduct } from '../cart-slice/cartSlice'

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
    current: string | undefined
    methods: string[]
  }
  payment: {
    current: string | undefined
    methods: string[]
  }
  orderDetails: IOrder
}

export interface IOrder {
  number: string | undefined
  email: string | undefined
  subtotal: number | undefined
  products: ICartProduct[]
  shippingAddress: IShippingAddress | undefined
  delivery: string | undefined
  payment: string | undefined
}

export interface IStep {
  step: 'cart' | 'confirmation'
}

export interface IShippingAddress {
  name: string | undefined
  surname: string | undefined
  postcode: string | undefined
  street: string | undefined
  country: string | undefined
  phone: string | undefined
}
