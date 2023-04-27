import { InputGroup, InputLeftElement, Input, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const [searchTextPre, setSearchTextPre] = useState<string>("");
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchTextPost = useGameQueryStore((s) => s.setSearchText);
  return (
    <Box width="100%">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return setSearchTextPost(searchTextPre);
        }}
      >
        <InputGroup outline="none">
          <InputLeftElement
            color="white"
            pointerEvents="none"
            children={<BsSearch _hover={{ color: "black" }} />}
          />
          <Input
            type="text"
            variant="filled"
            placeholder="Search 849,391 games..."
            _hover={{ bg: "white", color: "black" }}
            ref={searchRef}
            onChange={(e) => setSearchTextPre(e.target.value)}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
