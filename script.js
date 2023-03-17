let toggleNavStatus = false;
let menu = document.querySelector(".menu")
const toggleMenu = document.querySelector("#icon-menu");

let bgrColor = document.querySelector(".main-background");
let greybg = document.querySelector(".grey");
let redbg = document.querySelector(".red");
let orangebg = document.querySelector(".orange");
let purplebg = document.querySelector(".purple");
let greenbg = document.querySelector(".green");

function popUp (){
  let getUl = document.querySelector(".menu ul");
  let getLi = document.querySelectorAll(".menu li");

  if (toggleNavStatus === false) {
    getUl.style.visibility = "visible";

    let arrayLength = getLi.length;
    for (let i = 0; i < arrayLength; i++) {
      getLi[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } 

  else if (toggleNavStatus == true) {
    getUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

toggleMenu.addEventListener("mouseover", popUp);

greybg.addEventListener("click", function() {
  popUp();
  bgrColor.style.background = "#f1f1f1";
  console.log('Home, you have not select any color');
});

redbg.addEventListener("click", function() {
  popUp();
  bgrColor.style.background = "red";
  console.log('Your background color is '+ redbg.className);
});

orangebg.addEventListener("click", function () {
  popUp();
  bgrColor.style.background = "orange";
  console.log('Your background color is '+ orangebg.className);
});

purplebg.addEventListener("click", function () {
  popUp();
  bgrColor.style.background = "purple";
  console.log('Your background color is '+ purplebg.className);
});

greenbg.addEventListener("click", function () {
  popUp();
  bgrColor.style.background = "green";
  console.log('Your background color is '+ greenbg.className);
});

// To assing events to the keyboard key numbers, I created this function. 
function keySwitch(data){
  if(data.keyCode == 49){
    bgrColor.style.background = "#f1f1f1";
    console.log('You are at the home page');
  }else if(data.keyCode == 50){
  bgrColor.style.background = "red";
  console.log('Your background color is '+ redbg.className);
  }else if(data.keyCode == 51){
    bgrColor.style.background = "orange";
    console.log('Your background color is '+ orangebg.className);
  }else if(data.keyCode == 52){
    bgrColor.style.background = "purple";
    console.log('Your background color is '+ purplebg.className);
  }else if(data.keyCode == 53){
    bgrColor.style.background = "green";
    console.log('Your background color is '+ greenbg.className);
    return false;
  }
};


