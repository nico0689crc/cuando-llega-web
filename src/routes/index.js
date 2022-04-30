import { Route, Routes, Navigate } from "react-router-dom";
import { pages } from "./pages";

const RoutesContainer = () => {
  const routes = (
    <Routes>
      <Route path="/" element={pages.lineas} />
      <Route path="/calles" element={pages.calles} />
      <Route path="/intersecciones" element={pages.intersecciones} />
      <Route path="/paradas" element={pages.paradas} />
      <Route path="/arribos" element={pages.arribos} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );

  return routes;
};

export default RoutesContainer;
