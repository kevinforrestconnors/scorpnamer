import { SORTED_COLOR_DISTRIBUTION } from "./constants";
import { ColorInfo } from "./ColorInfo";

export function ColorDistribution(): React.ReactElement {
  const ColorInfos = SORTED_COLOR_DISTRIBUTION.map((hexCode: string) => {
    return <ColorInfo key={hexCode} hexCode={hexCode}></ColorInfo>;
  });

  return <div className="color-info_grid">{ColorInfos}</div>;
}
