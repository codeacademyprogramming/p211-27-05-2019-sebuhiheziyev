// const p211 = [
//   "Sebuhi",
//   "Amelie",
//   "Sebine",
//   "Ceyhun",
//   "Ramiz",
//   "Sadiq",
//   "Qedim",
//   "Nurlan",
//   "Resad",
//   "Emil",
//   "GUL"
// ];

// const halfWords = p211.map(function(item, i) {
//   return [item.substr(0, item.length / 2), item.substr(item.length / 2)];
// });

// const p211Hello = p211.map(function(item, i, arr) {
//   return "Salam " + item;
// });

// const biggerIndexes = p211.map(function(item, i) {
//   if (item.length > 5) {
//     return i;
//   }
// });

// const p211BiggerIsBetter = p211.filter(function(item, i) {
//   return item.length > 5;
// });

// const p211LessIsBetter = p211.filter(function(item) {
//   return item.length <= 5;
// });

// const sumOfLetters = p211.reduce(function(pv, cv, i) {
//   return pv + cv.length;
// });

// const numbers = [10, 5, 2, 7, 5];

// const multiNumbers = numbers.reduce(function(result, item) {
//   return result + item;
// }, 5);

// function ReduceArray(array, callbackFunc) {
//   let result = array[0];

//   for (let i = 1; i < array.length; i++) {
//     result = callbackFunc(result, array[i], i);
//   }

//   return result;
// }

// const multiNumbersMy = ReduceArray(numbers, function(res, item) {
//   return res * item;
// });

// const emails = [
//   "samir@code.az",
//   "sadiq@code.edu.az",
//   "sebuhi@code.com",
//   "sebine@code.edu.az",
//   "nadir@mail.ru"
// ];

// const firstEduaz = emails.find(function(email, i) {
//   return email.includes("code.edu.az");
// });

//Add tag dynamically
// const tags = Array.from(document.getElementsByClassName("tag"));

// tags.map(function(tag) {
//   tag.onclick = function() {
//     tag.classList.toggle("scaled");
//   };

//   tag.querySelector("i").onclick = function() {
//     tag.remove();
//   };
// });

// const mybtn = document.getElementsByClassName("mybtn")[0];
// const input = document.getElementById("tag-input");
// const wrapper = document.getElementsByClassName("tag-wrapper")[0];

// mybtn.onclick = function() {
//   const tagValue = input.value;

//   if (tagValue !== "") {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("tag");
//     newDiv.innerHTML = tagValue + "<i class='fas fa-times'></i>";

//     newDiv.onclick = function() {
//       newDiv.classList.toggle("scaled");
//     };

//     wrapper.appendChild(newDiv);
//   }
// };



// window.onscroll = function() {
//   const topDiv = document.getElementById("top");
//   if (window.scrollY > 600) {
//     topDiv.classList.add("show");
//   } else {
//     topDiv.classList.remove("show");
//   }
// };

// const password = document.getElementById("password");
// password.onpaste = function(e) {
//   //cancels default event of browsers
//   e.preventDefault();
// };

// const email = document.getElementById("email");
// email.oncopy = function() {
//   alert("Copy successfull!!!");
// };

const box  = document.getElementsByClassName("box")[0];
const gameZone  = document.getElementsByClassName("game-zone")[0];
const lahmacun = document.getElementsByClassName("meal")[0];

let boxTop = 0;
let boxLeft = 0;
const gameLeft = gameZone.clientWidth;
const gameTop = gameZone.clientHeight;

console.log(gameLeft, gameTop);

document.onkeydown = function(e)
{
    e.preventDefault();
    if(e.keyCode === 37){
        //user pressed left
        boxLeft -= 10;

        if(boxLeft < 0)
        {
            boxLeft = gameLeft - 100;
        }
    }
    else if(e.keyCode === 38)
    {
        //user pressed up
        boxTop -= 10;

        if(boxTop < 0)
        {
            boxTop = gameTop - 100;
        }
    }
    else if(e.keyCode === 39)
    {
        //user pressed right
        boxLeft += 10;

        if(boxLeft > gameLeft)
        {
            boxLeft = 0;
        }
    }
    else if(e.keyCode === 40)
    {
        //user pressed bottom
        boxTop += 10;

        if(boxTop > gameTop)
        {
            boxTop = 0;
        }
    }

    box.style.top = boxTop + "px";
    box.style.left = boxLeft + "px";

    const lahLeft = parseInt(window.getComputedStyle(lahmacun).left);
    const lahTop = parseInt(window.getComputedStyle(lahmacun).top);
    if(boxLeft + 100 === lahLeft && boxTop === lahTop ||
        boxTop + 100 === lahTop && boxLeft === lahLeft)
    {
        lahmacun.style.display = "none";
    }
}