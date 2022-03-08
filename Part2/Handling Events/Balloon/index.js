let para = document.querySelector("p");
para.style.fontSize = "40px";
window.addEventListener("keydown", (e) => {
  var sizeBalloon = parseInt(para.style.fontSize);
  if (e.key == "ArrowUp") {
    sizeBalloon += 10;
  } else {
    sizeBalloon -= 10;
  }
  para.style.fontSize = sizeBalloon + "px";
});
