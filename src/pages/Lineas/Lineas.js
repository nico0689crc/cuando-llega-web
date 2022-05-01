import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lineasActions } from "../../store/lineasSlice";
import { useLineasQuery } from "../../queries/useLineasQuery";
import Grid from "@mui/material/Grid";
import Title from "../../components/Title/Title";
import Item from "../../components/Item/Item";

const Lineas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error, isLoading } = useLineasQuery();

  function onLineaSelectedHandler(event) {
    event.preventDefault();
    dispatch(lineasActions.reemplazarLineaSeleccionada({ lineaSeleccionada: this }));
    navigate(`/calles`);
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <Title>Lineas de transporte</Title>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <Grid container direction="column" spacing={3} justifyContent="center">
          {data.map((linea, index) => (
            <Grid item key={index} sx={{ cursor: "pointer" }} onClick={onLineaSelectedHandler.bind(linea)}>
              <Item>{linea.Descripcion}</Item>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Lineas;
