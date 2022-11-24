/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  registered: number | null
  scrollY: number | null
}

const initialState: IInitialState = {
  registered: null,
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
    }
  }
})

export const modalActions = modalSlice.actions
export const { registerModal } = modalSlice.actions

export default modalSlice.reducer
