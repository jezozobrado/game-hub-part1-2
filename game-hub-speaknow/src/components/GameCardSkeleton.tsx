import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card borderRadius={10} height="300px">
        <CardBody padding={0}>
          <Skeleton isLoaded fadeDuration={1} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
