import { createSlice } from "@reduxjs/toolkit";

export const callesSlice = createSlice({
  name: "calles",
  initialState: {
    calleSeleccionada: null,
  },
  reducers: {
    reemplazarCalleSeleccionada(state, action) {
      state.calleSeleccionada = { ...action.payload.calleSeleccionada };
    },
  },
});

export const callesActions = callesSlice.actions;
