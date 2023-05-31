import { useTheme } from "@chakra-ui/react";

function useInjectionThemeToStyles(makeStyles) {
  const theme = useTheme();
  
  if (typeof makeStyles !== "function") return makeStyles;

  return makeStyles(theme);
}

export default useInjectionThemeToStyles;
