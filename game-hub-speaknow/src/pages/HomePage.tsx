import { HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import OrderSelector from "../components/OrderSelector";
import PlatformSelector from "../components/PlatformSelector";

const HomePage = () => {
  return (
    <>
      <HStack marginBottom={4}>
        <OrderSelector />
        <PlatformSelector />
      </HStack>
      <GameGrid />
    </>
  );
};

export default HomePage;
