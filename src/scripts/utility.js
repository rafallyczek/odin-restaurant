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

export function createMenuItem(name, description, price){
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const itemName = document.createElement("p");
  itemName.classList.add("text-clr-primary");
  itemName.classList.add("fs-medium");
  itemName.classList.add("fw-600");
  itemName.textContent = name;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = description;

  const itemPrice = document.createElement("p");
  itemPrice.textContent = price;

  menuItem.appendChild(itemName);
  menuItem.appendChild(itemDescription);
  menuItem.appendChild(itemPrice);

  return menuItem;
}

//Sets tab as active
export function activateTab(tab) {
  _deactivateTabs();
  tab.classList.add("active");
}

//Removes active class from active tab
function _deactivateTabs() {
  const tabs = Array.from(document.querySelectorAll("li"));
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].classList.contains("active")) {
      tabs[i].classList.remove("active");
      break;
    }
  }
}
