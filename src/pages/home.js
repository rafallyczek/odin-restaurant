import "../style.css";
import { activateTab } from "../scripts/utility.js";

export function home() {
  const main = document.querySelector("main");

  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content-div");
  mainContentDiv.classList.add("bgc-dark");

  const title = document.createElement("h2");
  title.textContent = "Welcome to Superb Restuarant!";
  title.classList.add("text-center");

  const message = document.createElement("p");
  message.textContent =
    "The Superb Restaurant is best restaurant in existence. When You try our meals, no other food will be ever needed again. Check out our Menu and order via phone number visible in Contact tab.";

  mainContentDiv.appendChild(title);
  mainContentDiv.appendChild(message);

  main.appendChild(mainContentDiv);
  const home = document.querySelector("#home");
  activateTab(home);
}
