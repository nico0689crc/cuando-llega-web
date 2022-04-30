import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { callesActions } from "../../store/callesSlice";
import { useCallesQuery } from "../../queries/useCallesQuery";

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
        <h1>Error</h1>
        <Link to={"/"}>Inicio</Link>
      </>
    );
  }

  return (
    <>
      <h1>Calles</h1>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <>
          <Link to={"/"}>Inicio</Link>
          <ul>
            {data.map((calle, index) => (
              <li key={index}>
                <a href="/" onClick={onCalleSelectedHandler.bind(calle)}>
                  {`${calle.Codigo} - ${calle.Descripcion}`}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Calles;
