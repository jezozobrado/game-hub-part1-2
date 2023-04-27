import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import OrderSelector from "./components/OrderSelector";

const App = () => {
  const [selectedGenreId, setSelectedGenre] = useState<number | null>(null);
  const [selectedPlatformId, setSelectedPlatform] = useState<number | null>(
    null
  );
  const [selectedOrder, setSelectedOrder] = useState<string | undefined>();

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

        <GridItem area="main" padding="10px">
          <HStack marginBottom={4}>
            <OrderSelector
              selectedOrder={selectedOrder}
              onSelectOrder={(orderSlug) => setSelectedOrder(orderSlug)}
            />
            <PlatformSelector
              selectedPlatform={selectedPlatformId}
              onSelectPlatform={(selectedPlatform) =>
                setSelectedPlatform(selectedPlatform)
              }
            />
          </HStack>
          <GameGrid
            selectedGenreId={selectedGenreId}
            selectedPlatformId={selectedPlatformId}
            selectedOrderSlug={selectedOrder}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
