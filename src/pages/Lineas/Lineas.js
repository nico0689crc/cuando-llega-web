import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lineasActions } from "../../store/lineasSlice";
import { useLineasQuery } from "../../queries/useLineasQuery";

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
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <ul>
          {data.map((linea, index) => (
            <li key={index}>
              <a href="/" onClick={onLineaSelectedHandler.bind(linea)}>
                {linea.Descripcion}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Lineas;
