import {
  getColors,
  hasAttribute,
  isMono,
  isBaller,
  isDruglord,
} from "./scorp-data";
import { NAME_LIST, MAIN_NAMES } from "./constants";
import Chance from "chance";

const chance = new Chance();

const getAffixes = (scorpId: string): string[] => {
  let names: string[] = [];

  if (Math.random() < 0.8) {
    names = names.concat(NAME_LIST.adjectives);
  }

  getColors(scorpId, 10).forEach((color) => {
    names.push(color);
  });

  if (
    hasAttribute(scorpId, "has_cigarette", true) ||
    hasAttribute(scorpId, "has_matches", true)
  ) {
    names = names.concat(NAME_LIST.smokers);
  }
  if (hasAttribute(scorpId, "has_halo", true)) {
    names = names.concat(NAME_LIST.halo);
    if (Math.random() > 0.85) {
      names = names.concat(NAME_LIST.art);
    }
  }
  if (isBaller(scorpId)) {
    names = names.concat(NAME_LIST.ballers);
    if (Math.random() > 0.97) {
      names = names.concat(NAME_LIST.art);
    }
  }
  if (isDruglord(scorpId)) {
    names = names.concat(NAME_LIST.druglords);
  }
  if (isMono(scorpId)) {
    names = names.concat(NAME_LIST.monos);
    getColors(scorpId, 40).forEach((color) => {
      names.push(color);
    });
    names = names.concat(NAME_LIST.art);
  }
  if (hasAttribute(scorpId, "multicolor_type", "stripes")) {
    names = names.concat(NAME_LIST.striped);
  }
  if (hasAttribute(scorpId, "claws_unique", true)) {
    names = names.concat(NAME_LIST.claws_unique);
  }
  if (
    hasAttribute(scorpId, "claw_left", "big") ||
    hasAttribute(scorpId, "claw_right", "big")
  ) {
    names = names.concat(NAME_LIST.claw_big);
    if (Math.random() > 0.6) {
      names = names.concat(NAME_LIST.dinosaur);
    }
  }
  if (
    hasAttribute(scorpId, "claw_left", "missing") ||
    hasAttribute(scorpId, "claw_right", "missing")
  ) {
    names = names.concat(NAME_LIST.claw_missing);
  }
  if (
    hasAttribute(scorpId, "claw_left", "ball") ||
    hasAttribute(scorpId, "claw_right", "ball")
  ) {
    names = names.concat(NAME_LIST.boxers);
  }
  if (
    hasAttribute(scorpId, "claw_left", "mushroom") ||
    hasAttribute(scorpId, "claw_right", "mushroom")
  ) {
    names = names.concat(NAME_LIST.mushies);
  }
  if (
    hasAttribute(scorpId, "claw_left", "scissors") ||
    hasAttribute(scorpId, "claw_right", "scissors")
  ) {
    names = names.concat(NAME_LIST.edwards);
    if (Math.random() > 0.99) {
      names = names.concat(NAME_LIST.insects);
    }
  }
  if (
    hasAttribute(scorpId, "evil_eye", "blue") ||
    hasAttribute(scorpId, "evil_eye", "red")
  ) {
    names = names.concat(NAME_LIST.evil_eyes);
  }

  if (hasAttribute(scorpId, "outline_type", "white")) {
    names = names.concat(NAME_LIST.white_outlines);
  }
  if (hasAttribute(scorpId, "no_eyes", true)) {
    names = names.concat(NAME_LIST.white_outlines);
  }
  if (hasAttribute(scorpId, "tail", "missing")) {
    names = names.concat(NAME_LIST.missing_tails);
  }
  if (hasAttribute(scorpId, "tail", "syringe")) {
    names = names.concat(NAME_LIST.syringe_tails);
  }
  if (hasAttribute(scorpId, "tail", "fat")) {
    names = names.concat(NAME_LIST.fat_tails);
    if (Math.random() > 0.9) {
      names = names.concat(NAME_LIST.dinosaur);
    }
  }
  if (hasAttribute(scorpId, "tail", "ball")) {
    names = names.concat(NAME_LIST.ball_tails);
  }
  if (hasAttribute(scorpId, "bloody_tail", true)) {
    names = names.concat(NAME_LIST.bloody_tails);
  }
  if (hasAttribute(scorpId, "legs", "stubby")) {
    names = names.concat(NAME_LIST.stubby_legs);
    if (Math.random() > 0.8) {
      names = names.concat(NAME_LIST.dinosaur);
    }
  }
  if (hasAttribute(scorpId, "legs", "skinny")) {
    names = names.concat(NAME_LIST.skinny_legs);
    if (Math.random() > 0.85) {
      names = names.concat(NAME_LIST.insects);
    }
  }
  if (hasAttribute(scorpId, "legs", "insect")) {
    names = names.concat(NAME_LIST.insect_legs);
    if (Math.random() > 0.3) {
      names = names.concat(NAME_LIST.insects);
    }
  }

  return names;
};

