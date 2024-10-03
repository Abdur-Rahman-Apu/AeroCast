export default function getSunriseOrSunsetTime(time) {
  const dateConstructor = new Date(time);
  console.log(dateConstructor.toLocaleTimeString());
  const date = dateConstructor.toLocaleTimeString().split(":");

  return `${date[0]}:${date[1]}`;
}
