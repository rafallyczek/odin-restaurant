import "../style.css";
import { activateTab } from "../scripts/utility.js";

export function menu(){
    const main = document.querySelector("main");

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("mainContentDiv");
    mainContentDiv.classList.add("bgc-dark");

    const title = document.createElement("h2");
    title.textContent = "Menu";
    title.classList.add("text-center");

    mainContentDiv.appendChild(title);

    main.appendChild(mainContentDiv);
    const menu = document.querySelector("#menu");
    activateTab(menu);
}