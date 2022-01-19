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
  }
  if (isBaller(scorpId)) {
    names = names.concat(NAME_LIST.ballers);
  }
  if (isDruglord(scorpId)) {
    names = names.concat(NAME_LIST.druglords);
  }
  if (isMono(scorpId)) {
    names = names.concat(NAME_LIST.monos);
    getColors(scorpId, 40).forEach((color) => {
      names.push(color);
    });
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
  }
  if (hasAttribute(scorpId, "tail", "ball")) {
    names = names.concat(NAME_LIST.ball_tails);
  }
  if (hasAttribute(scorpId, "bloody_tail", true)) {
    names = names.concat(NAME_LIST.bloody_tails);
  }
  if (hasAttribute(scorpId, "legs", "stubby")) {
    names = names.concat(NAME_LIST.stubby_legs);
  }
  if (hasAttribute(scorpId, "legs", "skinny")) {
    names = names.concat(NAME_LIST.skinny_legs);
  }
  if (hasAttribute(scorpId, "legs", "insect")) {
    names = names.concat(NAME_LIST.insect_legs);
  }
  if (hasAttribute(scorpId, "legs", "fat")) {
    names = names.concat(NAME_LIST.fat_legs);
  }

  return names;
};

const prefixes = (scorpId: string): string[] => {
  let names = getAffixes(scorpId);

  return names;
};

const suffixes = (scorpId: string): string[] => {
  let names = getAffixes(scorpId);

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

export function generateName(scorpId: string): string {
  const prefixRoll = Math.random(); // > 0.9 = 2 prefix, > 0.3 = 1 prefix, < 0.3 = 0 prefix
  const suffixRoll = Math.random(); // > 0.9 = 2 suffix, > 0.3 = 1 suffix, < 0.3 = 0 suffix

  const numPrefixes = prefixRoll > 0.9 ? 2 : prefixRoll > 0.3 ? 1 : 0;
  const numSuffixes = suffixRoll > 0.9 ? 2 : suffixRoll > 0.3 ? 1 : 0;

  const p1Opts = prefixes(scorpId);
  const p2Opts = mains(scorpId);
  const p3Opts = suffixes(scorpId);

  let result = "";
  let firstPart = "";
  let middlePart = chance.pickone(p2Opts);
  let lastPart = "";

  for (let i = 0; i < numPrefixes; i++) {
    firstPart += `${chance.pickone(p1Opts)} `;
  }
  firstPart = firstPart.trim();

  for (let i = 0; i < numSuffixes; i++) {
    lastPart += `${chance.pickone(p3Opts)} `;
  }
  lastPart = lastPart.trim();
  if (numSuffixes > 0) {
    lastPart = Math.random() > 0.85 ? `the ${lastPart}` : lastPart;
  }

  result = `${firstPart} ${middlePart} ${lastPart}`.trim();

  if (Math.random() > 0.9) {
    result = `${chance.pickone(NAME_LIST.supraPrefixes)}${result}`;
  }

  if (Math.random() > 0.95) {
    result = `${result}${chance.pickone(NAME_LIST.supraSuffixes)}`;
  }

  result = result.trim().toLowerCase();

  return result.length > 64 ? generateName(scorpId) : result;
}
