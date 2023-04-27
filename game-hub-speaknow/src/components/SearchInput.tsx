import { InputGroup, InputLeftElement, Input, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSubmit: (searchInput?: string) => void;
}
const SearchInput = ({ onSubmit }: Props) => {
  const [searchText, setSearchText] = useState<string>();
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <Box width="100%">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return onSubmit(searchText);
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
            onChange={(e) => setSearchText(e.target.value)}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
