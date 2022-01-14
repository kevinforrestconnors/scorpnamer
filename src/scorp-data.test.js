import { getScorpMetadata, getRarity, getColors } from "./scorp-data";

test("Can fetch attributes of a scorp", () => {
  // Given
  const scorpId = 1136;
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
  const result = getScorpMetadata(`${scorpId}`);

  // Then
  expect(result).toEqual(expectedOutput);
});

test("Can compute scorp rarity", () => {
  // Given
  const scorpId = 1136;
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
  const result = getRarity(`${scorpId}`);

  // Then
  expect(result).toEqual(expectedOutput);
});

test("Can name scorp colors", () => {
  // Given
  const scorpId = 1136;
  const expectedOutput = {
    outline_color: "Black",
    body_color: "Spring Green",
    eye_color: "Spring Green",
    bg_color: "Blue",
    bg2_color: "Jungle Green",
    secondary_color: "Pale Canary",
  };

  // When
  const result = getColors(`${scorpId}`);

  // Then
  expect(result).toEqual(expectedOutput);
});
