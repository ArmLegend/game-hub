import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} px={5}>
      <Image src={logo} boxSize={20} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
