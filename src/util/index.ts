export function scropEasterEgg(baseWord: 'scorp' | 'Scorp' | 'scorpion' | 'Scorpion'): string {
  if (Math.random() > 0.99) {
    switch (baseWord) {
      case 'scorp':
        return 'scrop'
      case 'Scorp':
        return 'Scrop'
      case 'scorpion':
        return 'scropion'
      case 'Scorpion':
        return 'Scropion'
    }
  }
  return baseWord
}

export function isValidRadixAddress(address: string): boolean {
  return address.length === 65 && address.indexOf('rdx1') === 0
}

export async function getOwnedScorps(address: string): Promise<any> {
  const owners = await fetch('https://radstrike.com/scorpions/reserved.json', {
    mode: 'no-cors',
  })

  return owners.json()
}

export function deltaE(rgbA: [number, number, number], rgbB: [number, number, number]) {
  let labA = rgb2lab(rgbA)
  let labB = rgb2lab(rgbB)
  let deltaL = labA[0] - labB[0]
  let deltaA = labA[1] - labB[1]
  let deltaB = labA[2] - labB[2]
  let c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2])
  let c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2])
  let deltaC = c1 - c2
  let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH)
  let sc = 1.0 + 0.045 * c1
  let sh = 1.0 + 0.015 * c1
  let deltaLKlsl = deltaL / 1.0
  let deltaCkcsc = deltaC / sc
  let deltaHkhsh = deltaH / sh
  let i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh
  return i < 0 ? 0 : Math.sqrt(i)
}

function rgb2lab(rgb: [number, number, number]) {
  let r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255,
    x,
    y,
    z
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92
  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)]
}

export function hexToRgb(hexCode: string): [number, number, number] {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexCode)
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0]
}

function randomIntFromRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function pickRandom(array: any[]) {
  return array[randomIntFromRange(0, array.length - 1)]
}

