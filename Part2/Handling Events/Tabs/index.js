function clickTab(e) {
  let tabs = e.target.parentNode.parentNode.querySelectorAll("[data-tabname]");
  for (let tab of tabs) {
    if (tab.getAttribute("data-tabname") == e.target.textContent) {
      tab.hidden = false;
    } else {
      tab.hidden = true;
    }
  }
  e.target.parentNode.childNodes.forEach((node) => {
    node.className = "";
  });
  e.target.className = "selected";
}
function asTabs(node) {
  let buttons = document.createElement("div");
  let first = true;
  for (let tab of node.children) {
    let button = document.createElement("button");
    button.textContent = tab.getAttribute("data-tabname");
    button.onclick = clickTab;
    if (first) {
      button.className = "selected";
      tab.hidden = false;
      first = false;
    } else {
      tab.hidden = true;
    }
    buttons.appendChild(button);
  }
  node.insertBefore(buttons, node.firstChild);
}
asTabs(document.querySelector("tabs"));
