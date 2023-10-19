import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boolean: false,
}

export const sizeSelectorSlice = createSlice({
  name: 'sizeSelector',
  initialState,
  reducers: {
    clicked: (state) => {
      
      state.boolean = true
    },
    unclicked: (state) => {
      state.boolean = false
    },
    handleSelect: (state, action) => {
        state.boolean = action.payload
      },

  },
})

// Action creators are generated for each case reducer function
export const { clicked, unclicked, handleSelect} = sizeSelectorSlice.actions

export default sizeSelectorSlice.reducer