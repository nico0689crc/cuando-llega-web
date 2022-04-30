import { useQuery } from "react-query";
import { QueryService } from "../lib/QueryService";
import API_ENDPOINTS from "../utils/endpoints";

const lineasQueryServices = new QueryService(API_ENDPOINTS.LINEAS);

const fetchLineas = async () => {
  const data = await lineasQueryServices.fetchData();
  return data;
};

export const useLineasQuery = () => {
  return useQuery(API_ENDPOINTS.LINEAS, fetchLineas);
};
