import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fbb1564030c040e0b72d1b3884a54b2d",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () =>
    axiosInstance.get<FetchResponse<T>>(this.endpoint).then((res) => res.data);

  get = (id: number | string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}

export default APIClient;
