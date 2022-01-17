export type OutlineType = "black" | "dark" | "light" | "white";
export type BackgroundStyle = "blank" | "frame" | "star" | "circle" | "square";
export type Claw =
  | "regular"
  | "big"
  | "missing"
  | "ball"
  | "mushroom"
  | "scissors";
export type Legs = "stubby" | "insect" | "skinny" | "normal";
export type Tail = "normal" | "syringe" | "fat" | "ball" | "missing";
export type MultiColorType = "none" | "stripes" | "solid";
export type FalseFace = "none" | "tepid" | "frown" | "smile";
export type EvilEye = "evil_eye" | "none" | "blue" | "red";

export type AllAttributeValues =
  | OutlineType
  | BackgroundStyle
  | Claw
  | Legs
  | Tail
  | MultiColorType
  | FalseFace
  | EvilEye;

export type AllAttributeNames = keyof Attributes;

export type Attributes = {
  outline_type: OutlineType;
  bg_style: BackgroundStyle;
  claw_left: Claw;
  claw_right: Claw;
  has_cigarette: boolean;
  legs: Legs;
  tail: Tail;
  bloody_tail: boolean;
  has_matches: boolean;
  has_halo: boolean;
  multicolored: boolean;
  colored_claws: boolean;
  colored_core: boolean;
  colored_tail: boolean;
  multicolor_type: MultiColorType;
  false_face: FalseFace;
  evil_eye: EvilEye;
  no_eyes: boolean;
  claws_unique: boolean;
};

export type AttributeData = {
  occurances: number;
  rarity: "string";
};

type StringBool = "true" | "false";

export type AttributeStats = {
  outline_type: Partial<{ [key in OutlineType]: AttributeData }>;
  bg_style: Partial<{ [key in BackgroundStyle]: AttributeData }>;
  claw_left: Partial<{ [key in Claw]: AttributeData }>;
  claw_right: Partial<{ [key in Claw]: AttributeData }>;
  has_cigarette: Partial<{ [key in StringBool]: AttributeData }>;
  legs: Partial<{ [key in Legs]: AttributeData }>;
  tail: Partial<{ [key in Tail]: AttributeData }>;
  bloody_tail: Partial<{ [key in StringBool]: AttributeData }>;
  has_matches: Partial<{ [key in StringBool]: AttributeData }>;
  has_halo: Partial<{ [key in StringBool]: AttributeData }>;
  multicolored: Partial<{ [key in StringBool]: AttributeData }>;
  colored_claws: Partial<{ [key in StringBool]: AttributeData }>;
  colored_core: Partial<{ [key in StringBool]: AttributeData }>;
  colored_tail: Partial<{ [key in StringBool]: AttributeData }>;
  multicolor_type: Partial<{ [key in MultiColorType]: AttributeData }>;
  false_face: Partial<{ [key in FalseFace]: AttributeData }>;
  evil_eye: Partial<{ [key in EvilEye]: AttributeData }>;
  no_eyes: Partial<{ [key in StringBool]: AttributeData }>;
  claws_unique: Partial<{ [key in StringBool]: AttributeData }>;
};

export type RarityProfile = {
  rarity: number;
  rareTraits: Partial<AttributeStats>;
};

export type Colors = {
  outline_color: string;
  body_color: string;
  eye_color: string;
  bg_color: string;
  bg2_color: string;
  secondary_color: string;
};

export type ScorpMetadata = {
  image: string;
  image_large: string;
  attributes: Attributes;
  colors: Colors;
};
