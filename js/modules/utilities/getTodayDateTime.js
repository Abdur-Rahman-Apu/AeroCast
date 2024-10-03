function getTodayDate() {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateConstructor = new Date();

  const date = dateConstructor.toLocaleDateString().split("/");

  const actualMonth = month[date[0] - 1];
  const actualDate = date[1];

  return `${actualMonth} ${actualDate}`;
}

const getCurrentTime = () => {
  const dateConstructor = new Date();
  const date = dateConstructor.toLocaleTimeString().split(":");

  const timeIndicator = date[date.length - 1].split(" ")[1];

  return `${date[0]}:${date[1]} ${timeIndicator}`;
};

export { getCurrentTime, getTodayDate };
