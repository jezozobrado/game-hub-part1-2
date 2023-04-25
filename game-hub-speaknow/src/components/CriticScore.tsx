import { Badge } from "@chakra-ui/react";

interface Props {
  gameScore: number;
}

const CriticScore = ({ gameScore }: Props) => {
  const color = gameScore > 85 ? "green" : gameScore > 70 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="16px" paddingX={2}>
      {gameScore}
    </Badge>
  );
};

export default CriticScore;
