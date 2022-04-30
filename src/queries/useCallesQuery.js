import { useQuery } from "react-query";
import { QueryService } from "../lib/QueryService";
import API_ENDPOINTS from "../utils/endpoints";

const callesQueryServices = new QueryService(API_ENDPOINTS.CALLES);

const fetchCalles = async ({ queryKey }) => {
  const parameters = queryKey[1];
  const data = await callesQueryServices.fetchData({
    codigoLineaParada: parameters.CodigoLineaParada,
  });
  return data;
};

export const useCallesQuery = parameters => {
  return useQuery([API_ENDPOINTS.CALLES, parameters], fetchCalles, {
    enabled: !!parameters,
  });
};
