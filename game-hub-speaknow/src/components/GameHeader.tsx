import { Heading, Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Link } from "react-router-dom";

interface Props {
  gameName: string;
  gameRatingTop: number;
  gameId: number;
}

const GameHeader = ({ gameName, gameId, gameRatingTop }: Props) => {
  const ratingMap: { [key: number]: string } = {
    5: bullsEye,
    4: thumbsUp,
    3: meh,
  };

  return (
    <>
      <Link to={"/games/" + gameId}>
        <Heading fontSize="2xl" display="inline">
          {gameName}
        </Heading>
      </Link>
      {gameRatingTop in ratingMap ? (
        <Image
          src={ratingMap[gameRatingTop]}
          boxSize={7}
          display="inline"
          marginLeft={3}
          position="relative"
          top={1}
        />
      ) : null}
    </>
  );
};

export default GameHeader;
