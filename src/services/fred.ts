export async function getFredLatest(seriesId: string) {
  const res = await fetch(`/api/fred?series=${seriesId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch FRED data");
  }

  const data = await res.json();

  const observations = data.observations || [];
  const latest = observations[observations.length - 1];

  return latest?.value ?? "N/A";
}
