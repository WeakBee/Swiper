let numb = document.querySelector(".swiper-container").children.length;
let getShow = [];
let getCShow = [];
for (i=1; i<= numb; i++){
  getShow[i] = document.getElementsByClassName("show"+i);
  getCShow[i] = document.getElementsByClassName("cshow"+i);
}

function hapussemua(){
  for (i=1; i<= numb; i++){
    for(element of getShow[i]){
      element.classList.remove("show"+i)
    }
    for(element of getCShow[i]){
      element.classList.remove("cshow"+i)
  }
  }
}

let swiperSlide = [];
let contentSwipper = [];
let show = [];
let cshow = [];
for (i = 1; i <= numb;i++){
  show[i] = "show"+i;
  cshow[i] = "cshow"+i;
  swiperSlide[i] = document.querySelector(".ss"+i);
  contentSwipper[i] = document.querySelector(".cs"+i);
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
  for (i=0; i < numb; i++){
    let f = 1 + i;
    let d = numb+1;
    let e = d - (i);
    if (e == d){
      e = e-numb;
    }
    if (swiperSlide[1].classList.contains(show[f])){
    hapussemua();
    for (i=1; i<=numb;i++){
      let c = numb - e;
      let a = i + c;
      if (a > numb){
        a = a - numb;
      }
      swiperSlide[i].classList.add(show[a]);
      contentSwipper[i].classList.add(cshow[a]);
    }
    }
  }
}

function left() {
  delayleft();
};

let delayright = function () {
  if (canGo) {
      canGo = false;
      // do whatever you want
      fungsiright();
      setTimeout(function () {
          canGo = true;
      }, delay)
  }
}

function fungsiright(){
  for (i=1; i <= numb; i++){
    let d = i;
    if (swiperSlide[1].classList.contains(show[d])){
      hapussemua();
      for (i=1; i<=numb;i++){
        let b = i + d;
        if (b > numb){
          c = b - numb;
        } else {
          c = b;
        }
        swiperSlide[i].classList.add(show[c]);
        contentSwipper[i].classList.add(cshow[c]);
      }
    }
  }
}

function right() {
  delayright();
};

if (window.matchMedia("(max-width: 992px)").matches) {

} else {
  // ONCLICK
let fungsiklik = [];
for (i=1; i<=numb; i++){
  fungsiklik = function (e) {
    for(i=1; i<= numb; i++){  
      let a = i + e;
      if (a > numb){
        b = a - numb;
      } else {
        b = a;
      }
      swiperSlide[i].classList.add(show[b]);
      contentSwipper[i].classList.add(cshow[b]);
    }
  }
}
function klik(e){
  hapussemua();
  for (i=1; i<=numb; i++){
    let x = e - 2;
    let klikvar = x;
    if (e == 1){
      fungsiklik(1);
    } else if (e == 2) {
      fungsiklik(0);
    } else if (e == e) {
      fungsiklik(numb - klikvar);
    } 
  }
}
}