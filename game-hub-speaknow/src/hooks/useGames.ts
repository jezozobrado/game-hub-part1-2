import { useInfiniteQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store";

interface GameQueryX {
  pageSize: number;
  searchText?: string;
}

const useGames = (query: GameQueryX) => {
  const apiClient = new APIClient<Game>("/games");
  const { gameQuery } = useGameQueryStore();

  return useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ["games", query, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          pageSize: query.pageSize,
          genres: gameQuery.selectedGenreId,
          parent_platforms: gameQuery.selectedPlatformId,
          ordering: gameQuery.selectedOrderSlug,
          search: query.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,

    getNextPageParam: (_firstPage, allPages) => allPages.length + 1,
  });
};

export default useGames;
