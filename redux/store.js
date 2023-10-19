import { configureStore, } from '@reduxjs/toolkit'
import SidebarSlice from "./SidebarSlice"
import sizeSelectorSlice from './SizeSelectorSlice';





export const store = configureStore({
  reducer: {
    sidebar: SidebarSlice,
    sizeSelector: sizeSelectorSlice,
  }
 
});