import useGameQueryStore from "../store";
import usePlatforms from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GameTitle = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  //   const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const selectedPlatformName = platforms?.results.find(
    (platform) => platform.id === gameQuery.selectedPlatformId
  )?.name;

  const selectedGenreName = genres?.results.find(
    (genre) => genre.id === gameQuery.selectedGenreId
  )?.name;

  return (
    <Heading marginBottom={4}>
      {` ${gameQuery.selectedPlatformId ? selectedPlatformName : ""} ${
        gameQuery.selectedGenreId ? selectedGenreName : ""
      } Games`}
    </Heading>
  );
};

export default GameTitle;
