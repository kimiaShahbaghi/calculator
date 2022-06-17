import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  input: "",
  answer: "",
};
const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.input += action.payload;
    },

    calc: (state) => {
      try {
        state.answer = eval(state.input);
      } catch (e) {
        if (e instanceof SyntaxError) {
          alert(e.message);
        }
      }
      state.input = "";
    },

    singleOperator: (state, action) => {
      if (state.input.slice(-1) === action.payload) {
        return;
      } else {
        state.input += action.payload;
      }
    },
    acDelete: (state) => {
      state.input = state.input.slice(0, -1);
    },
  },
});

export const selectInput = (state) => state.calculatorReducer.input;
export const selectAnswer = (state) => state.calculatorReducer.answer;

export const { addInput, calc, singleOperator, acDelete } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
