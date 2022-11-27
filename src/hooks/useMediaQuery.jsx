import { useMediaQuery as useMediaQueryResponsive } from "react-responsive";

export const useMediaQuery = (width = 1000) => {
  const isDesktopOrMobile = useMediaQueryResponsive({ minWidth: width });

  return isDesktopOrMobile
}