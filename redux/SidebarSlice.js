import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  boolean: false,
  totalQuantity: 1,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    handleModal: (state, action) => {
        state.boolean = action.payload
      },
      setTotalQuantity: (state, action) => {
        state.totalQuantity = action.payload;
      },

  },
})

// Action creators are generated for each case reducer function
export const { handleModal, setTotalQuantity} = sidebarSlice.actions
export const selectTotalQuantity = (state) => state.sidebar.totalQuantity;


export default sidebarSlice.reducer