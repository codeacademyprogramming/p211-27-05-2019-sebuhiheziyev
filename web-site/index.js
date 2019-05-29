

const text = document.querySelector("textarea");

const mainDiv = document.getElementsByClassName("main")[0];


document.onkeydown = function(e){
if( e.keyCode === 13){
 e.preventDefault();
 const newDiv = document.createElement("div");
 newDiv.innerHTML = text.value;
 text.value = "";
 mainDiv.appendChild(newDiv);
 
}
}

