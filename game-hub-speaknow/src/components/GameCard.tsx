import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import useGame from "../hooks/useGame";
import PlatformList from "./PlatformList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { data } = useGame(game.slug);

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
            <Link href={data?.website}>
              <Heading fontSize="2xl">{game.name}</Heading>
            </Link>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
