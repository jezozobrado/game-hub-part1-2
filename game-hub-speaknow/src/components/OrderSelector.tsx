import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const OrderSelector = () => {
  const orderMap = [
    { slug: "", name: "Relevance" },
    { slug: "-added", name: "Date Added" },
    { slug: "name", name: "Name" },
    { slug: "-released", name: "Release date" },
    { slug: "-metacritic", name: "Rating" },
    { slug: "-rating", name: "Average Rating" },
  ];

  const selectedOrder = useGameQueryStore((s) => s.gameQuery.selectedOrderSlug);
  const setSelectedOrder = useGameQueryStore((s) => s.setOrder);

  const selectedOrderName = orderMap.find(
    (o) => o.slug === selectedOrder
  )?.name;

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<BsChevronDown />}>
        {selectedOrder
          ? `Order by: ${selectedOrderName}`
          : "Order by: Relevance"}
      </MenuButton>
      <MenuList>
        {orderMap.map((o) => (
          <MenuItem key={o.slug} onClick={() => setSelectedOrder(o.slug)}>
            {o.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
