import "./style.css";

function content() {
  const content = document.querySelector(".content");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main");

  mainContainer.appendChild(main());
  mainContainer.appendChild(footer());

  content.appendChild(header());
  content.appendChild(mainContainer);
}

//Creates header content
function header() {
  const header = document.createElement("header");
  header.classList.add("bgc-dark");

  const title = document.createElement("h1");
  title.classList.add("fs-large");
  title.textContent = "Superb Restaurant";

  header.appendChild(title);

  const navigation = document.createElement("ul");
  navigation.classList.add("nav");
  navigation.appendChild(createListItem(createTextNode("Home")));
  navigation.appendChild(createListItem(createTextNode("Menu")));
  navigation.appendChild(createListItem(createTextNode("Contact")));

  header.appendChild(navigation);

  return header;
}

//Creates main content
function main() {
  const main = document.createElement("main");

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  welcome.classList.add("bgc-dark");

  const title = document.createElement("h2");
  title.textContent = "Welcome to Superb Restuarant!";
  title.classList.add("text-center");

  const message = document.createElement("p");
  message.textContent = "The Superb Restaurant is best restaurant in existence. When You try our meals, no other food will be ever needed again. Check out our Menu and order via phone number visible in Contact tab.";

  welcome.appendChild(title);
  welcome.appendChild(message);

  main.appendChild(welcome);

  return main;
}

//Creates footer content
function footer() {
  const footer = document.createElement("footer");
  footer.classList.add("bgc-dark");
  footer.classList.add("text-center");

  const author = document.createElement("p");
  const photo = document.createElement("p");

  //Paragraph with page author information
  author.appendChild(createTextNode("Page made by "));
  author.appendChild(
    createHyperlink("rafallyczek", "https://github.com/rafallyczek", true)
  );
  author.appendChild(createTextNode(" while working with "));
  author.appendChild(
    createHyperlink("The Odin Project", "https://www.theodinproject.com/", true)
  );

  //Paragraph with photo information
  photo.appendChild(
    createHyperlink("Photo", "https://unsplash.com/photos/MQUqbmszGGM", true)
  );
  photo.appendChild(createTextNode(" by "));
  photo.appendChild(
    createHyperlink("Ivan Torres", "https://unsplash.com/@iavnt", true)
  );
  photo.appendChild(createTextNode(" at "));
  photo.appendChild(createHyperlink("Unsplash", "https://unsplash.com/", true));

  footer.appendChild(photo);
  footer.appendChild(author);

  return footer;
}

// Utility functions

function createHyperlink(text, href, target) {
  const hyperlink = document.createElement("a");
  hyperlink.textContent = text;
  hyperlink.href = href;
  if (target) hyperlink.target = "_blank";
  return hyperlink;
}

function createTextNode(text) {
  const textNode = document.createTextNode(text);
  return textNode;
}

function createListItem(element) {
  const listItem = document.createElement("li");
  listItem.appendChild(element);
  return listItem;
}

content();
