import Home from "./home";
import Menu from "./menu";
import Locations from "./locations";
import "./style.css";

const content = document.getElementById("content");

content.innerHTML = Home();

setEventListners();

function renderPage(e) {
  if (e.target.textContent == "Home") {
    content.innerHTML = Home();
    setEventListners();
  }
  if (e.target.textContent == "Menu") {
    content.innerHTML = Menu();
    setEventListners();
  }
  if (e.target.textContent == "Locations") {
    content.innerHTML = Locations();
    setEventListners();
  }
}

function setEventListners() {
  const navButtons = document.querySelectorAll(".nav-item");

  navButtons.forEach((nav) => {
    nav.addEventListener("click", renderPage);
  });
}
