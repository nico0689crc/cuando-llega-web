import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { paradasActions } from "../../store/paradasSlice";
import { useParadasQuery } from "../../queries/useParadasQuery";

const Paradas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linea = useSelector(state => state.lineasStore.lineaSeleccionada);
  const calle = useSelector(state => state.callesStore.calleSeleccionada);
  const interseccion = useSelector(state => state.interseccionesStore.interseccionSeleccionada);
  const { data, error, isLoading } = useParadasQuery(linea, calle, interseccion);

  function onCalleSelectedHandler(event) {
    event.preventDefault();
    dispatch(paradasActions.reemplazarParadaSeleccionada({ paradaSeleccionada: this }));
    navigate(`/arribos`);
  }

  if (error || !calle || !linea || !interseccion) {
    return (
      <>
        <h1>Error</h1>
        <Link to={"/"}>Inicio</Link>
      </>
    );
  }

  return (
    <>
      <h1>Paradas</h1>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <>
          <Link to={"/"}>Inicio</Link>
          <ul>
            {data.map((parada, index) => (
              <li key={index}>
                <a href="/" onClick={onCalleSelectedHandler.bind(parada)}>
                  {`${parada.Identificador} - ${parada.Descripcion}`}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Paradas;
