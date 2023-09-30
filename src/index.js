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
  const menuCards = document.querySelectorAll(".card");
  const closeCartBtn = document.getElementById("close-cart");
  navButtons.forEach((nav) => {
    nav.addEventListener("click", renderPage);
  });

  menuCards.forEach((card) => {
    card.addEventListener("click", openCart);
  });

  closeCartBtn.addEventListener("click", closeCart);
}
function openCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.style.visibility = "visible";
  cartDiv.style.width = "300px";
  cartDiv.style.opacity = 1;
}

function closeCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.style.visibility = "hidden";
  cartDiv.style.width = "0px";
  cartDiv.style.opacity = 0;
}
