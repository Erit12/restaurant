import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: "",
  email: "",
  mensaje: "",
};

export const formularioSlice = createSlice({
  name: "formulario",
  initialState,
  reducers: {
    actualizarCampo: (state, action) => {
      const { campo, valor } = action.payload;
      state[campo] = valor;
    },
    limpiarFormulario: () => initialState,
  },
});

export const { actualizarCampo, limpiarFormulario } = formularioSlice.actions;
export default formularioSlice.reducer;
