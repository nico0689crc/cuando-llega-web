import { createSlice } from "@reduxjs/toolkit";

export const UI_VARIABLES = {
  UI_MODE_DARK: "dark",
  UI_MODE_LIGHT: "light",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modeStyle: UI_VARIABLES.UI_MODE_DARK,
  },
  reducers: {
    changeModeUi(state, action) {
      state.modeStyle = state.modeStyle === UI_VARIABLES.UI_MODE_DARK ? UI_VARIABLES.UI_MODE_LIGHT : UI_VARIABLES.UI_MODE_DARK;
    },
  },
});

export const uisActions = uiSlice.actions;
