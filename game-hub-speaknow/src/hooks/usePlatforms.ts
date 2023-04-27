import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
  });

export default usePlatforms;