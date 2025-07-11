import { configureStore } from "@reduxjs/toolkit";
import formularioReducer from "./slices/formularioSlice";

export const store = configureStore({
  reducer: {
    formulario: formularioReducer,
  },
});
