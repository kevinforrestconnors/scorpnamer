import { ScorpMetadata, RarityProfile, Colors, Attributes } from "./types";
import colorNames from "./color-names";

const metadata = require("./metadata.json");

const scrops: { [id: string]: ScorpMetadata } = metadata.entries;
const rareAttributes = require("./raretraits.json");

export function getScorpMetadata(scorpId: string): ScorpMetadata {
  return scrops[scorpId];
}

export function getRarity(scorpId: string): RarityProfile {
  const scorpAttributes = getScorpMetadata(scorpId).attributes;

  const rarityProfile: RarityProfile = {
    rarity: 0,
    rareTraits: {},
  };

  for (const att of Object.keys(scorpAttributes) as (keyof Attributes)[]) {
    const attributeValueForScorp = scorpAttributes[att].toString();
    if (rareAttributes[att][attributeValueForScorp]) {
      rarityProfile.rarity += parseInt(
        rareAttributes[att][attributeValueForScorp].rarity.substring(0, 1)
      );
      rarityProfile.rareTraits[att] = {
        [attributeValueForScorp]: rareAttributes[att][attributeValueForScorp],
      };
    }
  }

  return rarityProfile;
}

function getNiceColorName(hexCode: string): string {
  let niceColor = colorNames.name(hexCode)[1].toString().toLowerCase();

  if (niceColor.includes("invalid color: ")) {
    niceColor = niceColor.substring(niceColor.indexOf("invalid color: "));
  }
  return niceColor;
}

export function getColors(scorpId: string): Colors {
  const mColors = getScorpMetadata(scorpId).colors;
  return {
    outline_color: getNiceColorName(mColors.outline_color),
    body_color: getNiceColorName(mColors.body_color),
    eye_color: getNiceColorName(mColors.eye_color),
    bg_color: getNiceColorName(mColors.bg_color),
    bg2_color: getNiceColorName(mColors.bg2_color),
    secondary_color: getNiceColorName(mColors.secondary_color),
  };
}

export function hasAttribute(
  scorpId: string,
  attributeName: keyof Attributes,
  attributeValue: string | boolean
): boolean {
  const scorpMetadata = getScorpMetadata(scorpId).attributes;
  return scorpMetadata[attributeName] === attributeValue;
}

export function isMono(scorpId: string): boolean {
  const colors = getColors(scorpId);
  return colors.body_color === colors.bg2_color;
}

export function isBaller(scorpId: string): boolean {
  const scorpMetadata = getScorpMetadata(scorpId).attributes;
  return (
    scorpMetadata.claw_left === "ball" &&
    scorpMetadata.claw_right === "ball" &&
    scorpMetadata.tail === "ball"
  );
}

export function isDruglord(scorpId: string): boolean {
  const scorpMetadata = getScorpMetadata(scorpId).attributes;
  return (
    scorpMetadata.claw_left === "mushroom" &&
    scorpMetadata.claw_right === "mushroom" &&
    scorpMetadata.tail === "syringe"
  );
}

export function isNatty(scorpId: string): boolean {
  return getRarity(scorpId).rarity === 0;
}
