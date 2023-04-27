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
}));

export default useGameQueryStore;
