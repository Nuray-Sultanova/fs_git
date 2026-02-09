// const content = document.getElementById("content");

// SetTimeout(() => {
//   content.style.display = "block";
// }, 3000);

// h:s:m

const Saat = () => {
  const date = new Date();
  const clock = document.getElementById("clock");

  let hours = date.getHours();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();

  let h = hours;
  let s = seconds;
  let m = minutes;
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  clock.innerText = `${h}:${m}:${s}`;
  return `${h}:${m}:${s}`;
};

setInterval(() => {
  Saat();
}, 1000);
console.log();

console.log(Saat());