const prefixes = (scorpId: string): string[] => {
  let names = getAffixes(scorpId);

  return names;
};

const suffixes = (scorpId: string): string[] => {
  let names = getAffixes(scorpId);

  names = names.concat(NAME_LIST.nouns);

  return names;
};

const mains = (scorpId: string): string[] => {
  const names: string[] = [];

  // Color names from getColors2
  getColors(scorpId, 30).forEach((color) => {
    names.push(color);
  });

  return MAIN_NAMES.concat(NAME_LIST.general).concat(names);
};

function pickOneSafe(opts: string[]): string {
  if (opts.length === 0) {
    return "";
  }

  return chance.pickone(opts);
}

export function generateName(scorpId: string): string {
  const prefixRoll = Math.random();
  const suffixRoll = Math.random();

  const numPrefixes =
    prefixRoll > 0.99 ? 3 : prefixRoll > 0.9 ? 2 : prefixRoll > 0.5 ? 1 : 0;
  const numSuffixes =
    suffixRoll > 0.99 ? 3 : suffixRoll > 0.9 ? 2 : suffixRoll > 0.3 ? 1 : 0;

  const extraAdjective =
    Math.random() > 0.99 ? `${chance.pickone(NAME_LIST.adjectives)} & ` : "";

  const extraAdjective2 =
    Math.random() > 0.5 ? "" : chance.pickone(NAME_LIST.adjectives);

  const p1Opts = prefixes(scorpId);
  const p2Opts = mains(scorpId);
  const p3Opts = suffixes(scorpId);

  let result = "";
  let firstPart = extraAdjective;
  let middlePart =
    Math.random() > 0.7 && numPrefixes + numSuffixes > 0
      ? ""
      : pickOneSafe(p2Opts).trim();
  let lastPart = "";

  for (let i = 0; i < numPrefixes; i++) {
    firstPart += `${pickOneSafe(p1Opts)} `;
  }
  firstPart = firstPart.trim();

  for (let i = 0; i < numSuffixes; i++) {
    lastPart += `${pickOneSafe(p3Opts)} `;
  }
  lastPart = lastPart.trim();
  if (numSuffixes > 0) {
    lastPart =
      Math.random() > 0.82
        ? `${
            Math.random() > 0.2 && firstPart.length + middlePart.length > 0
              ? ","
              : ""
          } the ${extraAdjective2} ${lastPart}`
        : lastPart;
  }

  result = `${firstPart} ${middlePart} ${lastPart}`.trim();

  if (Math.random() > 0.85) {
    result = `${pickOneSafe(NAME_LIST.supraPrefixes)}${result}`;
  }

  if (Math.random() > 0.7) {
    result =
      Math.random() > 0.5
        ? `${result}${pickOneSafe(NAME_LIST.nonEnglishSupraSuffixes)}`
        : `${result}${pickOneSafe(NAME_LIST.supraSuffixes)}`;
  }

  result = result.trim().toLowerCase().replace("  ", " ").replace(" ,", ",");

  return result.length > 64 || result === "" ? generateName(scorpId) : result;
}
