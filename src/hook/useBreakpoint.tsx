import { useEffect, useState } from "react";
import { breakpoints } from "@/theme/break-points.theme";
import { BreakpointType } from "@/interfaces";

const useBreakpoint = () => {
  const sizeName = Object.keys(breakpoints);
  const sizeValue = Object.values(breakpoints);
  const [breakpoint, setBreakPoint] = useState<BreakpointType>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  if (typeof window != "undefined") {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      handleResize();

      let n = 0;
      const temp: BreakpointType = { ...breakpoint };
      while (!!sizeName[n + 1]) {
        if (sizeValue[n] <= windowSize.width) {
          temp[sizeName[n]] = true;
        } else {
          temp[sizeName[n]] = false;
        }
        n += 1;
      }

      setBreakPoint(temp);
      return () => window.removeEventListener("resize", handleResize);
    }, [windowSize?.width]);
  }
  return breakpoint;
};

export default useBreakpoint;
