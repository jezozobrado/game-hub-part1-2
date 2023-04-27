import { create } from "zustand";

interface GameQuery {
  pageSize: number;
  selectedGenreId?: number;
  selectedPlatformId: number | null;
  selectedOrderSlug?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        selectedGenreId: genreId,
      },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        selectedPlatformId: platformId,
      },
    })),
}));

export default useGameQueryStore;
