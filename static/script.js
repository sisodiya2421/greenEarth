const image = document.getElementById("play_image")

function play() {
  let srno = 2048;
  let year = 1979; 
  var id = setInterval(changeImg, 500);
  function changeImg() {
    if (year < 2021){
      image.src = `../static/time_series/${srno}_seaice_${year}_720x360.jpg`;
      srno = srno + 1;
      year = year + 1;
    }
    else {
      clearInterval(id);
    }
  }
};