import "./style.css";

function footer() {
  const footer = document.createElement("footer");
  footer.classList.add("bgc-dark");
  footer.classList.add("text-center");

  const author = document.createElement("p");
  let text = document.createTextNode("Page made by ");
  let link = document.createElement("a");
  link.textContent = "rafallyczek";
  link.href = "https://github.com/rafallyczek";
  link.target = "_blank";

  author.appendChild(text);
  author.appendChild(link);

  text = document.createTextNode(" while working with ");
  link = document.createElement("a");
  link.textContent = "The Odin Project";
  link.href = "https://www.theodinproject.com/";
  link.target = "_blank";

  author.appendChild(text);
  author.appendChild(link);

  const photo = document.createElement("p");
  link = document.createElement("a");
  link.textContent = "Photo";
  link.href = "https://unsplash.com/photos/MQUqbmszGGM";
  link.target = "_blank";
  text = document.createTextNode(" by ");

  photo.appendChild(link);
  photo.appendChild(text);

  link = document.createElement("a");
  link.textContent = "Ivan Torres";
  link.href = "https://unsplash.com/@iavnt";
  link.target = "_blank";
  text = document.createTextNode(" at ");

  photo.appendChild(link);
  photo.appendChild(text);

  link = document.createElement("a");
  link.textContent = "Unsplash";
  link.href = "https://unsplash.com/";
  link.target = "_blank";

  photo.appendChild(link);

  footer.appendChild(photo);
  footer.appendChild(author);

  return footer;
}

function content() {
  const content = document.querySelector(".content");

  const header = document.createElement("header");
  header.classList.add("bgc-dark");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main");

  const main = document.createElement("main");

  mainContainer.appendChild(main);
  mainContainer.appendChild(footer());

  content.appendChild(header);
  content.appendChild(mainContainer);
}

content();
