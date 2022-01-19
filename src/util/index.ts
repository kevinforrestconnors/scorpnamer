export function scropEasterEgg(
  baseWord: "scorp" | "Scorp" | "scorpion" | "Scorpion"
): string {
  if (Math.random() > 0.99) {
    switch (baseWord) {
      case "scorp":
        return "scrop";
      case "Scorp":
        return "Scrop";
      case "scorpion":
        return "scropion";
      case "Scorpion":
        return "Scropion";
    }
  }
  return baseWord;
}
