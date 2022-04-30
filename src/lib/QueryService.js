import axiosInstance from "./axios.js";

export class QueryService {
  constructor(endpoint) {
    this.http = axiosInstance;
    this.endpoint = endpoint;
  }

  fetchData = async (parameters = {}) => {
    return this.http.post(this.endpoint, parameters).then(res => res.data);
  };
}
