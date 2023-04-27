import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameTitle from "./GameTitle";

const GameGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const { data: games, error, isLoading, fetchNextPage } = useGames();

  const hasNextPage = !!games?.pages.at(-1)?.next;
  if (error) throw error;

  const fetchedGamesCount =
    games?.pages.reduce((acc, page) => page.results.length + acc, 0) || 0;

  return (
    <>
      <GameTitle />
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
