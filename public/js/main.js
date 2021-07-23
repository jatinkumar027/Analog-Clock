const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

setInterval(() => {
  date = new Date();
  htime = date.getHours();
  mtime = date.getMinutes();
  stime = date.getSeconds();

  hRotate = 30 * htime + mtime / 2 + stime / 120;
  mRotate = 6 * mtime + stime / 10;
  sRotate = 6 * stime;

  hourElement.style.transform = `rotate(${hRotate}deg)`;
  minuteElement.style.transform = `rotate(${mRotate}deg)`;
  secondElement.style.transform = `rotate(${sRotate}deg)`;
}, 1000);
