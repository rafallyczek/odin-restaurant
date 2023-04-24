export function createHyperlink(text, href, target) {
  const hyperlink = document.createElement("a");
  hyperlink.textContent = text;
  hyperlink.href = href;
  if (target) hyperlink.target = "_blank";
  return hyperlink;
}

export function createTextNode(text) {
  const textNode = document.createTextNode(text);
  return textNode;
}

export function createListItem(element, id) {
  const listItem = document.createElement("li");
  listItem.setAttribute("id", id);
  listItem.appendChild(element);
  return listItem;
}

export function activateTab(tab) {
  _deactivateTabs();
  tab.classList.add("active");
}

function _deactivateTabs() {
  const tabs = Array.from(document.querySelectorAll("li"));
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].classList.contains("active")) {
      tabs[i].classList.remove("active");
      break;
    }
  }
}
