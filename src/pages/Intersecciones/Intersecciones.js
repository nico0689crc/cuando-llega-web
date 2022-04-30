import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { interseccionesActions } from "../../store/interseccionesSlice";
import { useInterseccionesQuery } from "../../queries/useInterseccionesQuery";

const Intersecciones = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linea = useSelector(state => state.lineasStore.lineaSeleccionada);
  const calle = useSelector(state => state.callesStore.calleSeleccionada);
  const { data, error, isLoading } = useInterseccionesQuery(linea, calle);

  function onCalleSelectedHandler(event) {
    event.preventDefault();
    dispatch(interseccionesActions.reemplazarInterseccionSeleccionada({ interseccionSeleccionada: this }));
    navigate(`/paradas`);
  }

  if (error || !calle || !linea) {
    return (
      <>
        <h1>Error</h1>
        <Link to={"/"}>Inicio</Link>
      </>
    );
  }

  return (
    <>
      <h1>Intersecciones</h1>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <>
          <Link to={"/"}>Inicio</Link>
          <ul>
            {data.map((interseccion, index) => (
              <li key={index}>
                <a href="/" onClick={onCalleSelectedHandler.bind(interseccion)}>
                  {`${interseccion.Codigo} - ${interseccion.Descripcion}`}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Intersecciones;
