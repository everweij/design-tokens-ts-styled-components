const theme = {
  colors: {
    primary: [
      "hsl(205, 79%, 97%)",
      "hsl(205, 97%, 85%)",
      "hsl(205 ,84%, 74%)",
      "hsl(205 ,74%, 65%)",
      "hsl(205, 65%, 55%)",
      "hsl(205, 67%, 45%)",
      "hsl(205, 76%, 39%)",
      "hsl(205, 82%, 33%)",
      "hsl(205, 87%, 29%)",
      "hsl(205, 100%, 21%)"
    ],
    secondary: [
      "hsl(171, 82%, 96%)",
      "hsl(172, 97%, 88%)",
      "hsl(174, 96%, 78%)",
      "hsl(176, 87%, 67%)",
      "hsl(178, 78%, 57%)",
      "hsl(180, 77%, 47%)",
      "hsl(182, 85%, 39%)",
      "hsl(184, 90%, 34%)",
      "hsl(186, 91%, 29%)",
      "hsl(188, 91%, 23%)"
    ],
    grey: [
      "hsl(0, 0%, 97%)",
      "hsl(125, 2%, 91%)",
      "hsl(247, 2%, 81%)",
      "hsl(0, 0%, 69%)",
      "hsl(0, 0%, 62%)",
      "hsl(0, 0%, 49%)",
      "hsl(0, 0%, 38%)",
      "hsl(0, 0%, 32%)",
      "hsl(0, 0%, 21%)",
      "hsl(0, 0%, 13%)"
    ],
    warning: [
      "hsl(49, 100%, 97%)",
      "hsl(48, 100%, 88%)",
      "hsl(48, 95%, 76%)",
      "hsl(48, 94%, 68%)",
      "hsl(44, 92%, 63%)",
      "hsl(42, 87%, 55%)",
      "hsl(36, 77%, 49%)",
      "hsl(29, 80%, 44%)",
      "hsl(22, 82%, 39%)",
      "hsl(15, 86%, 30%)"
    ],
    error: [
      "hsl(360, 100%, 98%)",
      "hsl(360, 82%, 89%)",
      "hsl(360, 77%, 78%)",
      "hsl(360, 71%, 66%)",
      "hsl(360, 64%, 55%)",
      "hsl(360, 67%, 44%)",
      "hsl(360, 72%, 38%)",
      "hsl(360, 79%, 32%)",
      "hsl(360, 85%, 25%)",
      "hsl(360, 92%, 20%)"
    ],
    success: [
      "hsl(122, 60%, 97%)",
      "hsl(122, 60%, 86%)",
      "hsl(122, 55%, 74%)",
      "hsl(122, 49%, 61%)",
      "hsl(122, 40%, 52%)",
      "hsl(122, 39%, 42%)",
      "hsl(122, 39%, 34%)",
      "hsl(122, 39%, 27%)",
      "hsl(122, 39%, 21%)",
      "hsl(122, 39%, 14%)"
    ]
  },
  space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768],
  fontSize: new Map([
    [-3, 10],
    [-2, 12],
    [-1, 14],
    [0, 16],
    [1, 18],
    [2, 20],
    [3, 24],
    [4, 30],
    [5, 36],
    [6, 48],
    [7, 60],
    [8, 72],
    [9, 18]
  ]),
  lineHeight: {
    narrow: 1.15,
    normal: 1.3,
    spaced: 1.5,
    wide: 1.7
  }
};

export type Theme = typeof theme;

export type ThemeProps = { theme?: Theme };

export type ColorType = keyof Theme["colors"];
export type ColorIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type SpaceIndex =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;
export type FontSizeIndex =
  | -3
  | -2
  | -1
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9;
export type LineHeight = keyof Theme["lineHeight"];

export default theme;
