import { useInfiniteQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/apiClient";

export interface GameQuery {
  page: number;
  pageSize: number;
}

const useGames = (pageSize: number) => {
  const apiClient = new APIClient<Game>("/games");
  return useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ["games", pageSize],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({ page: pageParam, pageSize }),
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (_firstPage, allPages) => allPages.length + 1,
  });
};

export default useGames;
