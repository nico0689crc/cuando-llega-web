import { createSlice } from "@reduxjs/toolkit";

export const interseccionesSlice = createSlice({
  name: "intersecciones",
  initialState: {
    interseccionSeleccionada: null,
  },
  reducers: {
    reemplazarInterseccionSeleccionada(state, action) {
      state.interseccionSeleccionada = { ...action.payload.interseccionSeleccionada };
    },
  },
});

export const interseccionesActions = interseccionesSlice.actions;
