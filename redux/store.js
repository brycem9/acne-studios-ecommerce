import { configureStore, } from '@reduxjs/toolkit'
import SidebarSlice from "./SidebarSlice"
import sizeSelectorSlice from './SizeSelectorSlice';
import MobileMenuSlice from './MobileMenuSlice';






export const store = configureStore({
  reducer: {
    sidebar: SidebarSlice,
    sizeSelector: sizeSelectorSlice,
    mobileMenu: MobileMenuSlice,
  }
 
});