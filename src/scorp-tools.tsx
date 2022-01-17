import { getScorpMetadata } from "./scorp-data";

const metadata = require("./metadata.json");
const ids = Object.keys(metadata.entries);

type ScorpCount = {
  occurrences: number;
  scorps: Set<string>;
};

export const ColorDistribution: React.ReactElement = (function () {
  const COLOR_DISTRIBUTION: {
    [color: string]: ScorpCount;
  } = {};

  function ColorInfoSquare(hexCode: string): React.ReactElement {
    const count = COLOR_DISTRIBUTION[hexCode].occurrences;
    const scorpCount = COLOR_DISTRIBUTION[hexCode].scorps.size;

    const easterEgg = Math.random() > 0.99 ? "scrop" : "scorp";

    return (
      <div
        className="color-info"
        style={{ backgroundColor: hexCode, border: `4px solid ${hexCode}` }}
      >
        <div className="color-info_textbox">
          <div className="color-info_text">
            <div>
              {hexCode} occurs {count} times.{" "}
            </div>
            <div>
              {scorpCount} {easterEgg}s have this.
            </div>
          </div>
        </div>
      </div>
    );
  }

  ids.forEach((scorpId: string) => {
    const colors = getScorpMetadata(scorpId).colors;

    for (const [_, value] of Object.entries(colors)) {
      if (!COLOR_DISTRIBUTION[value]) {
        COLOR_DISTRIBUTION[value] = {
          occurrences: 0,
          scorps: new Set(),
        };
      }

      COLOR_DISTRIBUTION[value].occurrences++;
      COLOR_DISTRIBUTION[value].scorps.add(scorpId);
    }
  });

  function compare(
    [_, sc1]: [string, ScorpCount],
    [__, sc2]: [string, ScorpCount]
  ): number {
    if (sc1.occurrences < sc2.occurrences) {
      return -1;
    }
    if (sc1.occurrences > sc2.occurrences) {
      return 1;
    }
    return 0;
  }

  const sortedColorDistribution = Object.entries(COLOR_DISTRIBUTION)
    .sort(compare)
    .map(([color, _]: [string, ScorpCount]): string => color);

  const ColorInfos = sortedColorDistribution.map((hexCode: string) => {
    return ColorInfoSquare(hexCode);
  });

  return <div className="color-info_grid">{ColorInfos}</div>;
})();
