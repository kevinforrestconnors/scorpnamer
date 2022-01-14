import fetch from "node-fetch";
import cheerio from "cheerio";

export async function getScropInfo(scorpId) {
  const url = `https://radstrike.com/scorpions/info/?number=${scorpId}`;

  const response = await fetch(url);
  const body = await response.text();

  const $ = cheerio.load(body);
  console.log(response);

  return 5;
}
