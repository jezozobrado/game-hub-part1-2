import { Box, Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import React from "react";

const GameGrid = () => {
  const pageSize = 20;
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames(pageSize);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {games?.pages.map((page) => (
          <React.Fragment>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button
        onClick={() => fetchNextPage()}
        isDisabled={isFetchingNextPage}
        marginY={5}
      >
        {isFetchingNextPage ? "Loading..." : "Show more"}
      </Button>
    </Box>
  );
};

export default GameGrid;
