import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useArriboQuery } from "../../queries/useArribosQuery";

const Arribos = () => {
  const linea = useSelector(state => state.lineasStore.lineaSeleccionada);
  const parada = useSelector(state => state.paradasStore.paradaSeleccionada);
  const { data, error, isLoading } = useArriboQuery(linea, parada);

  if (error || !linea || !parada) {
    return (
      <>
        <h1>Error</h1>
        <Link to={"/"}>Inicio</Link>
      </>
    );
  }

  return (
    <>
      <h1>{`Arribos a ${parada.Descripcion}`} </h1>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <>
          <Link to={"/"}>Inicio</Link>
          <ul>
            {data.map((arribo, index) => (
              <li key={index}>{`${arribo.DescripcionLinea} - ${arribo.DescripcionBandera} - ${arribo.Arribo} - CHOFER: ${arribo.IdentificadorChofer}`}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Arribos;
