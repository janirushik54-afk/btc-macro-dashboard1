const API_KEY = import.meta.env.VITE_FRED_API_KEY;

export async function getFredLatest(seriesId: string) {
  const url =
    `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}` +
    `&api_key=${API_KEY}` +
    `&file_type=json`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch FRED data");
  }

  const data = await res.json();
  const observations = data.observations || [];
  const latest = observations[observations.length - 1];

  return latest?.value ?? "N/A";
}
