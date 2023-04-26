import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/apiClient";

export interface GameQuery {
  page: number;
  pageSize: number;
}

const useGames = (query: GameQuery) => {
  const apiClient = new APIClient<Game>("/games");
  return useQuery<FetchResponse<Game>>({
    queryKey: ["games", query],
    queryFn: () => apiClient.getAll(query),
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default useGames;
