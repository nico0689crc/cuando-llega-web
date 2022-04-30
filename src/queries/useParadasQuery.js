import { useQuery } from "react-query";
import { QueryService } from "../lib/QueryService";
import API_ENDPOINTS from "../utils/endpoints";

const paradasQueryServices = new QueryService(API_ENDPOINTS.PARADAS);

const fetchParadas = async ({ queryKey }) => {
  const { linea, calle, interseccion } = queryKey[1];

  const data = await paradasQueryServices.fetchData({
    codigoLinea: linea.CodigoLineaParada,
    codigoCalle: calle.Codigo,
    codigoInterseccion: interseccion.Codigo,
  });

  return data;
};

export const useParadasQuery = (linea, calle, interseccion) => {
  return useQuery([API_ENDPOINTS.PARADAS, { linea, calle, interseccion }], fetchParadas, {
    enabled: !!linea && !!calle && !!interseccion,
  });
};
