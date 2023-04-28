import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image } from "@chakra-ui/react";

interface Props {
  gameRatingTop: number;
  isInDetailPage?: boolean;
}

const GameRating = ({ gameRatingTop, isInDetailPage }: Props) => {
  const ratingMap: { [key: number]: string } = {
    5: bullsEye,
    4: thumbsUp,
    3: meh,
  };

  return (
    <>
      {gameRatingTop in ratingMap ? (
        <Image
          src={ratingMap[gameRatingTop]}
          boxSize={isInDetailPage ? 9 : 7}
          display="inline"
          marginLeft={3}
          position="relative"
          top={1}
        />
      ) : null}
    </>
  );
};

export default GameRating;
