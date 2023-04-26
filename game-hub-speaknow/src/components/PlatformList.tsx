import { HStack, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { Platform } from "../entities/Platform";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

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
        <Icon key={platform.id} as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformList;
