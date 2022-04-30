import { configureStore } from "@reduxjs/toolkit";
import { lineasSlice } from "./lineasSlice";
import { callesSlice } from "./callesSlice";
import { interseccionesSlice } from "./interseccionesSlice";
import { paradasSlice } from "./paradasSlice";

export const store = configureStore({
  reducer: {
    lineasStore: lineasSlice.reducer,
    callesStore: callesSlice.reducer,
    interseccionesStore: interseccionesSlice.reducer,
    paradasStore: paradasSlice.reducer,
  },
});
