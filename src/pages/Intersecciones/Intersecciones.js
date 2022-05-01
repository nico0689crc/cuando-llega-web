import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { interseccionesActions } from "../../store/interseccionesSlice";
import { useInterseccionesQuery } from "../../queries/useInterseccionesQuery";
import Title from "../../components/Title/Title";
import Grid from "@mui/material/Grid";
import Item from "../../components/Item/Item";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";

const Intersecciones = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linea = useSelector(state => state.lineasStore.lineaSeleccionada);
  const calle = useSelector(state => state.callesStore.calleSeleccionada);
  const { data, error, isLoading } = useInterseccionesQuery(linea, calle);

  function onInterseccionSelectedHandler(event) {
    event.preventDefault();
    dispatch(interseccionesActions.reemplazarInterseccionSeleccionada({ interseccionSeleccionada: this }));
    navigate(`/paradas`);
  }

  if (error || !calle || !linea) {
    return (
      <>
        <Title>Volver a Inicio</Title>
        <Button component={Link} to="/" variant="contained" color="primary" startIcon={<HomeIcon />}>
          Inicio
        </Button>
      </>
    );
  }

  return (
    <>
      <Title>{`Intersecciones - Linea ${linea.Descripcion} y Calle ${calle.Descripcion.split("-")[0].trim()}`}</Title>
      <Stack direction="row" spacing={2} sx={{ marginBottom: "2em" }}>
        <Button component={Link} to="/" variant="contained" color="primary" startIcon={<HomeIcon />}>
          Inicio
        </Button>
        <Button component={Link} to="/calles" variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
          Calles
        </Button>
      </Stack>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <Grid container direction="column" spacing={2} justifyContent="center" sx={{ marginBottom: "2em" }}>
          {data.map((interseccion, index) => (
            <Grid item key={index} sx={{ cursor: "pointer" }} onClick={onInterseccionSelectedHandler.bind(interseccion)}>
              <Item>{`${interseccion.Codigo} - ${interseccion.Descripcion}`}</Item>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Intersecciones;
