type ThemeColor = {
  value: string;
  index: number;
};

type ThemeColorsObject = {
  light: ThemeColor[];
  dark: ThemeColor[];
};

const colors: ThemeColorsObject = {
  light: [
    { value: "none", index: 0 }, //none
    { value: "salmon", index: 1 }, //salmon
    { value: "lightblue", index: 2 }, //lightblue
    { value: "lightgreen", index: 3 }, //lightgreen
    { value: "gold", index: 4 }, //gold
    { value: "tan", index: 5 }, //tan
  ],
  dark: [
    { value: "none", index: 0 }, //none
    { value: "maroon", index: 1 }, //salmon
    { value: "midnightblue", index: 2 }, //lightblue
    { value: "darkgreen", index: 3 }, //lightgreen
    { value: "darkgoldenrod", index: 4 }, //gold
    { value: "saddlebrown", index: 5 }, //tan
  ],
};

function getColor(theme: string, index: number): string {
  const result: string = colors[theme][index].value;
  return result;
}

export { getColor };
