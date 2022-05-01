import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { paradasActions } from "../../store/paradasSlice";
import { useParadasQuery } from "../../queries/useParadasQuery";
import Title from "../../components/Title/Title";
import Grid from "@mui/material/Grid";
import Item from "../../components/Item/Item";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";

const Paradas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linea = useSelector(state => state.lineasStore.lineaSeleccionada);
  const calle = useSelector(state => state.callesStore.calleSeleccionada);
  const interseccion = useSelector(state => state.interseccionesStore.interseccionSeleccionada);
  const { data, error, isLoading } = useParadasQuery(linea, calle, interseccion);

  function onParadaSelectedHandler(event) {
    event.preventDefault();
    dispatch(paradasActions.reemplazarParadaSeleccionada({ paradaSeleccionada: this }));
    navigate(`/arribos`);
  }

  if (error || !calle || !linea || !interseccion) {
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
      <Title>{`Paradas - Linea ${linea.Descripcion} - Calle ${calle.Descripcion.split("-")[0].trim()} y ${interseccion.Descripcion.split("-")[0].trim()}`}</Title>
      <Stack direction="row" spacing={2} sx={{ marginBottom: "2em" }}>
        <Button component={Link} to="/" variant="contained" color="primary" startIcon={<HomeIcon />}>
          Inicio
        </Button>
        <Button component={Link} to="/intersecciones" variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
          Intersecciones
        </Button>
      </Stack>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <Grid container direction="column" spacing={2} justifyContent="center" sx={{ marginBottom: "2em" }}>
          {data.map((parada, index) => (
            <Grid item key={index} sx={{ cursor: "pointer" }} onClick={onParadaSelectedHandler.bind(parada)}>
              <Item>{`${parada.Identificador} - ${parada.Descripcion}`}</Item>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Paradas;
