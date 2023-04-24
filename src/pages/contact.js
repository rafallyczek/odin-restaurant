import "../style.css";
import { activateTab } from "../scripts/utility.js";

export function contact(){
    const main = document.querySelector("main");

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("mainContentDiv");
    mainContentDiv.classList.add("bgc-dark");

    const title = document.createElement("h2");
    title.textContent = "Contact information";
    title.classList.add("text-center");

    mainContentDiv.appendChild(title);

    main.appendChild(mainContentDiv);
    const contact = document.querySelector("#contact");
    activateTab(contact);
}