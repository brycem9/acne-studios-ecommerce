import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  boolean: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    open: (state) => {
      
      state.boolean = true
    },
    close: (state) => {
      state.boolean = false
    },
    handleModal: (state, action) => {
        state.boolean = action.payload
      },

  },
})

// Action creators are generated for each case reducer function
export const { open, close, handleModal} = sidebarSlice.actions

export default sidebarSlice.reducer