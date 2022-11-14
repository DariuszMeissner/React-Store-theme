/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface IIsOpen {
  isOpen: boolean
}

interface IInitialState {
  cartModal: IIsOpen
  menuModal: IIsOpen
}

const initialState: IInitialState = {
  cartModal: { isOpen: false },
  menuModal: { isOpen: false }
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCartModal: (state) => {
      const cartState = state.cartModal.isOpen
      state.cartModal.isOpen = !cartState
      state.menuModal.isOpen = false
    },
    closeCartModal: (state) => {
      state.cartModal.isOpen = false
    },
    openMenuModal: (state) => {
      const menuState = state.menuModal.isOpen
      state.menuModal.isOpen = !menuState
      state.cartModal.isOpen = false
    },
    closeMenuModal: (state) => {
      state.menuModal.isOpen = false
    }
  }
})

export const modalActions = modalSlice.actions

export default modalSlice.reducer
