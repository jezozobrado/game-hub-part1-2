import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game } = useGame(slug!);

  return (
    <>
      <ExpandableText children={game?.description_raw} />
    </>
  );
};

export default GameDetails;
