import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import { Box, Heading } from "@chakra-ui/react";
import GameDetailLinkTree from "./GameDetailLinkTree";
import GameDetailHeader from "./GameDetailHeader";
import GameDetailRatings from "./GameDetailRatings";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game } = useGame(slug!);

  if (!game) return null;

  return (
    <>
      <Box padding={3}>
        <GameDetailLinkTree game={game} />
        <GameDetailHeader game={game} />
        <Heading fontSize="70px">{game.name}</Heading>
        <ExpandableText children={game.description_raw} />
        <GameDetailRatings game={game} />
      </Box>
    </>
  );
};

export default GameDetails;
