
const burgerButton = document.querySelector(".burger");
const headerListUL = document.querySelector(".header-list");
var counter=0;

burgerButton.addEventListener('click',() => {
    if(counter%2==0) {
        headerListUL.classList.add("active");
        burgerButton.classList.add("active");
        counter++;
    }
    else {
        headerListUL.classList.remove("active");
        burgerButton.classList.remove("active");
        counter++;
    }
});




// WRITING TEXT

const changingTextSpan = document.querySelector("#changing-text");
const textArray = ['Frontend Developer','Designer','Video Editor'];

let arrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex<textArray[arrayIndex].length) {
        changingTextSpan.textContent+=textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,100);
    }
    else {
        setTimeout(erase,1000);
    }
}

function erase() {
    if(charIndex>0) {
        changingTextSpan.textContent=textArray[arrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,100);
    }
    else {
        arrayIndex++;
        if(arrayIndex>=textArray.length) arrayIndex=0;
        setTimeout(type,1000)
    }
}

document.addEventListener("DOMContentLoaded", function() { 
    if(textArray.length) setTimeout(type, 100);
  });


//SHADOW HEADER 

const header = document.querySelector('header');

const stickHeader = () => {
  const scroll = window.scrollY;

  if (scroll > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

window.addEventListener('scroll',stickHeader)


