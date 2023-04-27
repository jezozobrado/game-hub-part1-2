import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import OrderSelector from "../components/OrderSelector";
import PlatformSelector from "../components/PlatformSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        gridTemplateColumns={{ base: "1fr", lg: "180px 1fr" }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingLeft={4}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main" padding="10px">
          <HStack marginBottom={4}>
            <OrderSelector />
            <PlatformSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
