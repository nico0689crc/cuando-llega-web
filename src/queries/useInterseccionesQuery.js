import { useQuery } from "react-query";
import { QueryService } from "../lib/QueryService";
import API_ENDPOINTS from "../utils/endpoints";

const interseccionesQueryServices = new QueryService(API_ENDPOINTS.INTERSECCIONES);

const fetchIntersecciones = async ({ queryKey }) => {
  const { linea, calle } = queryKey[1];

  const data = await interseccionesQueryServices.fetchData({
    codigoLineaParada: linea.CodigoLineaParada,
    codigoCalle: calle.Codigo,
  });

  return data;
};

export const useInterseccionesQuery = (linea, calle) => {
  return useQuery([API_ENDPOINTS.INTERSECCIONES, { linea, calle }], fetchIntersecciones, {
    enabled: !!linea && !!calle,
  });
};
