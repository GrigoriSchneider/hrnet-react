import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "./slices/employeeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, employeeReducer);

export const store = configureStore({
  reducer: {
    employeeList: persistedReducer,
    middleware: [thunk],
  },
});
