import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const pageSize = 20;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames({
    pageSize,
  });

  if (error) throw error;

  const fetchedGamesCount =
    games?.pages.reduce((acc, page) => page.results.length + acc, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading
            ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
            : games?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.results.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </React.Fragment>
              ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
