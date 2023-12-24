import { Button, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  console.log(toggleColorMode);
  console.log(colorMode);

  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={() => toggleColorMode()}
    />
  );
};

export default ColorModeSwitch;
