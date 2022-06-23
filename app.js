let numb = document.querySelector(".swiper-container").children.length;
let getShow = [];
for (i=1; i<= numb; i++){
  getShow[i] = document.getElementsByClassName("show"+i);
}

function hapussemua(){
  for (i=1; i<= numb; i++){
    for(element of getShow[i]){
        element.classList.remove("show"+i)
    }
  }
}

let swiperSlide = [];
let ss = [];
let show = [];
for (i = 1; i <= numb;i++){
  ss[i] = ".ss"+i;
  show[i] = "show"+i;
  swiperSlide[i] = document.querySelector(ss[i]);
}

let canGo = true;
let delay = 600;

let delayleft = function () {
  if (canGo) {
      canGo = false;
      // do whatever you want
      fungsileft();
      setTimeout(function () {
          canGo = true;
      }, delay)
  }
}

function fungsileft(){
  if (swiperSlide[1].classList.contains(show[1])){
    hapussemua();
    swiperSlide[1].classList.add(show[6]);
    swiperSlide[2].classList.add(show[1]);
    swiperSlide[3].classList.add(show[2]);
    swiperSlide[4].classList.add(show[3]);
    swiperSlide[5].classList.add(show[4]);
    swiperSlide[6].classList.add(show[5]);
  } else if (swiperSlide[1].classList.contains(show[2])){
    hapussemua();
    swiperSlide[1].classList.add(show[1]);
    swiperSlide[2].classList.add(show[2]);
    swiperSlide[3].classList.add(show[3]);
    swiperSlide[4].classList.add(show[4]);
    swiperSlide[5].classList.add(show[5]);
    swiperSlide[6].classList.add(show[6]);
  } else if (swiperSlide[1].classList.contains(show[3])){
    hapussemua();
    swiperSlide[1].classList.add(show[2]);
    swiperSlide[2].classList.add(show[3]);
    swiperSlide[3].classList.add(show[4]);
    swiperSlide[4].classList.add(show[5]);
    swiperSlide[5].classList.add(show[6]);
    swiperSlide[6].classList.add(show[1]);
  } else if (swiperSlide[1].classList.contains(show[4])){
    hapussemua();
    swiperSlide[1].classList.add(show[3]);
    swiperSlide[2].classList.add(show[4]);
    swiperSlide[3].classList.add(show[5]);
    swiperSlide[4].classList.add(show[6]);
    swiperSlide[5].classList.add(show[1]);
    swiperSlide[6].classList.add(show[2]);
  } else if (swiperSlide[1].classList.contains(show[5])){
    hapussemua();
    swiperSlide[1].classList.add(show[4]);
    swiperSlide[2].classList.add(show[5]);
    swiperSlide[3].classList.add(show[6]);
    swiperSlide[4].classList.add(show[1]);
    swiperSlide[5].classList.add(show[2]);
    swiperSlide[6].classList.add(show[3]);
  } else if (swiperSlide[1].classList.contains(show[6])){
    hapussemua();
    swiperSlide[1].classList.add(show[5]);
    swiperSlide[2].classList.add(show[6]);
    swiperSlide[3].classList.add(show[1]);
    swiperSlide[4].classList.add(show[2]);
    swiperSlide[5].classList.add(show[3]);
    swiperSlide[6].classList.add(show[4]);
  } 
}

function left() {
  delayleft();
};

let delayright = function () {
  if (canGo) {
      canGo = false;
      // do whatever you want
      fungsileft();
      setTimeout(function () {
          canGo = true;
      }, delay)
  }
}

function fungsiright(){
  if (swiperSlide[1].classList.contains(show[1])){
    hapussemua();
    swiperSlide[1].classList.add(show[2]);
    swiperSlide[2].classList.add(show[3]);
    swiperSlide[3].classList.add(show[4]);
    swiperSlide[4].classList.add(show[5]);
    swiperSlide[5].classList.add(show[6]);
    swiperSlide[6].classList.add(show[1]);
  } else if (swiperSlide[1].classList.contains(show[2])){
    hapussemua();
    swiperSlide[1].classList.add(show[3]);
    swiperSlide[2].classList.add(show[4]);
    swiperSlide[3].classList.add(show[5]);
    swiperSlide[4].classList.add(show[6]);
    swiperSlide[5].classList.add(show[1]);
    swiperSlide[6].classList.add(show[2]);
  } else if (swiperSlide[1].classList.contains(show[3])){
    hapussemua();
    swiperSlide[1].classList.add(show[4]);
    swiperSlide[2].classList.add(show[5]);
    swiperSlide[3].classList.add(show[6]);
    swiperSlide[4].classList.add(show[1]);
    swiperSlide[5].classList.add(show[2]);
    swiperSlide[6].classList.add(show[3]);
  } else if (swiperSlide[1].classList.contains(show[4])){
    hapussemua();
    swiperSlide[1].classList.add(show[5]);
    swiperSlide[2].classList.add(show[6]);
    swiperSlide[3].classList.add(show[1]);
    swiperSlide[4].classList.add(show[2]);
    swiperSlide[5].classList.add(show[3]);
    swiperSlide[6].classList.add(show[4]);
  } else if (swiperSlide[1].classList.contains(show[5])){
    hapussemua();
    swiperSlide[1].classList.add(show[6]);
    swiperSlide[2].classList.add(show[1]);
    swiperSlide[3].classList.add(show[2]);
    swiperSlide[4].classList.add(show[3]);
    swiperSlide[5].classList.add(show[4]);
    swiperSlide[6].classList.add(show[5]);
  } else if (swiperSlide[1].classList.contains(show[6])){
    hapussemua();
    swiperSlide[1].classList.add(show[1]);
    swiperSlide[2].classList.add(show[2]);
    swiperSlide[3].classList.add(show[3]);
    swiperSlide[4].classList.add(show[4]);
    swiperSlide[5].classList.add(show[5]);
    swiperSlide[6].classList.add(show[6]);
  } 
}

function right() {
  delayright();
};

// else if (swiperSlide[1].classList.contains(show[2])){
//   for (i = 1;i <= numb; i++){

//   }
// } else if (swiperSlide[1].classList.contains(show[3])){
//   for (i = 1;i <= numb; i++){

//   }
// } else if (swiperSlide[1].classList.contains(show[4])){
//   for (i = 1;i <= numb; i++){

//   }
// } else if (swiperSlide[1].classList.contains(show[5])){
//   for (i = 1;i <= numb; i++){

//   }
// } else if (swiperSlide[1].classList.contains(show[6])){
//   for (i = 1;i <= numb; i++){

//   }
// }