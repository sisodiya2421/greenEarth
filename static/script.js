const image = document.getElementById("play_image")
var slider = document.getElementById("myRange");
const yearPlaceholder = document.getElementById("year");
var id;
const play_wrapper = document.getElementById("play_wrapper");

let srno = 2048;
let year = 1979;

function play() {
  play_wrapper.innerHTML = `<button type="button" class="btn mt-2" onclick="pauseTimer()"><img src = "../static/pause.png" alt="play" id="play" width="28px" height="28px"/></button>`; 
  id = setInterval(changeImg, 500);
  function changeImg() {
    if (year < 2021){
      image.src = `../static/time_series/${srno}_seaice_${year}_720x360.jpg`;
      yearPlaceholder.innerHTML = year;
      slider.value = year;
      srno = srno + 1;
      year = year + 1;
    }
    else {
      play_wrapper.innerHTML = `<button type="button" class="btn mt-2" onclick="play()"><img src = "../static/play.png" alt="play" id="play" width="28px" height="28px"/></button>`;
      srno = 2048;
      year = 1979;
      clearInterval(id);
    }
  }
};

slider.oninput = function changeslider() {
  yearPlaceholder.innerHTML = this.value;
  image.src = `../static/time_series/${parseInt(this.value) + 69}_seaice_${this.value}_720x360.jpg`;
}

function pauseTimer(){
  play_wrapper.innerHTML = `<button type="button" class="btn mt-2" onclick="play()"><img src = "../static/play.png" alt="play" id="play" width="28px" height="28px"/></button>`;
  clearInterval(id)
}