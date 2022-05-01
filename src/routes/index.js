import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButtonUIMode from "../components/ToggleButtonUIMode/ToggleButtonUIMode";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes, Navigate } from "react-router-dom";
import { pages } from "./pages";
import Container from "@mui/material/Container";
import { UI_VARIABLES } from "../store/uiSlice";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#cbdcf6",
    },
  },
});

const RoutesContainer = () => {
  const mode = useSelector(state => state.uiStore.modeStyle);

  const routes = (
    <ThemeProvider theme={mode === UI_VARIABLES.UI_MODE_DARK ? darkTheme : lightTheme}>
      <CssBaseline />
      <ToggleButtonUIMode />
      <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Routes>
          <Route path="/" element={pages.lineas} />
          <Route path="/calles" element={pages.calles} />
          <Route path="/intersecciones" element={pages.intersecciones} />
          <Route path="/paradas" element={pages.paradas} />
          <Route path="/arribos" element={pages.arribos} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );

  return routes;
};

export default RoutesContainer;
