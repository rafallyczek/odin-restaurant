import "../style.css";
import { activateTab, createMenuItem } from "../scripts/utility.js";

export function menu(){
    const main = document.querySelector("main");

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("main-content-div");
    mainContentDiv.classList.add("bgc-dark");

    const title = document.createElement("h2");
    title.textContent = "Menu";
    title.classList.add("text-center");

    mainContentDiv.appendChild(title);
    mainContentDiv.appendChild(createMenuItem("French fries", "Deep-fried potatoes with addition of salt or ketchup (client's choice).", "Price: 5$"));
    mainContentDiv.appendChild(createMenuItem("Garlic bread", "Baguette topped with garlic and butter.", "Price: 5$"));
    mainContentDiv.appendChild(createMenuItem("Pizza Margherita", "Pizza made with tomatoe sauce, mozarella cheese, basil and olive oil.", "Price: 15$"));
    mainContentDiv.appendChild(createMenuItem("Spaghetti Bolognese", "Spaghetti pasta with Bolognese sauce.", "Price: 15$"));
    mainContentDiv.appendChild(createMenuItem("Pierogi", "Dumplings filled with mix of mashed potatoes, fried onions and farmer cheese.", "Price: 10$"));
    mainContentDiv.appendChild(createMenuItem("Pancakes", "Sweet and fluffy pancakes with fruits and whipped cream.", "Price: 10$"));

    main.appendChild(mainContentDiv);
    const menu = document.querySelector("#menu");
    activateTab(menu);
}