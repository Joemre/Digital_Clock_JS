const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

const clockCounter = () => {
  let second = new Date().getSeconds();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  clock.innerHTML = `<h1>${hour}.${minute} <sup>${second}</sup></h1>`;
};

const day = () => {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = new Date().getDate();
  let dayname = new Date().getDay();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  date.innerHTML = `<p>${day} <span>${months[month]}</span> ${year}</p> 
<p>${days[dayname - 1]}</p>`;
};

setInterval(clockCounter, 100);
setInterval(day, 1000);
