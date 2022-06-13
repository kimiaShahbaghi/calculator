import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from '../features/calculator/calculatorSlice'
export const store = configureStore({
  reducer: {
    calculatorReducer,
 
  },
});

