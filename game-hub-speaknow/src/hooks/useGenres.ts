import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import { Genre } from "../entities/Genre";

export interface GenreQuery {
  page?: number;
  pageSize: number;
}

const apiClient = new APIClient<Genre>("/genres");
const useGenres = (pageSize: number) => {
  return useInfiniteQuery<FetchResponse<Genre>>({
    queryKey: ["genres", pageSize],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({ params: { page: pageParam, pageSize } }),
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, _allPages) => firstPage,
  });
};
export default useGenres;
