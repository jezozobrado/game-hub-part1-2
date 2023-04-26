import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" marginX={2}>
      <Image src={logo} boxSize="60px" />
      <InputGroup outline="none">
        <InputLeftElement
          color="white"
          pointerEvents="none"
          children={<BsSearch _hover={{ color: "black" }} />}
          // _hover={{ color: "black" }}
        />
        <Input
          type="text"
          placeholder="Search 849,391 games..."
          _hover={{ bg: "white", color: "black" }}
        />
      </InputGroup>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default NavBar;
