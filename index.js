// Get the image element
const myImg = document.querySelector(".myImg");

// Get the button element
const myButton1 = document.querySelector(".myButton1");
const myButton2 = document.querySelector(".myButton2");

// Get the h1 element
const myText = document.querySelector("h1");

// Add an event listener to the button
myButton1.addEventListener("click", function() {
  // Change the image src
  myImg.src = "https://media.tenor.com/4Bg3yiJZ3VAAAAAC/anime-kawaii.gif";
  myText.innerHTML = "Ya hoo!! see ya tomorrow😍"
});

myButton2.addEventListener("click", function() {
  // Change the image src
  myImg.src = "https://media.tenor.com/xeUPMqLpgLEAAAAC/aqua-kono-subarashii-sad.gif";
  myText.innerHTML = "Really!! 😭 "
});


// // index.js

// // Function to move and disable the "No" button
// function moveNoButton() {
//   var noButton = document.querySelector('.no-button');
  
//   // Move the "No" button to a different location
//   noButton.style.position = 'absolute';
//   noButton.style.top = Math.random() * window.innerHeight + 'px';
//   noButton.style.left = Math.random() * window.innerWidth + 'px';
// }

// // Attach moveANoButton() to the "No" button hover event
// document.querySelector('.no-button').addEventListener('mouseover', moveNoButton);

