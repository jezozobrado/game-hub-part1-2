import { Link, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import { Badge, Box, HStack, Heading, Text } from "@chakra-ui/react";
import PlatformList from "./PlatformList";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game } = useGame(slug!);

  const dateReleased = new Date(game?.released!).toDateString();
  const dateReleasedWithoutDay = dateReleased.substring(
    dateReleased.indexOf(" ") + 1
  );

  if (!game) return null;

  return (
    <>
      <Box>
        <HStack marginY={6} color="gray.500" fontSize="sm">
          <Link to="/">
            <Text
              _hover={{ color: "white", transition: "color 0.15s ease-in" }}
            >
              HOME
            </Text>
          </Link>
          <Text>/</Text>
          <Text>{game.name!.toUpperCase()}</Text>
        </HStack>
        <HStack fontSize="16px" spacing={5}>
          <Badge
            borderRadius={5}
            bgColor="white"
            color="gray.800"
            fontSize="16px"
          >
            {dateReleasedWithoutDay}
          </Badge>
          <PlatformList gamePlatforms={game.parent_platforms} />
          <Text>{`AVERAGE PLAYTIME: ${game.playtime} HOURS`}</Text>
        </HStack>
        <Heading fontSize="70px">{game.name}</Heading>
        <ExpandableText children={game.description_raw} />
      </Box>
    </>
  );
};

export default GameDetails;
