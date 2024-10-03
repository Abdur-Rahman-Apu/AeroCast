export default function getSunriseOrSunsetTime(time) {
  const dateConstructor = new Date(time);
  const date = dateConstructor.toLocaleTimeString().split(":");

  return `${date[0]}:${date[1]}`;
}
