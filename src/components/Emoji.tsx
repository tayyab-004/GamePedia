import { Image, ImageProps } from "@chakra-ui/react";
import bullEye from "../assets/bullseye-focus.svg";
import thumbsUp from "../assets/thumbs-up-like.svg";
import meh from "../assets/meh.svg";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullEye, alt: "exceptional", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
