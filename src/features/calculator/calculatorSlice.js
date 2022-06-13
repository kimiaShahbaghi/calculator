import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  input: [0]
};
const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
   
  },
});


export const selectInput = (state) => state.calculatorReducer.input;

// export const { } = calculatorSlice.actions;

export default calculatorSlice.reducer;