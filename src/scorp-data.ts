import { ScorpMetadata, RarityProfile, Attributes } from "./types";
import colorNamer from "color-namer";

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

export function prettyFormatColor(color: string): string {
  let prettyColor = color.toLowerCase();

  // allow single word boring colors
  if (!prettyColor.includes(" ")) {
    return prettyColor;
  }

  // exceptions
  if (prettyColor === "unmellow yellow") {
    return prettyColor;
  }

  const COLOR_NAMES_TO_IGNORE = [
    "black",
    "blue",
    "cyan",
    "green",
    "teal",
    "turquoise",
    "indigo",
    "gray",
    "purple",
    "brown",
    "tan",
    "violet",
    "beige",
    "fuchsia",
    "gold",
    "magenta",
    "orange",
    "pink",
    "red",
    "white",
    "yellow",
  ];
  var expStr = COLOR_NAMES_TO_IGNORE.join("|");
  prettyColor = prettyColor
    .replace(new RegExp("\\b(" + expStr + ")\\b", "gi"), " ")
    .replace(/\s{2,}/g, " ");

  while (prettyColor.includes("  ")) {
    prettyColor = prettyColor.replace("  ", " ");
  }

  return prettyColor.trim();
}

export function getColors(scorpId: string, distance: number): Set<string> {
  const mColors = getScorpMetadata(scorpId).colors;
  const namers: ColorNamer[] = Object.values({
    body_color: mColors.body_color,
    bg_color: mColors.body_color,
  }).map(colorNamer);
  const colors: Set<string> = new Set();

  namers.forEach((names: ColorNamer) => {
    names.roygbiv.forEach((n) => {
      if (n.distance < distance) colors.add(prettyFormatColor(n.name));
    });
    names.basic.forEach((n) => {
      if (n.distance < distance) colors.add(prettyFormatColor(n.name));
    });
    names.pantone.forEach((n) => {
      if (n.distance < distance) colors.add(prettyFormatColor(n.name));
    });
    names.ntc.forEach((n) => {
      if (n.distance < distance) colors.add(prettyFormatColor(n.name));
    });
  });

  return colors;
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
  const colors = getScorpMetadata(scorpId).colors;
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
