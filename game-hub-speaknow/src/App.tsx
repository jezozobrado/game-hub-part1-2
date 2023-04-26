import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

const App = () => {
  const [selectedGenreId, setSelectedGenre] = useState<number | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{ base: "1fr", lg: "180px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingLeft={4}>
            <GenreList
              onSelectGenre={(selectedGenre) => setSelectedGenre(selectedGenre)}
              selectedGenreId={selectedGenreId}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid selectedGenreId={selectedGenreId} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
