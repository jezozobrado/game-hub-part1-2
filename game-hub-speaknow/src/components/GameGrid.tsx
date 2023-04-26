import { Box, Button, HStack, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { useState } from "react";

const GameGrid = () => {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const { data: games, error, isLoading } = useGames({ page, pageSize });

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {games?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
      <HStack marginY={5}>
        <Button onClick={() => setPage(page - 1)} isDisabled={page === 1}>
          Previous
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </HStack>
    </Box>
  );
};

export default GameGrid;
