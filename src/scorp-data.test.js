import {
  getScorpMetadata,
  getRarity,
  getColors,
  hasAttribute,
  isMono,
  isBaller,
  isDruglord,
  isNatty,
} from "./scorp-data";

test("Can fetch attributes of a scorp", () => {
  // Given
  const scorpId = "1136";
  const expectedOutput = {
    image: "1136.png",
    image_large: "1136_large.png",
    attributes: {
      outline_type: "black",
      bg_style: "blank",
      claw_left: "ball",
      claw_right: "ball",
      has_cigarette: false,
      legs: "insect",
      tail: "normal",
      bloody_tail: false,
      has_matches: false,
      has_halo: false,
      multicolored: false,
      colored_claws: false,
      colored_core: false,
      colored_tail: false,
      multicolor_type: "none",
      false_face: "none",
      evil_eye: "none",
      no_eyes: false,
      claws_unique: false,
    },
    colors: {
      outline_color: "#000000",
      body_color: "#00FF9B",
      eye_color: "#2FFF9B",
      bg_color: "#002FFF",
      bg2_color: "#2FB49B",
      secondary_color: "#FFFF9B",
    },
  };

  // When
  const result = getScorpMetadata(scorpId);

  // Then
  expect(result).toEqual(expectedOutput);
});

test("Can compute scorp rarity", () => {
  // Given
  const scorpId = "1136";
  const expectedOutput = {
    rarity: 9,
    rareTraits: {
      claw_left: {
        ball: {
          occurances: 547,
          rarity: "4,5.5%",
        },
      },
      claw_right: {
        ball: {
          occurances: 532,
          rarity: "4,5.3%",
        },
      },
      legs: {
        insect: {
          occurances: 2442,
          rarity: "1,24%",
        },
      },
    },
  };

  // When
  const result = getRarity(scorpId);

  // Then
  expect(result).toEqual(expectedOutput);
});

test("Can name scorp colors", () => {
  // Given
  const scorpId = "0056";
  const expectedOutput = new Set([
    "yellow",
    "gold",
    "laser lemon",
    "unmellow yellow",
    "golden fizz",
    "starship",
    "gorse",
    "broom",
    "lemon",
    "turbo",
    "canary",
    "pear",
    "barberry",
    "bitter lemon",
    "sunflower",
    "chartreuse",
    "las palmas",
    "ripe lemon",
    "candy corn",
    "bird flower",
    "fuego",
    "golden dream",
    "candlelight",
    "rio grande",
    "paris daisy",
    "wattle",
    "school bus",
    "key lime pie",
    "portica",
    "electric lime",
    "inch worm",
    "la rioja",
    "festival",
  ]);

  // When
  const result = getColors(scorpId, 25);

  // Then
  expect(result).toEqual(expectedOutput);
});

test("Can name scorp colors with different distance", () => {
  // Given
  const scorpId = "0056";
  const expectedOutput = new Set([
    "barberry",
    "bird flower",
    "bitter lemon",
    "broom",
    "canary",
    "candlelight",
    "candy corn",
    "chartreuse",
    "fuego",
    "golden dream",
    "golden fizz",
    "gorse",
    "las palmas",
    "laser lemon",
    "lemon",
    "pear",
    "rio grande",
    "ripe lemon",
    "starship",
    "sunflower",
    "turbo",
    "unmellow yellow",
    "yellow",
  ]);

  // When
  const result = getColors(scorpId, 20);

  // Then
  expect(result).toEqual(expectedOutput);
});

test("Can check attributes of scrop", () => {
  // Given
  const scorpId = "1136";
  let allTrue = true;

  // When

  allTrue = allTrue && hasAttribute(scorpId, "outline_type", "black");
  allTrue = allTrue && hasAttribute(scorpId, "bg_style", "blank");
  allTrue = allTrue && hasAttribute(scorpId, "claw_left", "ball");
  allTrue = allTrue && hasAttribute(scorpId, "claw_right", "ball");
  allTrue = allTrue && hasAttribute(scorpId, "has_cigarette", false);
  allTrue = allTrue && hasAttribute(scorpId, "legs", "insect");
  allTrue = allTrue && hasAttribute(scorpId, "tail", "normal");
  allTrue = allTrue && hasAttribute(scorpId, "bloody_tail", false);
  allTrue = allTrue && hasAttribute(scorpId, "has_matches", false);
  allTrue = allTrue && hasAttribute(scorpId, "has_halo", false);
  allTrue = allTrue && hasAttribute(scorpId, "multicolored", false);
  allTrue = allTrue && hasAttribute(scorpId, "colored_claws", false);
  allTrue = allTrue && hasAttribute(scorpId, "colored_core", false);
  allTrue = allTrue && hasAttribute(scorpId, "colored_tail", false);
  allTrue = allTrue && hasAttribute(scorpId, "multicolor_type", "none");
  allTrue = allTrue && hasAttribute(scorpId, "false_face", "none");
  allTrue = allTrue && hasAttribute(scorpId, "evil_eye", "none");
  allTrue = allTrue && hasAttribute(scorpId, "no_eyes", false);
  allTrue = allTrue && hasAttribute(scorpId, "claws_unique", false);

  // Then
  expect(allTrue).toEqual(true);
});

test("Can check for monos", () => {
  // Given
  const mono = "4230";
  const notMono = "1136";

  // When
  const is4230AMono = isMono(mono);
  const is1136MonoAMono = isMono(notMono);

  // Then
  expect(is4230AMono).toEqual(true);
  expect(is1136MonoAMono).toEqual(false);
});

test("Can check for ballers", () => {
  // Given
  const baller = "4913";
  const notBaller = "1136";

  // When
  const is4913ABaller = isBaller(baller);
  const is1136allerABaller = isBaller(notBaller);

  // Then
  expect(is4913ABaller).toEqual(true);
  expect(is1136allerABaller).toEqual(false);
});

test("Can check for druglords", () => {
  // Given
  const druglord = "5730";
  const notDruglord = "1136";

  // When
  const is5730ADruglord = isDruglord(druglord);
  const is1136ADruglord = isDruglord(notDruglord);

  // Then
  expect(is5730ADruglord).toEqual(true);
  expect(is1136ADruglord).toEqual(false);
});

test("Can check for natties", () => {
  // Given
  const natty = "9512";
  const notNatty = "1136";

  // When
  const is9512ANatty = isNatty(natty);
  const is1136ANatty = isNatty(notNatty);

  // Then
  expect(is9512ANatty).toEqual(true);
  expect(is1136ANatty).toEqual(false);
});
