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

export function createListItem(element) {
  const listItem = document.createElement("li");
  listItem.appendChild(element);
  return listItem;
}
