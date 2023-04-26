import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/apiClient";

const useGames = () => {
  const apiClient = new APIClient<Game>("/games");
  return useQuery<FetchResponse<Game>>({
    queryKey: ["games"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGames;
