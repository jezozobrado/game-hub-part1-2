import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.selectedGenreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

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
            <ListItem fontSize="lg">
              <Button
                textAlign="left"
                whiteSpace="normal"
                variant="link"
                onClick={() => setSelectedGenreId(genre.id)}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                fontSize="18px"
              >
                {genre.name}
              </Button>
            </ListItem>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenreList;
