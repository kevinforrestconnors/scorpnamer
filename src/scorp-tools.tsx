import {
  MANUALLY_TAGGED_SCORP_COLORS,
  SORTED_COLOR_DISTRIBUTION,
} from "./constants";
import { ColorInfo } from "./ColorInfo";
import { nanoid } from "nanoid";
import { getOwnedScorps, deltaE, hexToRgb } from "./util";
import { useEffect, useState } from "react";

export function ColorDistribution(props: {
  walletFilter: string;
  colorFilters: { [color: string]: boolean };
  scorpionFilters: { [attName: string]: Set<string> };
  otherFilters: {
    mono: boolean;
    psuedoMono: boolean;
    psuedoMonoTolerance: number;
    bodyEqBg2: boolean;
    secondaryEqBg2: boolean;
    secondaryEqBg: boolean;
  };
}): React.ReactElement {
  const [owners, setOwners] = useState<string[]>([]);

  useEffect(() => {
    if (!owners) {
      (async () => {
        const owners = await getOwnedScorps(props.walletFilter);
        setOwners(owners);
      })();
    }
  }, [owners, props.walletFilter]);

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
    return (
      <ColorInfo
        key={nanoid()}
        hexCode={hexCode}
        scorpionFilters={props.scorpionFilters}
        otherFilters={props.otherFilters}
      ></ColorInfo>
    );
  });

  return <div className="color-info_grid">{ColorInfos}</div>;
}
