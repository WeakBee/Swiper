let show1=document.getElementsByClassName("show1");
let show2=document.getElementsByClassName("show2");
let show3=document.getElementsByClassName("show3");
let show4=document.getElementsByClassName("show4");
let show5=document.getElementsByClassName("show5");
let show6=document.getElementsByClassName("show6");

function hapussemua(){
    for(element of show1){
        element.classList.remove("show1")
    }
    for(element of show2){
      element.classList.remove("show2")
    }
    for(element of show3){
      element.classList.remove("show3")
    }
    for(element of show4){
      element.classList.remove("show4")
    }
    for(element of show5){
      element.classList.remove("show5")
    }
    for(element of show6){
      element.classList.remove("show6")
    }
}

let numb = document.querySelector(".swiper-container").children.length;
let swiperSlide = [];
let ss = [];
let show = [];
for (i = 1; i <= numb;i++){
  ss[i] = ".ss"+i;
  show[i] = "show"+i;
  swiperSlide[i] = document.querySelector(ss[i]);
}

function left() {
    if (swiperSlide[1].classList.contains(show[1])){
        for (i = 1;i <= numb; i++){
            if(i == 1){
                swiperSlide[i].classList.add(show[numb]);
            } else{
                swiperSlide[i].classList.add(show[i-1]);
            }
        }
        hapussemua();
    } else if (swiperSlide[1].classList.contains(show[2])){
        for (i = 1;i <= numb; i++){

        }
    } else if (swiperSlide[1].classList.contains(show[3])){
        for (i = 1;i <= numb; i++){

        }
    } else if (swiperSlide[1].classList.contains(show[4])){
        for (i = 1;i <= numb; i++){

        }
    } else if (swiperSlide[1].classList.contains(show[5])){
        for (i = 1;i <= numb; i++){

        }
    } else if (swiperSlide[1].classList.contains(show[6])){
        for (i = 1;i <= numb; i++){

        }
    }
};