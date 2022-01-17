type ColorName = {
  name: string;
  hex: string;
  distance: number;
};

type ColorNamer = {
  roygbiv: ColorName[];
  basic: ColorName[];
  html: ColorName[];
  x11: ColorName[];
  pantone: ColorName[];
  ntc: ColorName[];
};

declare module "color-namer" {
  export default function namer(color: string): ColorNamer;
}
