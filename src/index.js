import "./style.css";

function content(){
    const content = document.querySelector(".content");

    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

content();