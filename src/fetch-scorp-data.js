import cheerio from "cheerio";

export async function getScropInfo(scorpId) {
  const url = `https://crossorigin.me/https://radstrike.com/scorpions/info/?number=${scorpId}`;

  try {
    const response = await fetch(url, { mode: "no-cors" })
      .then((d) => d.text())
      .then((d) => console.log(d));
    const body = await response.text();

    const $ = cheerio.load(body);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
  return 5;
}
