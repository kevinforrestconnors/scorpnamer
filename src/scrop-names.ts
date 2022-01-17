import {
  getColors,
  getColors2,
  hasAttribute,
  isMono,
  isBaller,
  isDruglord,
} from "./scorp-data";
import Chance from "chance";

const chance = new Chance();

const staticNames = {
  supraPrefixes: ["Dr. ", "Mr. ", "Ms. ", "Mrs. ", "Miss ", "O'"],
  supraSuffixes: [
    "ton",
    "town",
    "smith",
    "maker",
    "craft",
    " jr.",
    " junior",
    " senior",
    ", sr.",
    " the ɪ",
    " the ɪɪ",
    " the ɪɪɪ",
    " the ɪᴠ",
    " the ᴠ",
    ", PhD.",
    ", B.A.",
  ],
  top100us: [
    "James",
    "Mary",
    "Robert",
    "Patricia",
    "John",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Elizabeth",
    "David",
    "Barbara",
    "Richard",
    "Susan",
    "Joseph",
    "Jessica",
    "Thomas",
    "Sarah",
    "Charles",
    "Karen",
    "Christopher",
    "Nancy",
    "Daniel",
    "Lisa",
    "Matthew",
    "Betty",
    "Anthony",
    "Margaret",
    "Mark",
    "Sandra",
    "Donald",
    "Ashley",
    "Steven",
    "Kimberly",
    "Paul",
    "Emily",
    "Andrew",
    "Donna",
    "Joshua",
    "Michelle",
    "Kenneth",
    "Dorothy",
    "Kevin",
    "Carol",
    "Brian",
    "Amanda",
    "George",
    "Melissa",
    "Edward",
    "Deborah",
    "Ronald",
    "Stephanie",
    "Timothy",
    "Rebecca",
    "Jason",
    "Sharon",
    "Jeffrey",
    "Laura",
    "Ryan",
    "Cynthia",
    "Jacob",
    "Kathleen",
    "Gary",
    "Amy",
    "Nicholas",
    "Shirley",
    "Eric",
    "Angela",
    "Jonathan",
    "Helen",
    "Stephen",
    "Anna",
    "Larry",
    "Brenda",
    "Justin",
    "Pamela",
    "Scott",
    "Nicole",
    "Brandon",
    "Emma",
    "Benjamin",
    "Samantha",
    "Samuel",
    "Katherine",
    "Gregory",
    "Christine",
    "Frank",
    "Debra",
    "Alexander",
    "Rachel",
    "Raymond",
    "Catherine",
    "Patrick",
    "Carolyn",
    "Jack",
    "Janet",
    "Dennis",
    "Ruth",
    "Jerry",
    "Maria",
    "Tyler",
    "Heather",
    "Aaron",
    "Diane",
    "Jose",
    "Virginia",
    "Adam",
    "Julie",
    "Henry",
    "Joyce",
    "Nathan",
    "Victoria",
    "Douglas",
    "Olivia",
    "Zachary",
    "Kelly",
    "Peter",
    "Christina",
    "Kyle",
    "Lauren",
    "Walter",
    "Joan",
    "Ethan",
    "Evelyn",
    "Jeremy",
    "Judith",
    "Harold",
    "Megan",
    "Keith",
    "Cheryl",
    "Christian",
    "Andrea",
    "Roger",
    "Hannah",
    "Noah",
    "Martha",
    "Gerald",
    "Jacqueline",
    "Carl",
    "Frances",
    "Terry",
    "Gloria",
    "Sean",
    "Ann",
    "Austin",
    "Teresa",
    "Arthur",
    "Kathryn",
    "Lawrence",
    "Sara",
    "Jesse",
    "Janice",
    "Dylan",
    "Jean",
    "Bryan",
    "Alice",
    "Joe",
    "Madison",
    "Jordan",
    "Doris",
    "Billy",
    "Abigail",
    "Bruce",
    "Julia",
    "Albert",
    "Judy",
    "Willie",
    "Grace",
    "Gabriel",
    "Denise",
    "Logan",
    "Amber",
    "Alan",
    "Marilyn",
    "Juan",
    "Beverly",
    "Wayne",
    "Danielle",
    "Roy",
    "Theresa",
    "Ralph",
    "Sophia",
    "Randy",
    "Marie",
    "Eugene",
    "Diana",
    "Vincent",
    "Brittany",
    "Russell",
    "Natalie",
    "Elijah",
    "Isabella",
    "Louis",
    "Charlotte",
    "Bobby",
    "Rose",
    "Philip",
    "Alexis",
    "Johnny",
    "Kayla",
  ],
  general: [
    "scorp",
    "scrop",
    "guy",
    "fella",
    "cutie",
    "boy",
    "girl",
    "jerk",
    "sting",
  ],
  smokers: [
    "smoke",
    "smokey",
    "smoker",
    "ash",
    "burn",
    "hot",
    "cloud",
    "cough",
    "marlboro",
    "camel",
    "parliament",
    "menthol",
    "clove",
    "spliff",
    "filter",
    "roll",
    "puff",
    "hit",
    "pyro",
    "burno",
  ],
  halo: [
    "divine",
    "revered",
    "worshipper",
    "holy",
    "pious",
    "god",
    "religious",
    "crown",
    "ring",
    "halo",
    "sacred",
  ],
  ballers: [
    "baller",
    "ball",
    "balsy",
    "boxer",
    "tripod",
    "bag",
    "round",
    "circle",
    "maraca",
    "maracas",
    "16",
  ],
  druglords: [
    "dealer",
    "plug",
    "drug",
    "druggie",
    "stoner",
    "needle",
    "addict",
    "addiction",
    "user",
    "pill",
    "serum",
    "hormone",
    "high",
    "crazy",
    "bender",
    "intoxicated",
    "detox",
    "toxic",
    "euphoric",
    "whippet",
    "acid",
  ],
  monos: [
    "color",
    "palette",
    "monochrome",
    "el monocromo",
    "paint",
    "pigment",
    "pig",
    "artist",
    "focused",
    "solo",
    "mono",
    "boring",
    "simple",
    "stylish",
    "plain",
    "muted",
    "embossed",
    "boss",
    "stamp",
    "49",
  ],
  striped: ["stripe", "stripey", "zebra", "bee", "rib"],
  claws_unique: [
    "unbalanced",
    "lefty",
    "righty",
    "left",
    "right",
    "ambi",
    "handy",
    "hands",
    "handsy",
  ],
  claw_big: [
    "big",
    "huge",
    "massive",
    "gigantic",
    "macro",
    "giga",
    "mega",
    "tera",
    "tiny",
    "mini",
    "strong",
    "heavy",
    "tank",
    "body",
    "power",
    "wow",
    "chad",
  ],
  claw_missing: [
    "lacking",
    "gone",
    "invisible",
    "imaginary",
    "fake",
    "faux",
    "missing",
  ],
  boxers: ["ball", "boxer", "puncher", "punching bag"],
  mushies: [
    "shroom",
    "shiitake",
    "mushroom",
    "fungi",
    "fungus",
    "mycologist",
    "growth",
    "truffle",
    "poison",
    "toxic",
    "chanterelle",
    "enoki",
    "morel",
    "puffball",
    "cloud",
    "oyster",
    "magic",
    "lobster",
    "baby bell",
    "fairy",
    "champignon",
    "musho",
  ],
  edwards: [
    "choppy",
    "slice",
    "dice",
    "chopper",
    "slicer",
    "dicer",
    "cutter",
    "cut",
    "scissor",
    "scissors",
    "edward",
    "scissorhands",
    "chip chop",
  ],
  evil_eyes: [
    "crossed",
    "eyes",
    "evil",
    "monster",
    "anger",
    "stern",
    "scared",
    "angry",
    "scary",
    "face",
    "stare",
    "medusa",
    "gargoyle",
    "mirror",
    "doom",
  ],
  bloody_tails: [
    "bloody",
    "blood",
    "bleeding",
    "wounded",
    "wound",
    "injured",
    "injury",
    "fire",
    "dragon",
    "burning",
    "torch",
  ],
  white_outlines: [
    "ghost",
    "casper",
    "white",
    "snowy",
    "transparent",
    "phantom",
    "ghoul",
    "ghastly",
    "haunt",
    "boo",
  ],
  blind: [
    "blind",
    "vision",
    "eye",
    "seeing",
    "seer",
    "nearsighted",
    "braille",
    "glasses",
    "monk",
    "window",
  ],
  syringe_tails: ["pokey", "poke"],
  fat_tails: ["dino", "fatty", "biggie", "big butt"],
  ball_tails: ["ball and chain", "smallball", "chomp chomp"],
  missing_tails: [
    "tail",
    "no",
    "gone",
    "stump",
    "stumpy",
    "tailbone",
    "missing",
  ],
  stubby_legs: ["stubby", "slow", "stump", "amputee", "dwarf"],
  insect_legs: [
    "insect",
    "buzz",
    "fly",
    "mosquito",
    "bzz",
    "bee",
    "cricket",
    "roach",
    "bug",
    "bugged",
    "art",
    "ant",
    "louse",
    "lice",
  ],
  skinny_legs: ["svelte", "skinny", "petite", "lil'"],
  fat_legs: [
    "fatty",
    "never skips leg day",
    "leg day",
    "squatter",
    "slowpoke",
    "hard to knock over",
    "stomp",
    "stompy",
  ],
};

