import { ScorpMetadata, AttributeStats, RarityProfile } from "./types";

const metadata = require("./metadata.json");

const scrops: ScorpMetadata = metadata.entries;
const attributes: AttributeStats = metadata.attribute_stats;
const rareAttributes = require("./raretraits.json");

export function getScorpMetadata(scorpId: string): ScorpMetadata {
  return scrops[scorpId];
}

export function getRarity(scorpId: string): RarityProfile {
  const scorpAttributes = getScorpMetadata(scorpId).attributes;

  let rarity = 0;
  const rareTraits = {};

  for (const att of Object.keys(scorpAttributes)) {
    const attributeValueForScorp = scorpAttributes[att];
    if (rareAttributes[att][attributeValueForScorp]) {
      rarity += parseInt(
        rareAttributes[att][attributeValueForScorp].rarity.substring(0, 1)
      );
      rareTraits[att] = {
        [attributeValueForScorp]: rareAttributes[att][attributeValueForScorp],
      };
    }
  }

  return {
    rarity,
    rareTraits,
  };
}
