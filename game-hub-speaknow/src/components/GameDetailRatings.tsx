import { Badge, Flex, Stack, Text } from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";
import Game from "../entities/Game";
import GameRating from "./GameRating";

interface Props {
  game: Game;
}

const GameDetailRatings = ({ game }: Props) => {
  const ratingsTotalCount = game.ratings.reduce(
    (acc, rating) => acc + rating.count,
    0
  );

  const ratingNameMap: { [key: number]: [string, string] } = {
    5: ["Exceptional", "green"],
    4: ["Recommended", "blue"],
    3: ["Meh", "orange"],
    2: ["So-so", "yellow"],
    1: ["Skip", "red"],
  };

  return (
    <>
      <Stack>
        <Text fontSize="25px" fontWeight="bold" letterSpacing={2}>
          {ratingNameMap[game.rating_top][0]}

          <GameRating gameRatingTop={game.rating_top} isInDetailPage={true} />
        </Text>
        <Text color="gray.500" fontSize="14px" letterSpacing={2}>
          {ratingsTotalCount} RATINGS
        </Text>
        <Flex>
          {game.ratings.map((rating) => (
            <Badge
              borderRadius={10}
              paddingY={1}
              paddingX={2}
              display="flex"
              alignItems="center"
              gap={1}
              bgColor="transparent"
              _hover={{
                border: "2px solid gray",
                transition: "border 0.15s ease-in",
              }}
            >
              <GoPrimitiveDot color={ratingNameMap[rating.id][1]} />
              <Text textTransform="capitalize" fontSize="13px">
                {rating.title} {rating.count}
              </Text>
            </Badge>
          ))}
        </Flex>
      </Stack>
    </>
  );
};
export default GameDetailRatings;