const getAffixes = (scorpId: string): string[] => {
  let names: string[] = [];

  getColors2(scorpId, 15).forEach((color) => {
    names.push(color);
  });

  if (
    hasAttribute(scorpId, "has_cigarette", true) ||
    hasAttribute(scorpId, "has_matches", true)
  ) {
    names = names.concat(staticNames.smokers);
  }
  if (hasAttribute(scorpId, "has_halo", true)) {
    names = names.concat(staticNames.halo);
  }
  if (isBaller(scorpId)) {
    names = names.concat(staticNames.ballers);
  }
  if (isDruglord(scorpId)) {
    names = names.concat(staticNames.druglords);
  }
  if (isMono(scorpId)) {
    names = names.concat(staticNames.monos);
  }
  if (hasAttribute(scorpId, "multicolor_type", "stripes")) {
    names = names.concat(staticNames.striped);
  }
  if (hasAttribute(scorpId, "claws_unique", true)) {
    names = names.concat(staticNames.claws_unique);
  }
  if (
    hasAttribute(scorpId, "claw_left", "big") ||
    hasAttribute(scorpId, "claw_right", "big")
  ) {
    names = names.concat(staticNames.claw_big);
  }
  if (
    hasAttribute(scorpId, "claw_left", "missing") ||
    hasAttribute(scorpId, "claw_right", "missing")
  ) {
    names = names.concat(staticNames.claw_missing);
  }
  if (
    hasAttribute(scorpId, "claw_left", "ball") ||
    hasAttribute(scorpId, "claw_right", "ball")
  ) {
    names = names.concat(staticNames.boxers);
  }
  if (
    hasAttribute(scorpId, "claw_left", "mushroom") ||
    hasAttribute(scorpId, "claw_right", "mushroom")
  ) {
    names = names.concat(staticNames.mushies);
  }
  if (
    hasAttribute(scorpId, "claw_left", "scissors") ||
    hasAttribute(scorpId, "claw_right", "scissors")
  ) {
    names = names.concat(staticNames.edwards);
  }
  if (
    hasAttribute(scorpId, "evil_eye", "blue") ||
    hasAttribute(scorpId, "evil_eye", "red")
  ) {
    names = names.concat(staticNames.evil_eyes);
  }

  if (hasAttribute(scorpId, "outline_type", "white")) {
    names = names.concat(staticNames.white_outlines);
  }
  if (hasAttribute(scorpId, "no_eyes", true)) {
    names = names.concat(staticNames.white_outlines);
  }
  if (hasAttribute(scorpId, "tail", "missing")) {
    names = names.concat(staticNames.missing_tails);
  }
  if (hasAttribute(scorpId, "tail", "syringe")) {
    names = names.concat(staticNames.syringe_tails);
  }
  if (hasAttribute(scorpId, "tail", "fat")) {
    names = names.concat(staticNames.fat_tails);
  }
  if (hasAttribute(scorpId, "tail", "ball")) {
    names = names.concat(staticNames.ball_tails);
  }
  if (hasAttribute(scorpId, "bloody_tail", true)) {
    names = names.concat(staticNames.bloody_tails);
  }
  if (hasAttribute(scorpId, "legs", "stubby")) {
    names = names.concat(staticNames.stubby_legs);
  }
  if (hasAttribute(scorpId, "legs", "skinny")) {
    names = names.concat(staticNames.skinny_legs);
  }
  if (hasAttribute(scorpId, "legs", "insect")) {
    names = names.concat(staticNames.insect_legs);
  }
  if (hasAttribute(scorpId, "legs", "fat")) {
    names = names.concat(staticNames.fat_legs);
  }

  return names;
};

