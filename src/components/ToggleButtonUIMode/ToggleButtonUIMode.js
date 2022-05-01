import Fab from "@mui/material/Fab";
import { useSelector, useDispatch } from "react-redux";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { uisActions, UI_VARIABLES } from "../../store/uiSlice";

const ToggleButtonUIMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.uiStore.modeStyle);

  const toggleUIModeHandler = () => {
    dispatch(uisActions.changeModeUi());
  };

  return (
    <Fab color="primary" aria-label="add" onClick={toggleUIModeHandler} sx={{ position: "fixed", bottom: "30px", right: "30px" }}>
      {mode === UI_VARIABLES.UI_MODE_DARK ? <LightModeIcon /> : <ModeNightIcon />}
    </Fab>
  );
};

export default ToggleButtonUIMode;
