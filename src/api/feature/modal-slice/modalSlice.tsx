/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  registered: number | null
  scrollY: number | null
  mobileMenu: { registered: number | null; level: number | null }
}

const initialState: IInitialState = {
  registered: null,
  mobileMenu: {
    registered: null,
    level: null
  },
  scrollY: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    registerModal: (state, actions: { payload: number | null }) => {
      const id = actions.payload
      state.registered = id
      state.scrollY = window.scrollY

      if (id === null) {
        state.mobileMenu.registered = null
        state.mobileMenu.level = null
      }
    },
    registerMenu: (
      state,
      actions: { payload: { register: number | null; level: number | null } }
    ) => {
      const menuId = actions.payload.register
      const levelId = actions.payload.level

      state.mobileMenu.registered = menuId
      state.mobileMenu.level = levelId
    }
  }
})

export const modalActions = modalSlice.actions
export const { registerModal, registerMenu } = modalSlice.actions

export default modalSlice.reducer
