import Game from "../entities/Game";
import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

const useGame = (gameSlug: string) =>
  useQuery<Game>({
    queryKey: ["game", gameSlug],
    queryFn: () => apiClient.get(gameSlug),
  });

export default useGame;
