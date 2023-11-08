import { createSlice } from '@reduxjs/toolkit';

const cartRemovalSlice = createSlice({
  name: 'cartRemoval',
  initialState: [],
  reducers: {
    removeFromCart: (state, action) => {
      // Remove the product from the cart state
      const productId = action.payload;
      // You can add more logic here if needed.
      return state.filter(id => id !== productId);
    },
  },
});

export const { removeFromCart } = cartRemovalSlice.actions;
export default cartRemovalSlice.reducer;