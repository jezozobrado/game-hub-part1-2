import { Heading } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import GameRating from "./GameRating";

interface Props {
  gameName: string;
  gameRatingTop: number;
  gameSlug: string;
}

const GameHeader = ({ gameName, gameSlug, gameRatingTop }: Props) => {
  return (
    <>
      <Link to={"/games/" + gameSlug}>
        <Heading fontSize="2xl" display="inline">
          {gameName}
        </Heading>
      </Link>
      <GameRating gameRatingTop={gameRatingTop} />
    </>
  );
};

export default GameHeader;
