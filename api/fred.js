export default async function handler(req, res) {
  const apiKey = process.env.FRED_API_KEY;

  const series = req.query.series;

  const url =
    `https://api.stlouisfed.org/fred/series/observations?series_id=${series}&api_key=${apiKey}&file_type=json`;

  try {
    const r = await fetch(url);
    const data = await r.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
