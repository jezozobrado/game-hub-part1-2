import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient from "../services/apiClient";

const useGames = () => {
  const apiClient = new APIClient<Game>("/games");
  return useQuery({
    queryKey: ["games"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGames;
