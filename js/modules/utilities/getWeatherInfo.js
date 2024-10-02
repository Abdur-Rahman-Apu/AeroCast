export default async function getWeatherInfo(url) {
  const res = await fetch(url);
  const result = await res.json();
  return result;
}
