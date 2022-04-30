import { createSlice } from "@reduxjs/toolkit";

export const paradasSlice = createSlice({
  name: "paradas",
  initialState: {
    paradaSeleccionada: null,
  },
  reducers: {
    reemplazarParadaSeleccionada(state, action) {
      state.paradaSeleccionada = { ...action.payload.paradaSeleccionada };
    },
  },
});

export const paradasActions = paradasSlice.actions;
