/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  registered: number | null
}

const initialState: IInitialState = {
  registered: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    registerModal: (state, actions: { payload: number | null }) => {
      const id = actions.payload
      state.registered = id
    }
  }
})

export const modalActions = modalSlice.actions
export const { registerModal } = modalSlice.actions

export default modalSlice.reducer
