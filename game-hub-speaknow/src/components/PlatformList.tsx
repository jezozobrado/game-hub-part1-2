import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../entities/Platform";

interface Props {
  gamePlatforms: { platform: Platform }[];
}

const PlatformList = ({ gamePlatforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack>
      {gamePlatforms.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.600" />
      ))}
    </HStack>
  );
};

export default PlatformList;
