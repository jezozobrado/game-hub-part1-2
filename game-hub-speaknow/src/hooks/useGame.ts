import Game from "../entities/Game";
import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

const useGame = (gameSlug: string) =>
  useQuery<Game>({
    queryKey: ["game", gameSlug],
    queryFn: () => apiClient.get(gameSlug),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGame;
