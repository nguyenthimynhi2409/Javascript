var dots = [];
for (var i = 0; i < 15; i++) {
    var node = document.createElement("div");
    node.className = "dot";
    document.body.appendChild(node);
    dots.push(node);
}
var currentDot = 0;

window.addEventListener("mousemove", e => {
    var dot = dots[currentDot];
    dot.style.left = (e.pageX - 3) + "px";
    dot.style.top = (e.pageY - 3) + "px";
    console.log("current" + currentDot);
    currentDot = (currentDot + 1) % dots.length;

    console.log("length" + dots.length);
    console.log(currentDot);
});