import { HStack, Image, Switch, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
  onSubmit: (searchText?: string) => void;
}
const NavBar = ({ onSubmit }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack marginX={2}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSubmit={(searchText) => onSubmit(searchText)} />
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default NavBar;
