import {
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import React from "react";

interface Props {
  selectedGenreId: number | null;
  onSelectGenre: (selectedGenreId: number | null) => void;
}
const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const pageSize = 12;

  const {
    data: genres,
    fetchNextPage,
    fetchPreviousPage,
  } = useGenres(pageSize);

  return (
    <>
      <Heading fontSize="3xl" marginY={5}>
        Genres
      </Heading>
      <List spacing={2}>
        {genres?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((genre) => (
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
                    onClick={() => onSelectGenre(genre.id)}
                    fontWeight={
                      selectedGenreId === genre.id ? "bold" : "normal"
                    }
                    fontSize="18px"
                  >
                    {genre.name}
                  </Button>
                </ListItem>
              </HStack>
            ))}
          </React.Fragment>
        ))}
      </List>
      {/* 
        {genres?.results.map((genre) => (
          <HStack key={genre.id}>
            <Image
              src={genre.image_background}
              boxSize="35px"
              borderRadius={5}
            />
            <ListItem fontSize="lg">{genre.name}</ListItem>
          </HStack>
        ))} */}

      {genres?.pages.at(-1)?.next ? (
        <Button marginTop={4} onClick={() => fetchNextPage()}>
          <HStack>
            <Icon as={BsChevronDown} />
            <Text>Show more</Text>
          </HStack>
        </Button>
      ) : (
        <Button
          marginTop={4}
          onClick={() => fetchPreviousPage({ pageParam: 1 })}
        >
          <HStack>
            <Icon as={BsChevronUp} />
            <Text>Hide</Text>
          </HStack>
        </Button>
      )}
    </>
  );
};

export default GenreList;
