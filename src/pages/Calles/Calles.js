import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { callesActions } from "../../store/callesSlice";
import { useCallesQuery } from "../../queries/useCallesQuery";
import Title from "../../components/Title/Title";
import Grid from "@mui/material/Grid";
import Item from "../../components/Item/Item";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";

const Calles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linea = useSelector(state => state.lineasStore.lineaSeleccionada);
  const { data, error, isLoading } = useCallesQuery(linea);

  function onCalleSelectedHandler(event) {
    event.preventDefault();
    dispatch(callesActions.reemplazarCalleSeleccionada({ calleSeleccionada: this }));
    navigate(`/intersecciones`);
  }

  if (error || !linea) {
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
      <Title>{`Calles de Linea ${linea.Descripcion}`}</Title>
      <Stack direction="row" spacing={2} sx={{ marginBottom: "2em" }}>
        <Button component={Link} to="/" variant="contained" color="primary" startIcon={<HomeIcon />}>
          Inicio
        </Button>
        <Button component={Link} to="/lineas" variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
          Lineas
        </Button>
      </Stack>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <Grid container direction="column" spacing={2} justifyContent="center" sx={{ marginBottom: "2em" }}>
          {data.map((calle, index) => (
            <Grid item key={index} sx={{ cursor: "pointer" }} onClick={onCalleSelectedHandler.bind(calle)}>
              <Item>{`${calle.Codigo} - ${calle.Descripcion}`}</Item>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Calles;
