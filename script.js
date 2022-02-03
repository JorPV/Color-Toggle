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


// I tried to use the "mouseout" event by calling this function, but then it closed once
// I hover out of the img, and not being possible to select a color from the dropdown menu.

/*function hide(){
  let getUl = document.querySelector(".menu ul");

  if (toggleNavStatus == true) {
    getUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};

toggleMenu.addEventListener("mouseout", hide);


//Here I was trying to get the color on the console and replace it by the previous one
// but I couldn't find out how to do it.

let colorPicked = document.getElementsByTagName('li');
Array.from('colorPicked').forEach(function(item){
  console.log(item);
}); 

colorPicked.addEventListener("click", () => {
  let color = document.getElementsByName('backgroundColor');
  color.forEach((backgroundColor) => {
    if (backgroundColor.checked) {
      console.log('${backgroundColor.class}');
    }
  })
  });
*/

// To assing events to the keyboard key numbers, I created this function. I could 
// call the function using the "onkeypress="return keySwitch(event)" on an <input> tag
// and it worked, but if I used it on the <li> tag it didn't work. 

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