export function tagline(): string {
  if (Math.random() > 0.1) {
    return `Your one stop shop for Abandoned Scorpion tools and fan content`
  }

  return pickRandom([
    `Lol a blue chip? An nft which is one of 10000 pixelated ${scropEasterEgg(
      'scorpion'
    )}s in a network that hasn’t proved itself? I’m insanely bullish in Radix, but c’mon. /cmon`,
    `A heaping trash fire of code stapled together with Elmer's glue and love`,
    `Abandoned Scorpion's only fan site`,
    `Your one stop shop to scrop that scrop`,
    `Your one stop shop for Abandoned Scorpion tools and fan content`,
    `A weird corner of the internet`,
    `Full of surprises`,
    `A bundle of joy`,
    `The official unofficial site for Abandoned ${scropEasterEgg('Scorpion')}s`,
    `Now accepting offers for banner ads!`,
    `Why stake when you can buy one of 10000 pixelated ${scropEasterEgg(
      'scorpion'
    )}s in a network that hasn’t proved itself?`,
    `I'm insanely bullish`,
    `I've got scrop-fever!`,
    `"I love it!" - user review`,
    `"The UI looks like 5 different people designed it, and it's super slow" - enthralled user`,
    `He really spends his time writing taglines like this instead of valuable work?  c'mon...`,
    `c'mon`,
    `Sales are really slowing down lately`,
    `1 of 1 blood pool`,
    `Check out the scorpion generator!`,
    `They sting!`,
    `BREAKING: Abandoned ${scropEasterEgg('Scorpion')}s DAO purchases the Scottsdale ${scropEasterEgg(
      'Scorpion'
    )}s in $23m deal!`,
    `3m sales pre-babylon!`,
    `Abandoned ${scropEasterEgg('Scorpion')}s: 1st Radix NFT project to sell out!`,
    `"anyone selling a bloody edward?"`,
    `wtb mono`,
    `anyone selling halos?`,
    `anyone selling ciggies?`,
    `anyone selling matches?`,
    `anyone selling monos?`,
    `wtb psuedo natty`,
    `"this natty has radix colors, 14k XRD"`,
    `"there are only 16 scorpions with a syringe and a blue evil eye"`,
    `"anyone know who the evil eye whale is??"`,
    `"/scroplife"`,
    `"a missing tail baby is a frog"`,
    `"big claw missing tail should be called elephants"`,
    `"it's not a psuedo if you can tell the difference"`,
    `"these seem overpriced"`,
    `"There are only 4 with Scissor/Skinny Leg/Syringe Tail"`,
    `"There are only two with nonblack (both are dark outline)"`,
    `"Bro  are  there only like 6 halos ?"`,
    `"There are only like 2 halos I’m interested in"`,
    `"I guess thats a bit of the issue with ballers - even though they are crazy rare and definitely belong in the top scorps, the community cant really be form like halos or ciggis as there are just not enough on the market and some people own 2 :D"`,
    `"i am actually shocked at how balanced people's feelings on them are. i hope i can accomplish that with my game, it would be nice if there are no items/weapons that absolutely nobody cares for"`,
    `"Just woke up. Here is my explanation about the sniping incident.

Yes, I did snipe that scrop, but not out of malicious intention. Please allow me to explain myself. 

That day I was checking out different NFTs projects. Never really looked deep into the scrops, so I went on the abandoned scrops website, checked out the scrops, had the idea of getting one and read the instructions page. 

I then opened the address in radix explorer, checking out how the trading really works, then I found the "trading 4962 for 10 xrd" transaction sitting there for half a day without any buyer.

I thought that was strange, so I went to this trading group, see if there is anyone trying to sell/buy the same scrop, there was none. That made it even more weird because no one mentioned it in the group. 

I thought that was some sort of "secret egg hunting giveaway" type of thing where if you find enough clues on the blockchain, you will be rewarded. (Has happened before to me so i thought this was the same case). 

So I sent a matching transaction "trading 10 xrd for 4962". One day later(yesterday), I received it. I was, of course, super happy. At that time I still thought it was a giveaway game. 

I sent a message to the original owner:
"Dear stranger, thank you so much for your scorp. I will invest the profit from it into other projects. Wait for me, one day I will send you back some money. Wish me luck. Thank you too."

You can see at that point I still thought it was some strangers doing giveaways. So I took the scrop and tried to sell it in this group. My plan was to make a profit first, send part of the profit back to the owner, then use the remaining profit to reinvest into other projects. And if i manage to make more profit, I will send part of it back to the owner again, becasue at the end of the day it's their scrop that made these profit.

I was so confident that it was a giveaway without realizing that i just sniped it. It was my fault and only could be my fault. Dear owner, please message me so I can send you back your scrop. I am extremely sorry for my stupid behaviour. Sorry.

I don't wish everyone to believe my explanation because I admit, believing that it was a giveaway was EXYREMELY STUPID.
It all happened in a short time so I wasn't aware that "malicious sniping" was a thing. The only evidence I have is the message that I sent, you can tell I was excited and thankful. 

Nevertheless, I am extremely sorry for any damage that I caused, both to the owner and the community. This was unacceptable and I was very wrong. Sorry. I know I'm untrusted now and there is nothing that I can do. I can only tell my side of the story and hopefully be forgiven. @korone_stan are you the owner of the scrop?"`,
    `"Selling this Evil Boxer on Steroids for 10k XRD. There are 42 scorpions with ball hand + syringe AND only 20 with ball hand + evil eye, so it's a rare combination."`,
    `"by the way: There are only 7 blind boxer out there!"`,
    `"There are only 3 boxer monos so"`,
    `"IMO there are only 4 continents"`,
    `"I think there are only 11 unique claw / missing tails. This is a stupid good deal based soley off rarity."`,
    `"i'd say faces are really really slept on for some reason. very good value there!"`,
    `"One of a kind scorp. There are only 6 striped-clawed bowlers in the entire scorp collection, only 4 of them have a big claw and only one of them is right handed - this guy"`,
    `"DM @cryptosoundie for halo - 35000 XRD"`,
    `"by that point i will likely not give a shit lmao"`,
    `"I am not a fan of druglords but think they are significantly more valuable than the fury boxers. I am not biased as I don't own any lol."`,
    `"20,000 tenges for the scorpion"`,
    `"I have to go fix the fans"`,
    `"Lol after you said 1.5k and then again 1.7k. And appears you do this to everyone is why I decided to speak up.."`,
    `"A cardinal sin lol, the deal that I broke was about to sell cigy for 2k when the market price is 3k, and before sent transaction to scorp wallet I called it off.. Left sour taste on everyone lol, but yea from there I learn more."`,
    `Mr. Jiggles`,
    `shitblob`,
    `I'm confused`,
    `"Welcome!"`,
    `"Have a great day!"`,
  ])
}
