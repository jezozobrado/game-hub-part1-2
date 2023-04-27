import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";

const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "220px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingLeft={4}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main" padding={3}>
          <Outlet />
        </GridItem>
      </Grid>
      {/* <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box> */}
    </>
  );
};

export default Layout;
