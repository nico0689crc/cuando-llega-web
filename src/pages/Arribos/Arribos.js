import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useArriboQuery } from "../../queries/useArribosQuery";
import { UI_VARIABLES } from "../../store/uiSlice";
import Title from "../../components/Title/Title";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";

const Arribos = () => {
  const linea = useSelector(state => state.lineasStore.lineaSeleccionada);
  const calle = useSelector(state => state.callesStore.calleSeleccionada);
  const interseccion = useSelector(state => state.interseccionesStore.interseccionSeleccionada);
  const parada = useSelector(state => state.paradasStore.paradaSeleccionada);
  const modeStyle = useSelector(state => state.uiStore.modeStyle);
  const { data, error, isLoading } = useArriboQuery(linea, parada);

  if (error || !linea || !parada) {
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
      <Title>{`ARRIBOS - Linea ${linea.Descripcion} - Calle ${calle.Descripcion.split("-")[0].trim()} y ${interseccion.Descripcion.split("-")[0].trim()}`}</Title>
      <Stack direction="row" spacing={2} sx={{ marginBottom: "2em" }}>
        <Button component={Link} to="/" variant="contained" color="primary" startIcon={<HomeIcon />}>
          Inicio
        </Button>
        <Button component={Link} to="/paradas" variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
          Paradas
        </Button>
      </Stack>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <Grid container direction="column" spacing={2} justifyContent="center" sx={{ marginBottom: "2em" }}>
          {data.map((arribo, index) => (
            <Grid item key={index}>
              <Card sx={{ backgroundColor: UI_VARIABLES.UI_MODE_DARK === modeStyle ? "#1A2027" : "#7da7eb" }}>
                <CardContent>
                  <Typography variant="h5" color="text.secondary">
                    {`${arribo.DescripcionLinea} - ${arribo.DescripcionBandera}`}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {`${arribo.Arribo}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`CHOFER: ${arribo.IdentificadorChofer}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Arribos;
