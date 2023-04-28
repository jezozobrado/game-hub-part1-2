import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameDetailLinkTree = ({ game }: Props) => {
  return (
    <HStack marginY={6} color="gray.500" fontSize="sm">
      <Link to="/">
        <Text _hover={{ color: "white", transition: "color 0.15s ease-in" }}>
          HOME
        </Text>
      </Link>
      <Text>/</Text>
      <Text>{game.name!.toUpperCase()}</Text>
    </HStack>
  );
};

export default GameDetailLinkTree;
