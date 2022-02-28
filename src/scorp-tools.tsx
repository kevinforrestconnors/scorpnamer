import {
  MANUALLY_TAGGED_SCORP_COLORS,
  SORTED_COLOR_DISTRIBUTION,
} from "./constants";
import { ColorInfo } from "./ColorInfo";
import { nanoid } from "nanoid";

export function ColorDistribution(props: {
  colorFilters: { [color: string]: boolean };
}): React.ReactElement {
  const colorFilters = props.colorFilters;

  const ColorInfos = SORTED_COLOR_DISTRIBUTION.map((hexCode: string) => {
    const colorTags =
      MANUALLY_TAGGED_SCORP_COLORS[
        hexCode as keyof typeof MANUALLY_TAGGED_SCORP_COLORS
      ];
    const shouldDisplay = colorTags.some((color: string) => {
      if (colorFilters["all"] === true) {
        return true;
      }
      return colorFilters[color];
    });
    if (!shouldDisplay) {
      return <></>;
    }
    return <ColorInfo key={nanoid()} hexCode={hexCode}></ColorInfo>;
  });

  return <div className="color-info_grid">{ColorInfos}</div>;
}
