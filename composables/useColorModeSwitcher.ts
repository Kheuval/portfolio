export const useColormodeSwitcher = () => {
  const colorMode = useColorMode();

  const switchColorMode = () => {
    colorMode.value = colorMode.value === "light" ? "dark" : "light";
  };

  return { colorMode, switchColorMode };
};
