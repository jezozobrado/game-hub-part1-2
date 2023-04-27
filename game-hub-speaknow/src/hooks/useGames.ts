import { useInfiniteQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store";
import { useEffect } from "react";

interface GameQueryX {
  pageSize: number;
  selectedPlatformId: number | null;
  selectedOrderSlug?: string;
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
          parent_platforms: query.selectedPlatformId,
          ordering: query.selectedOrderSlug,
          search: query.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (_firstPage, allPages) => allPages.length + 1,
  });
};

export default useGames;
