import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  HStack,
  Image,
} from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import GameHeader from "./GameHeader";
import PlatformList from "./PlatformList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <CardBody padding={0}>
          <AspectRatio ratio={16 / 9} objectFit="cover">
            <Image src={game.background_image} />
          </AspectRatio>
          <Box padding={4}>
            <HStack justifyContent="space-between" marginBottom={3}>
              <CriticScore gameScore={game.metacritic} />
              <PlatformList gamePlatforms={game.parent_platforms} />
            </HStack>
            <GameHeader
              gameName={game.name}
              gameSite={game.website}
              gameRatingTop={game.rating_top}
            />
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
