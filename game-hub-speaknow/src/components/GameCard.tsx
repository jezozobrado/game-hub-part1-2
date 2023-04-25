import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <CardBody padding={0}>
          <Image src={game.background_image} />
          <Box padding={4}>
            <Heading fontSize="2xl">{game.name}</Heading>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
