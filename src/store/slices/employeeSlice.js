import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "employeeList",
  initialState: {
    employees: [],
  },

  reducers: {
    createEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
};

export const employeeSlice = createSlice(options);

export const { createEmployee } = employeeSlice.actions;
const employeeReducer = employeeSlice.reducer;

export { employeeReducer };
