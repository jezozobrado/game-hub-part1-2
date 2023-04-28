import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import GameDetailLinkTree from "./GameDetailLinkTree";
import GameDetailHeader from "./GameDetailHeader";
import GameDetailRatings from "./GameDetailRatings";
import GameDetailTrailer from "./GameDetailTrailer";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game } = useGame(slug!);

  if (!game) return null;

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "3fr 2fr",
        }}
        paddingX={{ base: "10px", lg: "80px" }}
        gap={10}
        paddingY={10}
      >
        <GridItem>
          <Box>
            <GameDetailLinkTree game={game} />
            <GameDetailHeader game={game} />
            <Heading fontSize="70px">{game.name}</Heading>
            <ExpandableText children={game.description_raw} />
            <GameDetailRatings game={game} />
          </Box>
        </GridItem>
        <GridItem>
          <GameDetailTrailer slug={game.slug} />
        </GridItem>
      </Grid>
    </>
  );
};

export default GameDetails;
