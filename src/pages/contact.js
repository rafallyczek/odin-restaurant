import "../style.css";
import { activateTab } from "../scripts/utility.js";

export function contact(){
    const main = document.querySelector("main");

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("main-content-div");
    mainContentDiv.classList.add("bgc-dark");

    const title = document.createElement("h2");
    title.textContent = "Contact information";
    title.classList.add("text-center");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone number: 123-456-789"

    const email = document.createElement("p");
    email.textContent = "Email: superb@restaurant.com";

    const address = document.createElement("p");
    address.textContent = "Address: 123 Delicious St, Pizza Town";

    mainContentDiv.appendChild(title);
    mainContentDiv.appendChild(phoneNumber);
    mainContentDiv.appendChild(email);
    mainContentDiv.appendChild(address);

    main.appendChild(mainContentDiv);
    const contact = document.querySelector("#contact");
    activateTab(contact);
}