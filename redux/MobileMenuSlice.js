import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  boolean: false,
 
}

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    handleMobileMenu: (state, action) => {
        state.boolean = action.payload
      },
    
  },
})

// Action creators are generated for each case reducer function
export const { handleMobileMenu } = mobileMenuSlice.actions


export default mobileMenuSlice.reducer