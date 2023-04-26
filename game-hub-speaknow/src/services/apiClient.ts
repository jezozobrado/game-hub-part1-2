import axios from "axios";
import { GameQuery } from "../hooks/useGames";
import { GenreQuery } from "../hooks/useGenres";

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

  getAll = (query: GameQuery | GenreQuery) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, {
        params: {
          page: query.page,
          page_size: query.pageSize,
        },
      })
      .then((res) => res.data);

  get = (id: number | string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}

export default APIClient;
