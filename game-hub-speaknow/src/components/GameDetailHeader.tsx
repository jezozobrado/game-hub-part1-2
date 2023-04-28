import { HStack, Badge, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformList from "./PlatformList";

interface Props {
  game: Game;
}

const GameDetailHeader = ({ game }: Props) => {
  const dateReleased = new Date(game?.released!).toDateString();
  const dateReleasedWithoutDay = dateReleased.substring(
    dateReleased.indexOf(" ") + 1
  );

  return (
    <HStack fontSize="16px" spacing={5}>
      <Badge borderRadius={5} bgColor="white" color="gray.800" fontSize="16px">
        {dateReleasedWithoutDay}
      </Badge>
      <PlatformList gamePlatforms={game.parent_platforms} />
      <Text>{`AVERAGE PLAYTIME: ${game.playtime} HOURS`}</Text>
    </HStack>
  );
};

export default GameDetailHeader;
