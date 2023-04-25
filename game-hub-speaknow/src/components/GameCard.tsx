import { Box, Card, CardBody, Heading, Image, Link } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import useGame from "../hooks/useGame";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { data } = useGame(game.slug);
  console.log(data);

  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <CardBody padding={0}>
          <Image src={game.background_image} />
          <Box padding={4}>
            <Link href={data?.website}>
              <Heading fontSize="2xl">{game.name}</Heading>
            </Link>
            <CriticScore gameScore={game.metacritic} />
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
