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
  setOrder: (orderSlug: string) => void;
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
  setOrder: (orderSlug) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        selectedOrderSlug: orderSlug,
      },
    })),
}));

export default useGameQueryStore;
