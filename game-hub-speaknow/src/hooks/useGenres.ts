import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  return useInfiniteQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({ params: { page: pageParam, pageSize: 15 } }),
    staleTime: 24 * 60 * 60 * 1000,
    // keepPreviousData: true,
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, _allPages) => firstPage,
  });
};
export default useGenres;
