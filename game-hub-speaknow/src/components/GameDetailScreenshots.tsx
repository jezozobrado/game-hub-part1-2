import { Grid, GridItem, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  slug: string;
}

const GameDetailScreenshots = ({ slug }: Props) => {
  const { data: screenshots } = useScreenshots(slug);
  //   console.log(data);

  return (
    <>
      <Grid templateColumns="1fr 1fr" gap={3}>
        {screenshots?.results.map((screenshot) => (
          <GridItem>
            <Image src={screenshot.image} borderRadius={10} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default GameDetailScreenshots;
