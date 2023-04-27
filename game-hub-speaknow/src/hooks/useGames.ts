import { useInfiniteQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/apiClient";

export interface GameQuery {
  pageSize: number;
  selectedGenreId: number | null;
  selectedPlatformId: number | null;
  selectedOrderSlug?: string;
}

const useGames = (query: GameQuery) => {
  const apiClient = new APIClient<Game>("/games");
  return useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ["games", query],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          pageSize: query.pageSize,
          genres: query.selectedGenreId,
          parent_platforms: query.selectedPlatformId,
          ordering: query.selectedOrderSlug,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (_firstPage, allPages) => allPages.length + 1,
  });
};

export default useGames;
