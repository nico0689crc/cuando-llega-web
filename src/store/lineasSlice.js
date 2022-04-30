import { createSlice } from "@reduxjs/toolkit";

export const lineasSlice = createSlice({
  name: "lineas",
  initialState: {
    lineaSeleccionada: null,
  },
  reducers: {
    reemplazarLineaSeleccionada(state, action) {
      state.lineaSeleccionada = { ...action.payload.lineaSeleccionada };
    },
  },
});

export const lineasActions = lineasSlice.actions;
