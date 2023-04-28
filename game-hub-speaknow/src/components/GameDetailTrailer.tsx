import { Box } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  slug: string;
}

const GameDetailTrailer = ({ slug }: Props) => {
  const { data: trailers } = useTrailers(slug);

  if (!trailers?.count) return null;
  return (
    <Box borderRadius={10} overflow="hidden">
      <video src={trailers?.results[0].data[480]} controls></video>
    </Box>
  );
};

export default GameDetailTrailer;