const prefixes = (scorpId: string): string[] => {
  let names = getAffixes(scorpId);

  // Color names from getColors
  Object.values(getColors(scorpId)).forEach((color) => {
    if (color.includes(" ")) {
      names.push(color.split(" ")[0]);
      names.push(color.split(" ")[0]);
      names.push(color.split(" ")[0]);
      names.push(color.split(" ")[1]);
    } else {
      names.push(color);
    }
  });

  return names;
};

const suffixes = (scorpId: string): string[] => {
  let names = getAffixes(scorpId);

  // Color names from getColors
  Object.values(getColors(scorpId)).forEach((color) => {
    if (color.includes(" ")) {
      names.push(color.split(" ")[1]);
      names.push(color.split(" ")[1]);
      names.push(color.split(" ")[1]);
      names.push(color.split(" ")[0]);
    } else {
      names.push(color);
    }
  });

  return names;
};

const mains = (scorpId: string): string[] => {
  const names: string[] = [];

  // Color names from getColors
  Object.values(getColors(scorpId)).forEach((color: string) => {
    if (!color.includes(" ")) {
      names.push(color);
    }
  });

  // Color names from getColors2
  getColors2(scorpId, 30).forEach((color) => {
    names.push(color);
  });

  return names.concat(staticNames.top100us).concat(staticNames.general);
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

  for (let i = 0; i < numPrefixes; i++) {
    result += `${chance.pickone(p1Opts)} `;
  }

  result += `${chance.pickone(p2Opts)} `;

  for (let i = 0; i < numSuffixes; i++) {
    result += `${chance.pickone(p3Opts)} `;
  }

  result = result.trim();

  if (Math.random() > 0.9) {
    result = chance.pickone(staticNames.supraPrefixes) + result;
  }

  if (Math.random() > 0.95) {
    result = result + chance.pickone(staticNames.supraSuffixes);
  }

  result = result.trim().toLowerCase();

  return result.length > 64 ? generateName(scorpId) : result;
}
