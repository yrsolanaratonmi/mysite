function diffDates() {
  let day_1 = new Date();
  const day_2 = new Date("February 24, 2022 01:30:00");
  let years = (day_1 - day_2) / (1000 * 3600 * 24 * 365)
  let days = (day_1 - day_2) / (1000 * 3600 * 24) - ((Math.floor(years)) * 365)
  let hours = (days - Math.floor(days)) * 24
  let mins = (hours - Math.floor(hours)) * 60;
  let secs = Math.floor((mins - Math.floor(mins)) * 60);
  years = Math.floor(years)
  days = Math.floor(days);
  hours = Math.floor(hours);
  mins = Math.floor(mins);
  b = (
    `Война идет уже ${years} years, ${days} days, ${hours} hours, ${mins} minutes and ${secs} seconds`
  );
  document.getElementById("1").innerHTML = b

a = setInterval(() => {
  diffDates();
}, 1000);

  
}

