//import cheerio from "cheerio";

export async function getScropInfo(scorpId) {
  const url = `https://crossorigin.me/https://radstrike.com/scorpions/info/?number=${scorpId}`;

  try {
    const response = await fetch(url);
    const body = await response.text();

    //const $ = cheerio.load(body);
    console.log(body);
  } catch (err) {
    console.error(err);
  }
  return 5;
}
