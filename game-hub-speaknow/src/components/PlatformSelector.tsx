import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const selectedPlatform = useGameQueryStore(
    (s) => s.gameQuery.selectedPlatformId
  );
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<BsChevronDown />}>
        {selectedPlatform
          ? data?.results.find((d) => d.id === selectedPlatform)?.name
          : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
