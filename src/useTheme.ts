import { useContext, useMemo } from "react";
import { ThemeContext } from "styled-components";
import { ThemeProps } from "./theme";

import { getColor, getFontSize, getLineHeight, getSpace } from "./getters";
import { OmitThemeProp } from "./types";

function partialGetter<T extends (...args: any) => any>(
  getter: T,
  props: ThemeProps
) {
  return function x(...args: OmitThemeProp<Parameters<T>>): ReturnType<T> {
    return getter(...args, props);
  };
}

export default function useTheme() {
  const theme = useContext(ThemeContext);

  return useMemo(() => {
    const themeProps = { theme };

    return {
      color: partialGetter(getColor, themeProps),
      space: partialGetter(getSpace, themeProps),
      fontSize: partialGetter(getFontSize, themeProps),
      lineHeight: partialGetter(getLineHeight, themeProps)
    };
  }, [theme]);
}
