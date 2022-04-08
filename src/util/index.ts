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

export function isValidRadixAddress(address: string): boolean {
  return address.length === 65 && address.indexOf("rdx1") === 0;
}

export async function getOwnedScorps(address: string): Promise<any> {
  const owners = await fetch("https://radstrike.com/scorpions/reserved.json", {
    mode: "no-cors",
  });

  console.log(owners.json());

  return owners.json();
}
