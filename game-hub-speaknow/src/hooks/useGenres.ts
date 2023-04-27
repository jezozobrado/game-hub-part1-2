import APIClient, { FetchResponse } from "../services/apiClient";
import { Genre } from "../entities/Genre";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  return useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default useGenres;
