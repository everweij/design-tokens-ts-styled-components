import defaultTheme, {
  ColorType,
  ColorIndex,
  ThemeProps,
  SpaceIndex,
  FontSizeIndex,
  LineHeight
} from "./theme";

function getTheme(props: ThemeProps) {
  return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

export function getColor(
  type: ColorType,
  index: ColorIndex,
  props: ThemeProps
) {
  return getTheme(props).colors[type][index];
}

export function getSpace(index: SpaceIndex, props: ThemeProps) {
  return getTheme(props).space[index] + "px";
}

export function getFontSize(index: FontSizeIndex, props: ThemeProps) {
  return getTheme(props).fontSize.get(index) + "px";
}

export function getLineHeight(lineHeight: LineHeight, props: ThemeProps) {
  return getTheme(props).lineHeight[lineHeight];
}
