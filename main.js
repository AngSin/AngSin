const enterPress = document.getElementById("enter");
const links = document.getElementsByTagName("a");
const listItems = document.getElementsByTagName("li");

let visited = false;

let buzzAudio = document.getElementById("buzz-audio"); 
buzzAudio.volume = 0.4;

function buzz() { 
    buzzAudio.play(); 
} 

let activeIndex = 0;
listItems[activeIndex].style.color = "rgb(180,255,70)";
listItems[activeIndex].style.fontWeight = 900;

setInterval(() => {
  if (enterPress.style.color === "" || enterPress.style.color === "white") enterPress.style.color = "rgb(255,95,95)";
  else enterPress.style.color = "white"
}, 1000);

window.addEventListener("keydown", (e) => {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "rgb(248,209, 99)";
    listItems[i].style.fontWeight = "";
  }
  if (e.code === "Space") {
    e.preventDefault();
    if (!visited) {
      visited = true;
      window.open(links[1].href);
    }
    const linkIndex = Math.floor(Math.random() * links.length);
    window.open(links[linkIndex].href);
  }
  else if (e.code === "ArrowDown") {
    e.preventDefault();
    if (activeIndex < listItems.length - 1) activeIndex++;
    else buzz();
  }
  else if (e.code === "ArrowUp") {
    e.preventDefault();
    if (activeIndex > 0) activeIndex--;
    else buzz();
  }
  else if (e.code === "Enter") {
    e.preventDefault();
    window.open(listItems[activeIndex].children[0].href);
  }
  listItems[activeIndex].style.color = "rgb(180,255,70)";
  listItems[activeIndex].style.fontWeight = 900;
});