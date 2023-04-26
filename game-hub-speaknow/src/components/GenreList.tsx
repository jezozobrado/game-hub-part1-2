import { HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <>
      <Heading fontSize="3xl" marginY={5}>
        Genres
      </Heading>
      <List spacing={2}>
        {genres?.results.map((genre) => (
          <HStack key={genre.id}>
            <Image
              src={genre.image_background}
              boxSize="35px"
              borderRadius={5}
            />
            <ListItem fontSize="lg">{genre.name}</ListItem>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenreList;
