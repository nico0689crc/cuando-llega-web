import { useQuery } from "react-query";
import { QueryService } from "../lib/QueryService";
import API_ENDPOINTS from "../utils/endpoints";

const arribosQueryServices = new QueryService(API_ENDPOINTS.ARRIBOS);

const fetchArribos = async ({ queryKey }) => {
  const { linea, parada } = queryKey[1];

  const data = await arribosQueryServices.fetchData({
    codigoLineaParada: linea.CodigoLineaParada,
    identificadorParada: parada.Identificador,
    codigoAplicacion: parada.Codigo,
  });

  return data;
};

export const useArriboQuery = (linea, parada) => {
  return useQuery([API_ENDPOINTS.PARADAS, { linea, parada }], fetchArribos, {
    enabled: !!linea && !!parada,
  });
};
