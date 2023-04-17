import "../style.css";

export function home() {
  const main = document.querySelector("main");

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  welcome.classList.add("bgc-dark");

  const title = document.createElement("h2");
  title.textContent = "Welcome to Superb Restuarant!";
  title.classList.add("text-center");

  const message = document.createElement("p");
  message.textContent =
    "The Superb Restaurant is best restaurant in existence. When You try our meals, no other food will be ever needed again. Check out our Menu and order via phone number visible in Contact tab.";

  welcome.appendChild(title);
  welcome.appendChild(message);

  main.appendChild(welcome);
}
