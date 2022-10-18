const generateDigitalClockUTCAsString = (utc, cityName) => {
  const date = new Date();
  date.setHours(date.getHours() + date.getTimezoneOffset() / 60 + utc);
  return `The time in ${cityName} is ${padTime(date.getHours())}:${padTime(
    date.getMinutes()
  )}:${padTime(date.getSeconds())}`;
};

const padTime = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

setInterval(() => {
  console.log(generateDigitalClockUTCAsString(2, "Ghent"));
}, 1000);
