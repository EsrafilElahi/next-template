import { createSlice } from '@reduxjs/toolkit'


const internalInitialState = {
  value: 0,
  name: "esrafil"
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState: internalInitialState,
  reducers: {
    reset: () => internalInitialState,
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    setName: (state, action) => {
      state.name = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { reset, increment, decrement, incrementByAmount, setName } = counterSlice.actions

export default counterSlice