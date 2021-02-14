const btn = document.querySelector("button");
const image = document.getElementById("play_image")

let srno = 2049;
let year = 1980;
let interval = null
btn.addEventListener("click", () => {
    interval = setInterval(changeImg(), 500);
});

const changeImg = () => {
    if (year < 2021) {
      image.src = `../static/time_series/${srno}_seaice_${year}_720x360.jpg`;
      srno = srno + 1;
      year = year + 1;
    }
    else {
      clearInterval(interval);
    }
};