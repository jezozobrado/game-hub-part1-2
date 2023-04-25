import { Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <>
      <ul>
        {games?.results.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
