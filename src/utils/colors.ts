type ThemeColor = {
  [value: string]: string | number;
  index: number;
};

type ThemeColorsObject = ThemeColor[];

const light: ThemeColorsObject = [
  { value: "none", index: 0 },
  { value: "salmon", index: 1 },
  { value: "lightblue", index: 2 },
  { value: "lightgreen", index: 3 },
  { value: "gold", index: 4 },
  { value: "tan", index: 5 },
];

const dark: ThemeColorsObject = [
    { value: "none", index: 0 },
    { value: "maroon", index: 1 },
    { value: "midnightblue", index: 2 },
    { value: "darkgreen", index: 3 },
    { value: "darkgoldenrod", index: 4 },
    { value: "saddlebrown", index: 5 },
  ]

function getColor(theme: string, index: number): string {
  const themeColors = theme === 'light' ? light : dark

  const result = themeColors[index].value as string;
  return result;
}

export { getColor };
