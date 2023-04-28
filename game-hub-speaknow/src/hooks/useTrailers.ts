import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

interface GameTrailer {
  id: number;
  name: string;
  preview: string;
  data: any;
}

const useTrailers = (slug: string) => {
  const apiClient = new APIClient<GameTrailer>("/games");
  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: () => apiClient.getTrailers(slug),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useTrailers;
