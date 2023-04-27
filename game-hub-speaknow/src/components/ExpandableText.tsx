import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children?: string;
}

const ExpandableText = ({ children }: Props) => {
  const limit = 300;
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= 300) return <Text>{children}</Text>;

  const slicedText = children?.slice(0, limit) + "... ";
  return (
    <>
      <Text>
        {isExpanded ? children : slicedText}
        <Button
          marginLeft={2}
          colorScheme="yellow"
          size="xs"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
