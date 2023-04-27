import useGameQueryStore from "../store";
import usePlatforms from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

const GameTitle = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  //   const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedPlatformName = platforms?.results.find(
    (platform) => platform.id === gameQuery.selectedPlatformId
  )?.name;

  return (
    <Heading marginBottom={4}>
      {gameQuery.selectedPlatformId ? `${selectedPlatformName} Games` : "Games"}
    </Heading>
  );
};

export default GameTitle;
