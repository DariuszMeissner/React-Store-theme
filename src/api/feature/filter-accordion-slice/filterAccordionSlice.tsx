/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  registered: number | null
}

const initialState: IInitialState = {
  registered: null
}

const filterAccordionSlice = createSlice({
  name: 'filterAccordionSlice',
  initialState,
  reducers: {
    register: (state, actions: { payload: number | null }) => {
      const id = actions.payload
      state.registered = id
    }
  }
})

export const filterAccordionSliceActions = filterAccordionSlice.actions

export default filterAccordionSlice.reducer
