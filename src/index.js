import { content, clear } from "./scripts/layout.js";
import { home } from "./pages/home.js";
import { menu } from "./pages/menu.js";
import { contact } from "./pages/contact.js";

function init() {
  content();
  home();
}

init();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

homeButton.addEventListener("click", () => {
  if(!homeButton.classList.contains("active")){
    clear();
    home();
  }
});

menuButton.addEventListener("click", () => {
  if(!menuButton.classList.contains("active")){
    clear();
    menu();
  }
});

contactButton.addEventListener("click", () => {
  if(!contactButton.classList.contains("active")){
    clear();
    contact();
  } 
});